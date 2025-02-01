<template>
  <div class="flex h-screen ">
    <div class="w-[25%]  ">
      <ToolbarComponent />
    </div>
    <div class=" flex-1 border-2 border-blue-500">
      <CanvasComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolbarComponent from "../components/ToolbarComponent.vue";
import CanvasComponent from "../components/CanvasComponent.vue";
</script>

<style></style>
