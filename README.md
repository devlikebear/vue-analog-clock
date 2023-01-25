# DevForest Vue Analog Clock

A simple analog clock for learning Vue components and CSS.

Main features:

* The clock face can be any size you desire
* The hands can be any size you desire

## Install

npm:
```shell
npm install devforest-vue-analog-clock
```

## Use in Vue 3

```vue
<script setup lang="ts">
import { DevforestVueAnalogClock } from "devforest-vue-analog-clock";
import "devforest-vue-analog-clock/dist/style.css";

...
</script>
<template>

    <div>
        <DevforestVueAnalogClock 
        :size="200" 
        :second-hand-height="90" 
        :minute-hand-height="70" 
        :hour-hand-height="50" />
    </div>
</template>
```