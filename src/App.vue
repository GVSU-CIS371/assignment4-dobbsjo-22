<template>
  <div id="app-layout">
    <Beverage :isIced="currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input type="radio" :value="temp" v-model="currentTemp" /> {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input type="radio" :value="base" v-model="currentBase" /> {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input type="radio" :value="creamer" v-model="currentCreamer" /> {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input type="radio" :value="syrup" v-model="currentSyrup" /> {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>

    <input type="text" v-model="beverageName" placeholder="Beverage Name" />
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>

    <div id="beverage-container">
      <h3>Saved Recipes</h3>
      <div v-if="savedBeverages.length === 0">No recipes saved yet!</div>
      <ul>
        <li v-for="bev in savedBeverages" :key="bev.id">
          <button @click="beverageStore.showBeverage(bev)">{{ bev.name }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

const beverageStore = useBeverageStore();
const { 
  temps, bases, creamers, syrups,
  currentTemp, currentBase, currentCreamer, currentSyrup, 
  beverageName, savedBeverages 
} = storeToRefs(beverageStore);
</script>

<style lang="scss">
body, html {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul { list-style: none; color: white; }
label { margin-right: 10px; cursor: pointer; }
</style>