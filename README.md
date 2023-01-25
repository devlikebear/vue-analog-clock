# DevForest Vue Analog Clock

Very simple analog clock for learning Vue component and css.

Main features:
* Clock face can be any size what you want
* Hands can be any size what you want

## Install

npm:
```shell
npm install devforest-vue-analog-clock
```

## Use in Vue3

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