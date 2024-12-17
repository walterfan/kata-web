# Books and Tasks Management App
## Overview

A Vue 3 application with TypeScript and Bootstrap for managing Books and Tasks. 

## Design
### Types and Interfaces (/src/types/index.ts):

Defines TypeScript interfaces for Book and Task entities
Ensures type safety throughout the application

### State Management (/src/stores/):

- Uses Pinia for state management
- Separate stores for books and tasks
- Implements CRUD operations and search functionality

### Components:

- Book components (/src/components/books/):
    - BookForm.vue: Form for creating/editing books
    - BookList.vue: Display and manage books

- Task components (/src/components/tasks/):
    - TaskForm.vue: Form for creating/editing tasks
    - TaskList.vue: Display and manage tasks
    -
### Views (/src/views/):

BooksView.vue: Books management page
TasksView.vue: Tasks management page

### Router (/src/router/index.ts):

Handles navigation between views
Default route redirects to books page
Features:

Full CRUD operations for both books and tasks
Form validation using Vuelidate
Search functionality for both books and tasks
Responsive design using Bootstrap
Date formatting using date-fns
Type-safe throughout with TypeScript

### UI/UX:

- Clean and intuitive interface
- Responsive design that works on all devices
- Form validation with error messages
- Confirmation dialogs for deletions
- Visual indicators for task priorities


The development server is now running. You can navigate between the Books and Tasks sections using the navigation bar at the top. Each section allows you to:

- View all items in a table format
- Search items using the search bar
- Add new items using the "Add New" button
- Edit existing items
- Delete items (with confirmation)
- Manage all properties of both Books and Tasks


The application is built with scalability in mind and can be easily extended with additional features as needed.
