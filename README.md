# Kanban Board App

A **Kanban board** built with:
- [Ant Design](https://ant.design/) for UI components
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop
- **React Context** for state management

## Features

✅ Add / Delete **Cards**  
✅ Add / Delete **Lists**  
✅ Drag & Drop **cards within same list**  
✅ Drag & Drop **cards across lists**  
✅ Drag & Drop **lists**  
✅ Context-based state management  
✅ LocalStorage persistence  
✅ Demo **Login modal** (router-ready for later authentication)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm run dev
```
Visit `http://localhost:5173/` (or your Vite dev server address).

## Usage
- **Add List**: Click **"Add list"** button
- **Add Card**: Inside a list, click **"Add card"**
- **Delete**: Use trash icon on lists/cards
- **Drag & Drop**: Drag lists horizontally or cards vertically/across lists

## Authentication (Stub)
- Includes a simple **Login modal** for demo
- Later replace with **React Router**:
  - `/login` route for login form
  - `/board` for the Kanban board
  - Protect routes with `<RequireAuth>`


## License
MIT
