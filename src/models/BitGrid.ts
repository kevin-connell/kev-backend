import mongoose from 'mongoose';
import { BitGrid } from '../types';

const BitGridSchema = new mongoose.Schema<BitGrid>({
  name: { 
    type: String,
    required: true
  },
  grid: {
    type: [[Boolean]],
    required: true,
    validate: {
      validator: function(grid: boolean[][]) {
        return grid.length > 0 && grid.every(row => row.length === grid[0].length);
      },
      message: 'Grid must be a non-empty rectangular array'
    }
  }
}, {
  timestamps: true
});

export const BitGridModel = mongoose.model<BitGrid>('BitGrid', BitGridSchema);