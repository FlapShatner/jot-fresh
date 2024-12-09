# Jot

A simple and fast note taking app for the web. Built with Next.js, React, TypeScript, and PostgreSQL.

## Features

- 📝 Create and edit notes with syntax highlighting
- 📁 Organize notes in nested folders
- 🔍 Full-text search across all notes
- 🎨 Clean, minimal interface
- ⚡ Fast and responsive
- 🔒 Secure user authentication
- 📱 Mobile-friendly design

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- PostgreSQL
- Drizzle ORM
- TailwindCSS
- Lucia Auth
- Ace Editor

## Installation
1. Clone the repository:
``` bash
git clone https://github.com/yourusername/jot.git
cd jot
```

2. Install dependencies:
``` bash
npm install
```

3. Create a .env file in the root directory with the following variables:
``` env
DATABASE_URL=your_postgres_connection_string
PW_RESET_EMAIL=your_email_for_password_reset
PW_RESET_EMAIL_PASSWORD=your_email_password
```
4. Set up the database:
``` bash
npm run generate  # Generate database schema
npm run push     # Push schema to database
```
5. Run the development server:
``` bash
npm run dev
```
6. Open http://localhost:3000 in your browser

## Supported Languages
Jot supports syntax highlighting for multiple languages including:
- TypeScript/JavaScript
- Python
- HTML/CSS
- Markdown
- JSON
- SQL
- Rust
- Go
- Java
- And more!

## Database Schema
The application uses a PostgreSQL database with the following main tables:
- users - User accounts and authentication
- notes - Note content and metadata
- folders - Folder structure for organizing notes
- sessions - User session management


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

