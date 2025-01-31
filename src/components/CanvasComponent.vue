<template>
  <div class="border-2 border-green-500">
    <canvas
      ref="canvasRef"
      class="w-full h-full"
      id="canvas"
      @mousedown="startDrawing"
      @mousemove="draw"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const canvasRef = ref<HTMLCanvasElement | null>(null);

const lastPoint = ref<{ x: number; y: number } | null>(null);

// Démarrer le dessin
const startDrawing = (e: MouseEvent) => {
  lastPoint.value = {
    x: e.clientX,
    y: e.clientY,
  };
  console.log(lastPoint.value);
};

// Dessiner
const draw = (e: MouseEvent) => {
  const currentPoint = {
    x: e.clientX,
    y: e.clientY,
  };
  // console.log(currentPoint);
  if (!lastPoint.value) {
    return;
  }

  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(lastPoint.value.x, lastPoint.value.y);
  ctx.lineTo(currentPoint.x, currentPoint.y);
  ctx.lineTo(200, 200);
  ctx.stroke();
};

// Arrêter le dessin
const stopDrawing = (e: MouseEvent) => {
  console.log("stopDrawing", e);
};

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
});
</script>

<style></style>
