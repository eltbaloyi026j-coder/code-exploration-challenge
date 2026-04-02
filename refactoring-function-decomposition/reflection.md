# Function Decomposition Reflection

## What was wrong with the original code?
The original function was too long and handled multiple responsibilities, making it difficult to read and maintain.

## What improvements did I make?
I broke the function into smaller reusable functions like:
- calculatePriorityScore
- calculateDueDateScore
- filterActiveTasks
- sortTasks

## What did I learn?
I learned that breaking code into smaller functions improves readability, testing, and reusability.

## How would I explain this to another developer?
Instead of doing everything in one function, split logic into small pieces where each function does one thing well.

## How can this be improved further?
We could add unit tests and make scoring rules configurable.
