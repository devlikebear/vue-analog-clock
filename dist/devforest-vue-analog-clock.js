import { defineComponent as h, useCssVars as g, unref as r, computed as v, ref as o, onMounted as H, onUnmounted as f, openBlock as _, createElementBlock as m, createStaticVNode as k } from "vue";
const b = { class: "clock" }, z = /* @__PURE__ */ k('<div class="clock-face" data-v-7c568045><div class="hand hour-hand" data-v-7c568045></div><div class="hand minute-hand" data-v-7c568045></div><div class="hand second-hand" data-v-7c568045></div><div class="dot" data-v-7c568045></div></div>', 1), C = [
  z
], M = /* @__PURE__ */ h({
  __name: "AnalogClock",
  props: {
    size: null,
    secondHandHeight: null,
    minuteHandHeight: null,
    hourHandHeight: null
  },
  setup(e) {
    const n = e;
    g((t) => ({
      "0fcbdebe": r(a),
      "42c118c6": e.size,
      "6c007416": e.hourHandHeight,
      "5cd1efde": c(e.hourHandHeight),
      ddbc6cf2: s.value,
      "053a1d74": e.minuteHandHeight,
      "2e2ad961": c(e.minuteHandHeight),
      dfb84b52: i.value,
      "5e8fd0b4": e.secondHandHeight,
      "750b01fe": c(e.secondHandHeight),
      "07674ff7": l.value,
      "6418f864": r(d)
    }));
    const a = v(() => Math.trunc(n.size * 0.01)), c = (t) => Math.trunc(t - n.size * 0.5) * -1, d = v(() => Math.trunc(n.size * 0.034)), s = o(0), i = o(0), l = o(0);
    let u;
    return H(() => {
      u = setInterval(() => {
        const t = new Date();
        s.value = 30 * (t.getHours() % 12) + t.getMinutes() / 2, i.value = 6 * t.getMinutes() + t.getSeconds() / 10, l.value = 6 * t.getSeconds();
      }, 1e3);
    }), f(() => clearInterval(u)), (t, D) => (_(), m("div", b, C));
  }
});
const x = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [c, d] of n)
    a[c] = d;
  return a;
}, I = /* @__PURE__ */ x(M, [["__scopeId", "data-v-7c568045"]]);
export {
  I as DevforestVueAnalogClock
};
