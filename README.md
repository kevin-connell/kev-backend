# kev-backend

A TypeScript-based backend service for managing BitGrid compositions. This service provides a RESTful API for creating, reading, updating, and deleting pixel art grids with customizable color palettes.

## Technologies

- Node.js
- TypeScript
- Express.js
- PostgreSQL with TypeORM
- Jest for testing

## Prerequisites

- Node.js >= 18.0.0
- PostgreSQL >= 14
- npm

## Setup

1. Clone the repository:
```bash
git clone git@github.com:kevin-connell/kev-backend.git
cd kev-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=bitgrid
PORT=3000
NODE_ENV=development
```

4. Create the PostgreSQL database:
```bash
createdb bitgrid
```

5. Run database migrations:
```bash
npm run migration:run
```

## Running the Application

Development mode with hot-reload:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

## API Endpoints

### BitGrid Resource

#### POST `/api/bitgrids`
Create a new BitGrid
```typescript
{
  "name": string,
  "composition": ColorNumber[15][15], // 15x15 grid of numbers 1-5
  "palette": { [key in ColorNumber]: string }, // Color hex codes
  "author"?: string,
  "aiArtUrl"?: string
}
```

#### GET `/api/bitgrids`
Retrieve all BitGrids

#### GET `/api/bitgrids/:id`
Retrieve a specific BitGrid by ID

#### PUT `/api/bitgrids/:id`
Update a BitGrid
```typescript
{
  "name"?: string,
  "composition"?: ColorNumber[15][15],
  "palette"?: { [key in ColorNumber]: string },
  "author"?: string,
  "aiArtUrl"?: string
}
```

#### DELETE `/api/bitgrids/:id`
Delete a BitGrid

## Data Types

### ColorNumber (enum)
```typescript
enum ColorNumber {
  Color1 = 1,
  Color2 = 2,
  Color3 = 3,
  Color4 = 4,
  Color5 = 5
}
```

### Grid
A 15x15 grid where each cell contains a ColorNumber (1-5).

### Palette
A mapping of ColorNumber to hex color codes.

## Development

### Running Tests
```bash
npm test
```

### Creating New Migrations
```bash
npm run migration:create src/migrations/YourMigrationName
```

### Running Migrations
```bash
npm run migration:run
```

### Reverting Migrations
```bash
npm run migration:revert
```