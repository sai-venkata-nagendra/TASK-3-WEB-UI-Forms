# Screenshots Directory

This directory contains screenshots for the Task 3 submission.

## Required Screenshots

Please capture the following screenshots with your name and current date/time visible:

### 1. main-view.png
- **Description**: Main application interface showing the task management dashboard
- **What to capture**: 
  - The entire browser window with the application loaded
  - Task list table (even if empty)
  - Header with "Create Task" button
  - Your name visible in terminal/desktop
  - System date/time in system tray or terminal

### 2. create-task.png
- **Description**: Task creation modal/form
- **What to capture**:
  - Modal dialog open with form fields
  - Form validation (try submitting empty form)
  - Your name and date/time visible

### 3. task-details.png
- **Description**: Task details view with execution history
- **What to capture**:
  - Task details page
  - Execution history section
  - Any existing execution results
  - Your name and date/time visible

### 4. search-results.png
- **Description**: Search functionality in action
- **What to capture**:
  - Search box with a search term entered
  - Filtered results (or "no results found" message)
  - Your name and date/time visible

### 5. execution-output.png
- **Description**: Command execution results
- **What to capture**:
  - Task execution output
  - Timestamps and command results
  - Your name and date/time visible

### 6. mobile-view.png
- **Description**: Responsive mobile view
- **What to capture**:
  - Browser in mobile/responsive mode
  - Mobile-friendly layout
  - Your name and date/time visible

## How to Include Your Name and Date/Time

### Option 1: Terminal/Command Prompt
- Open a terminal window
- Type your name: `echo "Your Name - $(date)"`
- Position terminal window visible in screenshot

### Option 2: Desktop Name
- Create a text file on desktop with your name and date
- Position it visible in screenshots

### Option 3: Browser Developer Tools
- Open browser developer tools
- In console, type: `console.log("Your Name - " + new Date())`
- Include console in screenshot

### Option 4: System Date/Time Widget
- Ensure system date/time is visible in taskbar
- This automatically shows current date/time

## Screenshot Guidelines

1. **High Quality**: Use high resolution screenshots (at least 1920x1080)
2. **Clear Text**: Ensure all text is readable
3. **Complete Interface**: Show the full application interface
4. **Your Identity**: Must include your name and current date/time
5. **PNG Format**: Save as PNG files for best quality
6. **Descriptive Names**: Use the exact filenames specified above

## Example Screenshot Setup

```bash
# Terminal method - run this command and include terminal in screenshot
echo "Developer: Your Name - $(date '+%Y-%m-%d %H:%M:%S')"
```

## Notes

- Screenshots without your name and date/time will result in task rejection
- Ensure the backend is running and connected for functional screenshots
- Test all features before taking screenshots
- Include both success and error states if possible
