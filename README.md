# Task 3: WEB UI Forms - Task Management System

## Overview

This project is a React-based web application for Task 3 of the Kaiburr assessment. It provides a comprehensive frontend interface for managing tasks that can execute shell commands, built using React 18, TypeScript, and Ant Design.

## Project Information

- **Candidate Name**: Sai Venkata Nagendra
- **Submission Date**: January 2025
- **Task**: Task 3 - WEB UI Forms
- **Framework**: React 18 with TypeScript
- **UI Library**: Ant Design (Antd)
- **Backend Integration**: REST API (Task 1 backend)

## Features

### Core Functionality
- ✅ **Create Tasks**: Add new tasks with name, owner, and shell command
- ✅ **View Tasks**: Display all tasks in a responsive table format
- ✅ **Search Tasks**: Search tasks by name with real-time filtering
- ✅ **Delete Tasks**: Remove tasks with confirmation dialog
- ✅ **Execute Tasks**: Run shell commands and view execution results
- ✅ **Task Details**: View detailed information and execution history

### User Experience Features
- 🎨 **Modern UI**: Clean, professional interface using Ant Design components
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Real-time Updates**: Automatic refresh after operations
- 🔍 **Advanced Search**: Search functionality with clear/reset options
- 📊 **Execution Tracking**: View command execution history with timestamps
- 🚨 **Error Handling**: Comprehensive error messages and loading states
- ♿ **Accessibility**: Keyboard navigation and screen reader support

## Technology Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 4.9.5
- **UI Components**: Ant Design 5.0.0
- **HTTP Client**: Axios 1.6.0
- **Build Tool**: Create React App
- **Styling**: CSS3 with Ant Design theme

## Project Structure

```
src/
├── components/
│   ├── TaskExecution.tsx    # Task execution history display
│   ├── TaskForm.tsx         # Task creation form
│   ├── TaskList.tsx         # Tasks table with actions
│   └── TaskSearch.tsx       # Search functionality
├── services/
│   └── api.ts              # API service layer
├── types/
│   └── Task.ts             # TypeScript interfaces
├── App.tsx                 # Main application component
├── App.css                 # Application styles
└── index.tsx              # Application entry point
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Backend API running (Task 1 implementation)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sai-venkata-nagendra/TASK-3-WEB-UI-Forms.git
   cd TASK-3-WEB-UI-Forms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   - Open `src/services/api.ts`
   - Update `API_BASE_URL` if your backend runs on a different port
   - Default: `http://localhost:8080/api`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`
   - The application will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## How to Use the Application

### 1. Creating a Task
1. Click the "Create Task" button in the header
2. Fill in the required fields:
   - **Task Name**: Descriptive name for your task
   - **Owner**: Person responsible for the task
   - **Command**: Shell command to execute (e.g., `echo Hello World`)
3. Click "Create Task" to save

### 2. Viewing Tasks
- All tasks are displayed in a table format
- Information includes: ID, Name, Owner, Command, and Execution Count
- Use the "Refresh" button to reload the task list

### 3. Searching Tasks
1. Use the search box at the top of the task list
2. Type a task name or partial name
3. Click "Search" or press Enter
4. Use "Clear" to reset the search

### 4. Executing Tasks
1. Click the "Run" button next to any task
2. The command will be executed on the backend
3. View execution results in the task details page

### 5. Viewing Task Details
1. Click the "Details" button for any task
2. View complete task information
3. See execution history with timestamps and outputs
4. Click "Back to List" to return to the main view

### 6. Deleting Tasks
1. Click the "Delete" button next to any task
2. Confirm the deletion in the popup dialog
3. The task will be permanently removed

## API Integration

The frontend integrates with the Task 1 backend API through the following endpoints:

- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/{id}` - Get specific task
- `POST /api/tasks` - Create new task
- `DELETE /api/tasks/{id}` - Delete task
- `GET /api/tasks/search?name={name}` - Search tasks by name
- `PUT /api/tasks/{id}/execute` - Execute task command

## Screenshots

### Application Overview
<img width="1918" height="1065" alt="Screenshot from 2025-10-20 21-28-46" src="https://github.com/user-attachments/assets/f610faef-32b0-4d92-a0f1-bfc002595d44" />
*Main application interface showing the task management dashboard*

### Task Creation
<img width="1918" height="1065" alt="Screenshot from 2025-10-20 21-29-49" src="https://github.com/user-attachments/assets/2fb22312-9447-494e-bacf-bac1366d6d56" />

*Modal form for creating new tasks with validation*

### Task Details and Execution
<img width="1918" height="1065" alt="Screenshot from 2025-10-20 21-30-14" src="https://github.com/user-attachments/assets/ee6894db-0c54-43d9-9715-8cba02c9720a" />

*Detailed view showing task information and execution history*

### Search Functionality
<img width="1918" height="1065" alt="Screenshot from 2025-10-20 21-31-12" src="https://github.com/user-attachments/assets/7edc85ee-5e95-4121-8c1d-f08ede58b5f0" />

*Search functionality displaying filtered task results*

### Execution Output
<img width="1918" height="1065" alt="Screenshot from 2025-10-20 21-31-37" src="https://github.com/user-attachments/assets/56bad198-71e3-47f0-8a72-a16aa5230490" />

*View of command execution results with timestamps and output*

### Demo video is available in screenshots folder


## Key Features Demonstrated

### 1. Modern React Patterns
- Functional components with hooks
- TypeScript for type safety
- Component composition and reusability
- Custom hooks for state management

### 2. Ant Design Integration
- Professional UI components
- Consistent design system
- Responsive grid layout
- Form validation and feedback

### 3. API Integration
- Axios for HTTP requests
- Error handling and loading states
- Request/response interceptors
- Type-safe API calls

### 4. User Experience
- Intuitive navigation
- Real-time feedback
- Confirmation dialogs
- Loading indicators
- Error messages

### 5. Accessibility
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management

## Development Notes

### Code Quality
- TypeScript for type safety
- Component-based architecture
- Separation of concerns
- Reusable components
- Clean code practices

### Performance Optimizations
- Lazy loading of components
- Efficient re-rendering
- Optimized API calls
- Responsive images

### Error Handling
- Comprehensive try-catch blocks
- User-friendly error messages
- Fallback UI states
- Network error recovery

## Testing

The application includes basic test setup with Jest and React Testing Library:

```bash
npm test
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

Potential improvements for production use:
- User authentication and authorization
- Task scheduling capabilities
- Bulk operations
- Export functionality
- Advanced filtering options
- Real-time notifications
- Dark mode theme

## Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Ensure the backend server is running
   - Check the API_BASE_URL in `src/services/api.ts`
   - Verify CORS settings on the backend

2. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

3. **Styling Issues**
   - Ensure Ant Design CSS is imported correctly
   - Check for conflicting CSS rules

## Contact Information

- **Developer**: Sai Venkata Nagendra
- **GitHub**: [sai-venkata-nagendra](https://github.com/sai-venkata-nagendra)

---

**Note**: This application requires the Task 1 backend to be running for full functionality. The backend should provide the REST API endpoints for task management and execution.
