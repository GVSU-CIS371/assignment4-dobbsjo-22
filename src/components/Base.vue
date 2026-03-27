<template>
  <div 
    class="baseBeverage" 
    :style="{ backgroundColor: currentBase.color }"
  ></div>
</template>

<script setup lang="ts">
import { currentBase } from "../stores/beverage";
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
}
</style>
