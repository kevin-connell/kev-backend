import { Request, Response } from 'express';
import { BitGridModel } from '../models/BitGrid';
import { BitGrid } from '../types';

// Create a new BitGrid
export const createBitGrid = async (req: Request, res: Response) => {
  try {
    const bitGrid = new BitGridModel(req.body);
    await bitGrid.save();
    res.status(201).json(bitGrid);
  } catch (error) {
    res.status(400).json({ message: 'Error creating BitGrid', error });
  }
};

// Get all BitGrids
export const getAllBitGrids = async (req: Request, res: Response) => {
  try {
    const bitGrids = await BitGridModel.find();
    res.json(bitGrids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching BitGrids', error });
  }
};

// Get a single BitGrid by ID
export const getBitGridById = async (req: Request, res: Response) => {
  try {
    const bitGrid = await BitGridModel.findById(req.params.id);
    if (!bitGrid) {
      return res.status(404).json({ message: 'BitGrid not found' });
    }
    res.json(bitGrid);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching BitGrid', error });
  }
};

// Update a BitGrid
export const updateBitGrid = async (req: Request, res: Response) => {
  try {
    const bitGrid = await BitGridModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!bitGrid) {
      return res.status(404).json({ message: 'BitGrid not found' });
    }
    res.json(bitGrid);
  } catch (error) {
    res.status(400).json({ message: 'Error updating BitGrid', error });
  }
};

// Delete a BitGrid
export const deleteBitGrid = async (req: Request, res: Response) => {
  try {
    const bitGrid = await BitGridModel.findByIdAndDelete(req.params.id);
    if (!bitGrid) {
      return res.status(404).json({ message: 'BitGrid not found' });
    }
    res.json({ message: 'BitGrid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting BitGrid', error });
  }
};