# Easymob POS System

Easymob is a simple Point of Sale (POS) system built with React (frontend) and Node.js/Express (backend), using MySQL for data storage.

## Features

- Product management (view products)
- Sales tracking (last 24 hours, total sales)
- Simple dashboard with Chakra UI
- Responsive layout and navigation
- REST API backend

## Tech Stack

- **Frontend:** React, Chakra UI, Vite, react-router-dom
- **Backend:** Node.js, Express, MySQL
- **Other:** Git, npm

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL server running

### Installation

1**installependencies:**
   ```sh
   npm install
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure the database:**
   - Using  MySQL database and user.
   - Database credentials in `server/config.js` or `.env` as needed.

4. **Run the app:**
   ```sh
   cd ..
   npm run dev
   ```
   - The frontend will run on [http://localhost:5173](http://localhost:5173)
   - The backend API will run on [http://localhost:5000](http://localhost:5000)

## Folder Structure

```
pos-system/
  client/      # React frontend
  server/      # Node.js backend
```

## Usage

- Visit the frontend URL to access the POS dashboard.
- Use the navigation bar to view products, sales, and reports.

## License

This project is licensed under the MIT License.

---

*Easymob –