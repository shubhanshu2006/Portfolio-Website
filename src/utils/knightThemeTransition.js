/**
 * Knight Theme Transition with Sword Cut & Audio SFX
 * Inspired by anzalabidi.dev
 *
 * Spawns an animated charging knight on horseback that rears up,
 * draws its sword, and slashes across the screen.
 * Accompanied by realistic galloping hoofbeats, sword whoosh,
 * metallic ring, and a tearing cut sound.
 * The screen splits along the jagged sword cut to reveal the new theme.
 */

// Timing constants (in ms)
const RUN_DURATION = 400; // Gallop approach
const IMPACT_TIME = 620; // Exact moment the sword strikes/slashes the screen
const TEAR_EXPAND_DURATION = 860; // Duration for the tear to open
const TOTAL_DURATION = 1480; // Full duration of rider's charge across screen
const CUT_ANGLE_DEG = 70; // Angle of the sword cut across the page

const KNIGHT_LINES_SRC = "/knight-lines.webp";
const KNIGHT_FILL_SRC = "/knight-fill.webp";
const KNIGHT_ASPECT = 281 / 400; // Aspect ratio of the sprite frames

// Sprite frame indices (14 frames across, 0 to 13)
const GALLOP_FRAMES = [0, 1, 2, 3, 4, 5, 6, 7];
const [FRAME_DRAW, FRAME_HIGH, FRAME_SLASH, FRAME_FOLLOW] = [8, 9, 10, 11];
const [FRAME_LAND1, FRAME_LAND2] = [12, 13];

const SFX_FILES = {
  hoof: [1, 2, 3, 4, 5, 6].map((i) => `/sfx/hoof-${i}.mp3`),
  whoosh: ["/sfx/whoosh.mp3"],
  ring: ["/sfx/ring.mp3"],
  tear: ["/sfx/tear.mp3"],
  land: ["/sfx/land.mp3"],
};

// Global audio & asset cache
let audioCtx = null;
let masterGain = null;
const audioBuffers = {};
let audioPreloadPromise = null;
let imagePreloadPromise = null;

/**
 * Preload knight sprite images
 */
export function preloadKnightImages() {
  if (!imagePreloadPromise && typeof window !== "undefined") {
    imagePreloadPromise = Promise.all(
      [KNIGHT_LINES_SRC, KNIGHT_FILL_SRC].map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
      })
    );
  }
  return imagePreloadPromise;
}

/**
 * Preload sound effects into Web Audio buffers
 */
export function preloadKnightAudio() {
  if (typeof window === "undefined") return Promise.resolve();

  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      try {
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.85;
        masterGain.connect(audioCtx.destination);
      } catch (e) {
        console.warn("AudioContext initialization error:", e);
      }
    }
  }

  if (!audioCtx) return Promise.resolve();

  if (!audioPreloadPromise) {
    audioPreloadPromise = Promise.all(
      Object.keys(SFX_FILES).map(async (key) => {
        const urls = SFX_FILES[key];
        const buffers = await Promise.all(
          urls.map(async (url) => {
            try {
              const res = await fetch(url);
              const arrayBuf = await res.arrayBuffer();
              return await audioCtx.decodeAudioData(arrayBuf);
            } catch (err) {
              return null;
            }
          })
        );
        audioBuffers[key] = buffers.filter(Boolean);
      })
    ).catch(() => {
      audioPreloadPromise = null;
    });
  }

  return audioPreloadPromise;
}

/**
 * Play a specific sound buffer with timing, pitch rate, stereo panning and tone filter
 */
