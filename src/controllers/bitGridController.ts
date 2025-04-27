import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { BitGridEntity } from '../models/BitGrid';
import { BitGrid } from '../types';

const bitGridRepository = AppDataSource.getRepository(BitGridEntity);

// Create a new BitGrid
export const createBitGrid = async (req: Request, res: Response) => {
  try {
    const bitGrid = bitGridRepository.create(req.body);
    await bitGridRepository.save(bitGrid);
    res.status(201).json(bitGrid);
  } catch (error) {
    res.status(400).json({ message: 'Error creating BitGrid', error });
  }
};

// Get all BitGrids
export const getAllBitGrids = async (req: Request, res: Response) => {
  try {
    const bitGrids = await bitGridRepository.find();
    res.json(bitGrids);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching BitGrids', error });
  }
};

// Get a single BitGrid by ID
export const getBitGridById = async (req: Request, res: Response) => {
  try {
    const bitGrid = await bitGridRepository.findOneBy({ _id: req.params.id });
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
    const result = await bitGridRepository.update(req.params.id, req.body);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'BitGrid not found' });
    }
    const updatedBitGrid = await bitGridRepository.findOneBy({ _id: req.params.id });
    res.json(updatedBitGrid);
  } catch (error) {
    res.status(500).json({ message: 'Error updating BitGrid', error });
  }
};

// Delete a BitGrid
export const deleteBitGrid = async (req: Request, res: Response) => {
  try {
    const result = await bitGridRepository.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'BitGrid not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting BitGrid', error });
  }
};