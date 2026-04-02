# Code Understanding Journal

## 1. Main Components

The main components of the Task Manager application are:

* **cli.js** → Handles user input from the command line using commander
* **app.js** → Contains the TaskManager class which manages business logic
* **models.js** → Defines Task structure, TaskStatus, and TaskPriority
* **storage.js** → Handles reading and writing tasks to a JSON file

---

## 2. Execution Flow (Task Creation)

When a task is created:

1. The user runs a CLI command (e.g., `node cli.js create`)
2. cli.js processes the command using commander
3. cli.js calls `TaskManager.createTask()`
4. A new Task object is created in models.js
5. The task is passed to TaskStorage
6. TaskStorage saves the task into `tasks.json`
7. The task ID is returned and displayed to the user

---

## 3. Data Storage

* Tasks are stored in a file called `tasks.json`
* Each task is stored as a JSON object
* The storage.js file handles loading and saving tasks
* Data persists even after the application is closed

---

## 4. Design Pattern Observed

The application uses **Separation of Concerns**:

* CLI handles input/output
* TaskManager handles logic
* Storage handles persistence

This makes the system modular and easier to maintain.

---

## 5. Observations / Issues

* The status symbol displays as `undefined`, which suggests a mismatch between task status and the statusSymbol mapping
* Despite this, core functionality works correctly