function playSound(name, delaySeconds, { gain = 1, rate = 1, pan = 0, tone = 0 } = {}) {
  const buffers = audioBuffers[name];
  if (!buffers || buffers.length === 0 || !audioCtx || !masterGain) return;

  const targetTime = audioCtx.currentTime + Math.max(0, delaySeconds);
  const source = audioCtx.createBufferSource();
  source.buffer = buffers[Math.floor(Math.random() * buffers.length)];
  source.playbackRate.value = rate;

  let currentAudioNode = source;

  if (tone) {
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = tone;
    currentAudioNode.connect(filter);
    currentAudioNode = filter;
  }

  const gainNode = audioCtx.createGain();
  gainNode.gain.value = gain;
  currentAudioNode.connect(gainNode);
  currentAudioNode = gainNode;

  if (pan !== 0 && audioCtx.createStereoPanner) {
    try {
      const panner = audioCtx.createStereoPanner();
      panner.pan.value = Math.max(-1, Math.min(1, pan));
      currentAudioNode.connect(panner);
      currentAudioNode = panner;
    } catch {}
  }

  currentAudioNode.connect(masterGain);
  source.start(targetTime);
}

const jitter = (val, amt) => val * (1 + (Math.random() - 0.5) * 2 * amt);
const HOOF_LOOP_STEP = 528;
const HOOF_PATTERN = [0, 64, 176, 240];

function scheduleHoofbeats(startMs, endMs, paramFn) {
  for (let t = startMs; t < endMs; t += HOOF_LOOP_STEP) {
    for (const offset of HOOF_PATTERN) {
      const beatTime = t + offset + (Math.random() - 0.5) * 10;
      if (beatTime >= endMs) break;
      const params = paramFn(beatTime);
      if (params.gain >= 0.02) {
        playSound("hoof", beatTime / 1000, {
          gain: jitter(params.gain, 0.18),
          rate: jitter(1, 0.06),
          pan: params.pan,
          tone: params.tone,
        });
      }
    }
  }
}

/**
 * Play full coordinated sword slash & horse charge audio
 */
function playSwordCutSound(goingDark, { run = RUN_DURATION, impact = IMPACT_TIME }) {
  if (audioCtx?.state === "suspended") {
    audioCtx.resume();
  }

  const dir = goingDark ? -1 : 1;

  // 1. Approaching horse galloping footsteps (panning across from entrance)
  scheduleHoofbeats(0, run - 40, (t) => {
    const progress = t / run;
    return {
      gain: 0.25 + 0.5 * progress,
      pan: dir * (0.9 - 0.7 * progress),
      tone: 2200 + 5000 * progress,
    };
  });

  // 2. Heavy hoof impact & rider prep
  playSound("hoof", (run - 20) / 1000, { gain: 0.95, rate: 0.9, pan: dir * 0.2 });
  playSound("land", (run - 10) / 1000, { gain: 0.35, rate: 0.85, pan: dir * 0.2, tone: 900 });

  // 3. Sword cut sound sequence:
  // - High velocity whoosh of the blade swinging
  playSound("whoosh", (impact - 190) / 1000, { gain: 0.7, rate: 1.1, pan: dir * 0.1 });
  // - Sharp metallic ring of the cutting edge
  playSound("ring", (impact - 10) / 1000, { gain: goingDark ? 0.6 : 0.52, rate: goingDark ? 1.0 : 1.12 });
  // - Fierce page tear / slicing cut sound
  playSound("tear", (impact - 95) / 1000, { gain: goingDark ? 0.75 : 0.65, rate: goingDark ? 1.0 : 1.08 });
  // - Ground strike impact
  playSound("land", impact / 1000, { gain: 0.45, rate: 0.7, tone: 600 });

  // 4. Galloping footsteps fading into the distance
  const awayStart = impact + 230;
  const awayEnd = awayStart + 700;
  scheduleHoofbeats(awayStart, awayEnd, (t) => {
    const progress = (t - awayStart) / (awayEnd - awayStart);
    return {
      gain: 0.6 * Math.pow(1 - progress, 1.4),
      pan: -dir * (0.2 + 0.75 * progress),
      tone: 5000 - 3600 * progress,
    };
  });
}

/**
 * Bezier curve evaluator for tear progression
 */
