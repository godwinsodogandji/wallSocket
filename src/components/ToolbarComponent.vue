<template>
  <div class="bg-gray-100 h-screen w-full flex flex-col items-center p-6">
    <div class="flex flex-col items-center w-full max-w-lg">
      <div class="flex gap-4 mb-6">
        <button
          class="bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-300 transition"
        >
          <Paintbrush :size="40" color="blue" />
        </button>
        <button
          class="bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-300 transition"
        >
          <Eraser :size="40" color="green" />
        </button>
      </div>

      <div class="w-full mb-6">
        <label for="color-picker" class="font-sans text-sm text-gray-700"
          >Couleur</label
        >
        <input
          type="color"
          id="color-picker"
          class="w-full mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div class="w-full mb-6">
        <label for="thickness-range" class="font-sans text-sm text-gray-700"
          >Épaisseur</label
        >
        <input
          type="range"
          id="thickness-range"
          class="w-full mt-2"
          min="1"
          max="25"
          step="1"
        />
      </div>

      <div class="w-full flex flex-col gap-4">
        <button
          class="flex items-center gap-3 bg-orange-200 p-2 rounded-lg hover:bg-orange-300 transition"
        >
          <RotateCcw :size="20" color="orangered" />
          <span class="text-orangered">Nettoyer</span>
        </button>
        <button
          class="flex items-center gap-3 bg-blue-100 p-2 text-blue-800 rounded-lg hover:bg-blue-200 transition"
        >
          <Download :size="20" color="blue" />
          <span>Enregistrer</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Paintbrush, Eraser, RotateCcw, Download } from "lucide-vue-next";
</script>

<style></style>
