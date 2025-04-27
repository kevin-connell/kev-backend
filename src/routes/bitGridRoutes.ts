import express from 'express';
import {
  createBitGrid,
  getAllBitGrids,
  getBitGridById,
  updateBitGrid,
  deleteBitGrid,
} from '../controllers/bitGridController';

const router = express.Router();

router.post('/', createBitGrid);
router.get('/', getAllBitGrids);
router.get('/:id', getBitGridById);
router.put('/:id', updateBitGrid);
router.delete('/:id', deleteBitGrid);

export default router;