function cubicBezier(p0, p1, p2, p3) {
  const bz = (a, b, t) => 3 * (1 - t) * (1 - t) * t * a + 3 * (1 - t) * t * t * b + t * t * t;
  return (x) => {
    let lower = 0,
      upper = 1;
    for (let i = 0; i < 22; i++) {
      const mid = (lower + upper) / 2;
      let l = 0,
        u = 1;
      for (let j = 0; j < 22; j++) {
        const m = (l + u) / 2;
        bz(p0, p2, m) < mid ? (l = m) : (u = m);
      }
      bz(p1, p3, (l + u) / 2) < x ? (lower = mid) : (upper = mid);
    }
    return (lower + upper) / 2;
  };
}

const SPLINE_BEZIER = [0.42, 0.06, 0.28, 1];
const tearEase = cubicBezier(...SPLINE_BEZIER);

/**
 * Generates an SVG mask with procedural turbulence displacement
 * to simulate the organic, jagged cut tearing across the screen
 */
function createTearMaskSvg(w, h, angleDeg, startTimeMs) {
  const diag = Math.hypot(w, h) + 240;
  const halfDiag = diag / 2 + 40;
  const toSec = (ms) => `${(ms / 1000).toFixed(3)}s`;
  const splineAttr = `calcMode="spline" keyTimes="0;1" keySplines="${SPLINE_BEZIER.join(" ")}" fill="freeze"`;

  let tearParticles = "";
  const count = w < 700 ? 5 : 8;
  for (let i = 0; i < count; i++) {
    const tx = (Math.random() - 0.5) * 0.8 * diag;
    const norm = (0.12 + Math.random() * 0.5) * halfDiag;
    const ty = (i % 2 ? 1 : -1) * norm;
    const beginMs = startTimeMs + tearEase(norm / halfDiag) * TEAR_EXPAND_DURATION - (40 + Math.random() * 80);
    const radius = 18 + Math.random() * 34;
    tearParticles += `<circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="0"><animate attributeName="r" from="0" to="${radius.toFixed(1)}" begin="${toSec(beginMs)}" dur="0.220s" ${splineAttr}/></circle>`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><filter id="d" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.0105" numOctaves="3" seed="${Math.floor(Math.random() * 90)}"/><feDisplacementMap in="SourceGraphic" scale="58" xChannelSelector="R" yChannelSelector="G"/></filter><g filter="url(#d)"><g transform="translate(${w / 2} ${h / 2}) rotate(${angleDeg})" fill="#000"><rect x="${(-diag).toFixed(1)}" y="0" width="${(2 * diag).toFixed(1)}" height="0"><animate attributeName="y" from="0" to="${(-halfDiag).toFixed(1)}" begin="${toSec(startTimeMs)}" dur="${toSec(TEAR_EXPAND_DURATION)}" ${splineAttr}/><animate attributeName="height" from="0" to="${(2 * halfDiag).toFixed(1)}" begin="${toSec(startTimeMs)}" dur="${toSec(TEAR_EXPAND_DURATION)}" ${splineAttr}/></rect>${tearParticles}</g></g></svg>`;

  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
}

/**
 * Creates the DOM elements for the charging rider (echoes + lead)
 */
function createRiderElements(riderWidth, riderHeight, flipDir) {
  const makeRider = (extraClass) => {
    const el = document.createElement("i");
    el.className = `rider ${extraClass}`;
    el.style.cssText = `width:${riderWidth}px;height:${riderHeight}px;--flip:${flipDir}`;
    el.innerHTML = '<b class="k-fill"></b><b class="k-line"></b>';
    return el;
  };
  return [makeRider("is-echo2"), makeRider("is-echo1"), makeRider("is-lead")];
}

function buildSpriteKeyframes(frames, totalMs, totalFrames = 14) {
  const toPercent = (frame) => `${((frame / (totalFrames - 1)) * 100).toFixed(1)}% 0%`;
  return frames.map(([ms, frame]) => ({
    offset: Math.min(1, ms / totalMs),
    maskPosition: toPercent(frame),
    webkitMaskPosition: toPercent(frame),
    easing: "steps(1, end)",
  }));
}

function makeGallopSequence(startMs, endMs, offset = 0) {
  const res = [];
  for (let t = startMs; t < endMs; t += 66) {
    res.push([t, GALLOP_FRAMES[offset++ % GALLOP_FRAMES.length]]);
  }
  return res;
}

/**
 * Main function: triggers the sword cut knight theme transition
 *
 * @param {Function} applyTheme - Callback that toggles html.dark class & sets localStorage
 * @param {boolean} goingDark - True if switching from Light -> Dark, False if Dark -> Light
 */
export function triggerKnightThemeTransition(applyTheme, goingDark) {
  const root = document.documentElement;
  const prefersReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduceMotion) {
    applyTheme();
    return;
  }

  // Ensure assets are preloading/cached
  preloadKnightImages();
  preloadKnightAudio();

  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const dir = goingDark ? 1 : -1;
  const cutAngle = dir * CUT_ANGLE_DEG;

  // Responsive rider dimensions
  const riderW = Math.round(Math.min(340, Math.max(190, winW * 0.32)));
  const riderH = Math.round(riderW * KNIGHT_ASPECT);

  // Trajectory calculation
  const targetX = winW / 2 - dir * Math.min(winW * 0.14, 200) - riderW / 2;
  const targetY = winH / 2 - riderH * 0.62;
  const startX = targetX - dir * (winW * 0.62 + riderW);
  const endX = targetX + dir * (winW * 0.75 + riderW);

  // Create overlay container
  const fxOverlay = document.createElement("div");
  fxOverlay.className = `vt-fx ${goingDark ? "is-shadow" : "is-gold"}`;
  fxOverlay.setAttribute("aria-hidden", "true");

  const seamLength = Math.hypot(winW, winH) + 60;
  fxOverlay.innerHTML = `<i class="vt-seam" style="width:${seamLength}px;left:${winW / 2 - seamLength / 2}px;top:${winH / 2}px;transform:rotate(${cutAngle}deg)"></i>`;
  fxOverlay.append(...createRiderElements(riderW, riderH, dir));

  // Rider motion animation
  const animateRiders = (elapsedDelay = 0) => {
    const durRatio = (ms) => ms / TOTAL_DURATION;
    const animateElem = (elem, keyframes, opts = {}) =>
      elem?.animate(keyframes, {
        duration: TOTAL_DURATION,
        fill: "both",
        delay: -elapsedDelay,
        ...opts,
      });

    const posStr = (x) => `translate(${x.toFixed(1)}px, ${targetY.toFixed(1)}px) scaleX(var(--flip))`;

    const moveKeyframes = [
      { offset: 0, transform: posStr(startX), opacity: 1, easing: "cubic-bezier(0.15, 0.7, 0.3, 1)" },
      { offset: durRatio(RUN_DURATION), transform: posStr(targetX), easing: "linear" },
      { offset: durRatio(690), transform: posStr(targetX + dir * 18), easing: "cubic-bezier(0.5, 0, 0.9, 0.6)" },
      { offset: durRatio(950), transform: posStr(endX * 0.5 + targetX * 0.5), opacity: 1 },
      { offset: durRatio(1080), transform: posStr(endX), opacity: 0 },
      { offset: 1, transform: posStr(endX), opacity: 0 },
    ];

    const gallopBefore = makeGallopSequence(0, 370);
    const spriteKeyframes = buildSpriteKeyframes(
      [
        ...gallopBefore,
        [370, FRAME_DRAW],
        [535, FRAME_HIGH],
        [595, FRAME_SLASH],
        [730, FRAME_FOLLOW],
        ...makeGallopSequence(850, TOTAL_DURATION, gallopBefore.length),
      ],
      TOTAL_DURATION
    );

    fxOverlay.querySelectorAll(".rider").forEach((riderEl, idx, list) => {
      const echoDelay = (list.length - 1 - idx) * 55;
      animateElem(riderEl, moveKeyframes, { delay: echoDelay - elapsedDelay });
      riderEl.querySelectorAll("b").forEach((b) => animateElem(b, spriteKeyframes, { delay: echoDelay - elapsedDelay }));
    });

    // Sword flash on seam line
    animateElem(fxOverlay.querySelector(".vt-seam"), [
      { offset: 0, transform: `rotate(${cutAngle}deg) scaleX(0)`, opacity: 1 },
      { offset: durRatio(570), transform: `rotate(${cutAngle}deg) scaleX(0)`, easing: "cubic-bezier(0.3, 0, 0.2, 1)" },
      { offset: durRatio(650), transform: `rotate(${cutAngle}deg) scaleX(1)`, opacity: 1 },
      { offset: durRatio(1040), transform: `rotate(${cutAngle}deg) scaleX(1)`, opacity: 0 },
      { offset: 1, transform: `rotate(${cutAngle}deg) scaleX(1)`, opacity: 0 },
    ]);
  };

  // Screen shockshake at sword impact
  const triggerShockwave = (delayMs) => {
    try {
      root.animate(
        [
          { offset: 0, translate: "0 0", scale: "1.008" },
          { offset: 0.2, translate: "3px -2px", scale: "1.008" },
          { offset: 0.45, translate: "-2px 2px", scale: "1.008" },
          { offset: 0.7, translate: "1.5px -0.5px", scale: "1.008" },
          { offset: 1, translate: "0 0", scale: "1" },
        ],
        {
          duration: 160,
          delay: Math.max(0, delayMs),
          pseudoElement: "::view-transition-image-pair(root)",
        }
      );
    } catch {}
  };

  // Residual fading scar line
  const leaveScar = () => {
    const scar = document.createElement("i");
    scar.className = "vt-scar";
    scar.setAttribute("aria-hidden", "true");
    scar.style.cssText = `width:${seamLength}px;left:${winW / 2 - seamLength / 2}px;top:${winH / 2}px;transform:rotate(${cutAngle}deg)`;
    document.body.append(scar);
    scar
      .animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 1400,
        easing: "ease-out",
        fill: "forwards",
      })
      .finished.then(() => scar.remove());
  };

  // Play audio sfx
  playSwordCutSound(goingDark, { run: RUN_DURATION, impact: IMPACT_TIME });

  // View transition logic
  if (document.startViewTransition) {
    const maskBlobUrl = createTearMaskSvg(winW, winH, cutAngle, 600);
    const maskCss = `url("${maskBlobUrl}")`;

    const styleEl = document.createElement("style");
    styleEl.textContent = `
      html[data-vt]::view-transition-new(root) {
        -webkit-mask-image: ${maskCss};
        mask-image: ${maskCss};
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
      }
    `;
    document.head.append(styleEl);

    root.style.setProperty("--vt-total", `${TOTAL_DURATION}ms`);
    root.dataset.vt = goingDark ? "to-dark" : "to-light";

    const startTime = performance.now();
    const transition = document.startViewTransition(() => {
      applyTheme();
      document.body.append(fxOverlay);
    });

    transition.ready.then(() => {
      const elapsed = performance.now() - startTime;
      animateRiders(elapsed);
      triggerShockwave(IMPACT_TIME - elapsed);
    });

    transition.finished.finally(() => {
      styleEl.remove();
      URL.revokeObjectURL(maskBlobUrl);
      fxOverlay.remove();
      delete root.dataset.vt;
      leaveScar();
    });
  } else {
    // Fallback if view transitions are not supported:
    // Run rider animation over the page, apply theme at cut moment
    document.body.append(fxOverlay);
    animateRiders(0);
    setTimeout(() => {
      applyTheme();
      triggerShockwave(0);
    }, IMPACT_TIME);
    setTimeout(() => {
      fxOverlay.remove();
      leaveScar();
    }, TOTAL_DURATION);
  }
}
