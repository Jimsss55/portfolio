# Portfolio Website - Full Stack Application

## Overview

This is a modern portfolio website built as a full-stack application showcasing developer projects, articles, and contact functionality. The application features a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and modern UI components from shadcn/ui.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **API Pattern**: RESTful API endpoints under `/api` prefix

### Development Environment
- **Platform**: Replit with PostgreSQL 16 module
- **Package Manager**: npm
- **Build System**: ESBuild for server bundling, Vite for client bundling

## Key Components

### Database Schema (shared/schema.ts)
- **Users**: Authentication and user management
- **Contact Messages**: Contact form submissions with timestamps
- **Projects**: Portfolio projects with metadata (title, description, technologies, URLs)
- **Articles**: Blog posts/articles with content and categorization
- **Validation**: Zod schemas for runtime type checking

### API Endpoints
- `POST /api/contact` - Contact form submission
- `GET /api/projects/featured` - Retrieve featured projects
- `GET /api/projects` - Retrieve all projects
- `GET /api/articles/recent` - Retrieve recent articles

### UI Components
- Responsive navigation with smooth scrolling
- Hero section with animated typing effect
- Portfolio project showcase with filtering
- Blog/articles section
- Contact form with validation
- Dark theme design with blue accent colors

### Storage Layer
- **Development**: In-memory storage with sample data
- **Production**: PostgreSQL via Drizzle ORM
- **Interface**: IStorage abstraction for easy testing and development

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests and validation
3. **Business Logic**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores persistent data via Drizzle ORM
5. **Response**: JSON responses sent back to client with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **clsx**: Conditional class names utility
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Frontend build tool
- **tsx**: TypeScript execution for development
- **esbuild**: Server bundling

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: Express with Vite middleware for HMR
- **Database**: PostgreSQL via Replit module
- **Port**: 5000 (mapped to external port 80)

### Production Build
- **Frontend**: `vite build` → `dist/public`
- **Backend**: `esbuild` → `dist/index.js`
- **Start**: `npm start` runs production server
- **Deployment**: Replit autoscale deployment target

### Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Build Process**: Parallel frontend and backend builds
- **Asset Serving**: Express serves static files in production

## Changelog

```
Changelog:
- June 19, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```