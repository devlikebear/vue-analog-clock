<template>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand minute-hand"></div>
      <div class="hand second-hand"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, defineProps } from "vue";

const props = defineProps<{
  size: number;
  secondHandHeight: number;
  minuteHandHeight: number;
  hourHandHeight: number;
}>();

const clockBorder = computed(() => {
  return Math.trunc(props.size * 0.01);
});

const handTop = (height: number): number => {
  return Math.trunc(height - props.size * 0.5) * -1;
};

const dotSize = computed(() => {
  return Math.trunc(props.size * 0.034);
});

const hourDegrees = ref(0);
const minuteDegrees = ref(0);
const secondDegrees = ref(0);
let intervalId: any;
onMounted(() => {
  intervalId = setInterval(() => {
    const now = new Date();
    hourDegrees.value = 30 * (now.getHours() % 12) + now.getMinutes() / 2;
    minuteDegrees.value = 6 * now.getMinutes() + now.getSeconds() / 10;
    secondDegrees.value = 6 * now.getSeconds();
  }, 1000);
});
// onUnmounted : clear interval
onUnmounted(() => clearInterval(intervalId));
</script>

<style scoped lang="scss">
.clock {
  border-radius: 100%;
  background: #ffffff;
  font-family: "Montserrat";
  border: v-bind(clockBorder) solid white;
  box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
}

.clock-face {
  overflow: hidden;
  position: relative;
  width: calc(v-bind(size) * 1px);
  height: calc(v-bind(size) * 1px);
  border-radius: 100%;
}

.hand {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  background: black;
  transform-origin: bottom center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hour-hand {
  height: calc(v-bind(hourHandHeight) * 1px);
  width: 6px;
  top: calc(v-bind(handTop(hourHandHeight)) * 1px);
  transform: rotate(calc(v-bind(hourDegrees) * 1deg));
}

.minute-hand {
  height: calc(v-bind(minuteHandHeight) * 1px);
  width: 4px;
  top: calc(v-bind(handTop(minuteHandHeight)) * 1px);
  transform: rotate(calc(v-bind(minuteDegrees) * 1deg));
}

.second-hand {
  height: calc(v-bind(secondHandHeight) * 1px);
  width: 2px;
  top: calc(v-bind(handTop(secondHandHeight)) * 1px);
  border-radius: 4px;
  background: #ff4b3e;
  transform: rotate(calc(v-bind(secondDegrees) * 1deg));
}

.dot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: calc(v-bind(dotSize) * 1px);
  height: calc(v-bind(dotSize) * 1px);
  border-radius: 100%;
  background: white;
  border: 2px solid #1b1b1b;
  margin: auto;
  z-index: 1;
}
</style>
