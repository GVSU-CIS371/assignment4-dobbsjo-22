<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-if="currentCreamer.name !== 'No Cream'" v-slot:top>
        <Creamer />
      </template>
      <template v-if="currentSyrup.name !== 'No Syrup'" v-slot:mid>
        <Syrup />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
import { storeToRefs } from "pinia";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

const { currentCreamer, currentSyrup } = storeToRefs(useBeverageStore());
defineProps<{ isIced: boolean }>();
</script>