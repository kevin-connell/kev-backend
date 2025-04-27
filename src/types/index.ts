export interface BitGrid {
  _id?: string;
  name: string;
  grid: boolean[][];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BitGridDocument extends BitGrid {
  _id: string;
}

export type GridRow = boolean[];
export type Grid = GridRow[];