<template>
  <div class="border-2 border-red-500">
    <canvas
      class="canvas"
      ref="canvasRef"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseout="stopDrawing"
    >
    </canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { drawLine } from "../utils/canvas";
import { useDrawingStore } from "../stores/useDrawingStore";
const drawingStore = useDrawingStore();
const canvasRef = ref<HTMLCanvasElement | null>(null);
const toolbarRef = ref<HTMLCanvasElement | null>(null);
const lastPoint = ref<{ x: number; y: number } | null>(null);

const resizeCanvas = () => {
  const toolbar = document.querySelector(".toolbar");
  const canvas = canvasRef.value;
  if (!canvas || !toolbar) {
    return;
  }

  canvas.width = window.innerWidth - toolbar.clientWidth;
  canvas.height = window.innerHeight;
  console.log(canvas.width, canvas.height);
};

// Démarrer le dessin
const startDrawing = (e: MouseEvent) => {
  const rect = canvasRef.value?.getBoundingClientRect();
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  if (!rect) {
    return;
  }

  drawingStore.setIsDrawing(true);
  lastPoint.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
  console.log(lastPoint.value);
};

// Arrêter le dessin

const stopDrawing = () => {
  drawingStore.setIsDrawing(false);
  lastPoint.value = null;
};

// Dessiner
const draw = (e: MouseEvent) => {
  if (!drawingStore.isDrawing) {
    return;
  }
  const rect = canvasRef.value?.getBoundingClientRect();
  if (!rect) {
    return;
  }

  const currentPoint = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
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

  drawLine(
    ctx,
    lastPoint.value,
    currentPoint,
    drawingStore.color,
    drawingStore.lineWidth,
    drawingStore.isEraser
  );

  lastPoint.value = currentPoint;
};

onMounted(() => {
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }
  const ctx = canvas.getContext("2d");
});
</script>

<style></style>
