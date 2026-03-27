import { defineStore } from "pinia";
import temperatures from "../data/tempretures.json";
import syrupsData from "../data/syrups.json";
import basesData from "../data/bases.json";
import creamersData from "../data/creamers.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures as string[],
    bases: basesData as any[],
    creamers: creamersData as any[],
    syrups: syrupsData as any[],

    beverageName: "",
    currentTemp: temperatures[0],
    currentBase: basesData[0],
    currentCreamer: creamersData[0],
    currentSyrup: syrupsData[0],

    savedBeverages: [] as any[],
  }),

  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) return;
      const newBeverage = {
        id: Date.now(),
        name: this.beverageName,
        temp: this.currentTemp,
        base: { ...this.currentBase },
        creamer: { ...this.currentCreamer },
        syrup: { ...this.currentSyrup },
      };
      this.savedBeverages.push(newBeverage);
      this.beverageName = "";
    },
    showBeverage(beverage: any) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
  persist: true,
});