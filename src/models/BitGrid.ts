import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BitGrid, ColorNumber, Grid, Palette } from '../types';

@Entity('bit_grids')
export class BitGridEntity implements BitGrid {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ nullable: true })
  aiArtUrl?: string;

  @Column({ nullable: true })
  author?: string;

  @Column('jsonb')
  composition: Grid;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  name?: string;

  @Column('jsonb')
  palette: Palette;

  @UpdateDateColumn()
  updatedAt: Date;
}