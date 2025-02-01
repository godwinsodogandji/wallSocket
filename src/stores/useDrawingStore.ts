import { defineStore } from "pinia";

interface DrawingState {
  color: string;
  lineWidth: number;
  isDrawing: boolean;
  isEraser: boolean;
}

export const useDrawingStore = defineStore("drawing", {
  state: (): DrawingState => ({
    color: "red",
    lineWidth: 5,
    isDrawing: false,
    isEraser: false,
  }),

  actions: {
    setColor(color: string) {
      this.color = color;
    },
    setLineWidth(width: number) {
      this.lineWidth = width;
    },
    setIsDrawing(isDrawing: boolean) {
      this.isDrawing = isDrawing;
    },
    setIsEraser(isEraser: boolean) {
      this.isEraser = isEraser;
    },
  },
});
