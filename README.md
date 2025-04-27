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
# PostgreSQL Configuration
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=bitgrid

# Application Configuration
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

## Environment Variables

### Local Development
Create a `.env` file in the root directory with the following variables:
```env
# PostgreSQL Configuration
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=bitgrid

# Application Configuration
PORT=3000
NODE_ENV=development
```

### Railway Deployment
The following variables are automatically set by Railway for PostgreSQL:
```env
# PostgreSQL Connection URL (primary connection method)
DATABASE_URL=postgresql://user:password@host:port/database
DATABASE_PUBLIC_URL=postgresql://user:password@host:port/database

# Individual PostgreSQL Variables (automatically set)
PGDATA=/var/lib/postgresql/data
PGDATABASE=railway
PGHOST=host.railway.internal
PGPASSWORD=your-password
PGPORT=5432
PGUSER=postgres

# PostgreSQL Admin Variables
POSTGRES_DB=railway
POSTGRES_PASSWORD=your-password
POSTGRES_USER=postgres

# Railway Specific
RAILWAY_DEPLOYMENT_DRAINING_SECONDS=0
SSL_CERT_DAYS=365

# Application Variables (set these manually in Railway)
PORT=3000
NODE_ENV=production
```

No additional configuration is needed as the application will automatically use these variables in the Railway environment.

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