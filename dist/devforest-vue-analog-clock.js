import { defineComponent as h, useCssVars as g, unref as r, computed as v, ref as d, onMounted as H, onUnmounted as f, openBlock as _, createElementBlock as m, createStaticVNode as k } from "vue";
const D = { class: "clock" }, z = /* @__PURE__ */ k('<div class="clock-face" data-v-ee4c9417><div class="hand hour-hand" data-v-ee4c9417></div><div class="hand minute-hand" data-v-ee4c9417></div><div class="hand second-hand" data-v-ee4c9417></div><div class="dot" data-v-ee4c9417></div></div>', 1), M = [
  z
], b = /* @__PURE__ */ h({
  __name: "DevforestVueAnalogClock",
  props: {
    size: null,
    secondHandHeight: null,
    minuteHandHeight: null,
    hourHandHeight: null
  },
  setup(e) {
    const n = e;
    g((t) => ({
      "08b41dd4": r(a),
      "86eb3d72": e.size,
      "06c5d540": e.hourHandHeight,
      "6c5b5627": c(e.hourHandHeight),
      ebebeec6: s.value,
      "0756a020": e.minuteHandHeight,
      "2913f9f7": c(e.minuteHandHeight),
      "200ea826": u.value,
      "60ac5360": e.secondHandHeight,
      "7f38c0d2": c(e.secondHandHeight),
      "673c218d": i.value,
      c85a8438: r(o)
    }));
    const a = v(() => Math.trunc(n.size * 0.01)), c = (t) => Math.trunc(t - n.size * 0.5) * -1, o = v(() => Math.trunc(n.size * 0.034)), s = d(0), u = d(0), i = d(0);
    let l;
    return H(() => {
      l = setInterval(() => {
        const t = new Date();
        s.value = 30 * (t.getHours() % 12) + t.getMinutes() / 2, u.value = 6 * t.getMinutes() + t.getSeconds() / 10, i.value = 6 * t.getSeconds();
      }, 1e3);
    }), f(() => clearInterval(l)), (t, C) => (_(), m("div", D, M));
  }
});
const x = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [c, o] of n)
    a[c] = o;
  return a;
}, I = /* @__PURE__ */ x(b, [["__scopeId", "data-v-ee4c9417"]]);
export {
  I as DevforestVueAnalogClock
};
