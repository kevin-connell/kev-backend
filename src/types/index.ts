export enum ColorNumber {
  Color1 = 1,
  Color2 = 2,
  Color3 = 3,
  Color4 = 4,
  Color5 = 5,
}

export type Palette = { [key in ColorNumber]: string };

type Row = [
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
  ColorNumber,
];

export type Grid = [
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
];

export interface BitGrid {
  _id?: string;
  aiArtUrl?: string;
  author?: string;
  composition: Grid;
  createdAt?: Date;
  name?: string;
  palette: Palette;
  updatedAt?: Date;
}

export interface BitGridDocument extends BitGrid {
  _id: string;
}