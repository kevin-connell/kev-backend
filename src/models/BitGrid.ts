import mongoose from 'mongoose';
import { BitGrid, ColorNumber, Grid, Palette } from '../types';

const BitGridSchema = new mongoose.Schema<BitGrid>({
  aiArtUrl: { type: String },
  author: { type: String },
  composition: {
    type: [[Number]],
    required: true,
    validate: {
      validator: function(grid: Grid) {
        return grid.length === 15 && grid.every(row => row.length === 15);
      },
      message: 'Grid must be 15x15'
    }
  },
  createdAt: { type: Date, default: Date.now },
  name: { type: String },
  palette: {
    type: Object,
    required: true,
    validate: {
      validator: function(palette: Palette) {
        const keys = Object.keys(palette).map(Number);
        const validKeys = keys.every(k => k >= 1 && k <= 5);
        const validValues = Object.values(palette).every(color => typeof color === 'string');
        return keys.length === 5 && validKeys && validValues;
      },
      message: 'Palette must contain exactly 5 colors with keys 1-5'
    }
  }
});

export const BitGridModel = mongoose.model<BitGrid>('BitGrid', BitGridSchema);