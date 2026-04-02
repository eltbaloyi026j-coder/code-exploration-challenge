## Function Decomposition Reflection

### What was wrong with the original code?
The original function was too long and handled multiple responsibilities, which made it harder to read, understand, and maintain.

---

### What improvements did I make?
I broke the large function into smaller, reusable functions:

- calculatePriorityScore
- calculateDueDateScore
- filterActiveTasks
- sortTasks
- calculateTaskScore

This made the logic more modular and easier to manage.

---

### What did I learn?
I learned that breaking code into smaller functions improves readability, testing, and reusability. It also makes debugging easier because each function has a single responsibility.

---

### How would I explain this to another developer?
Instead of putting all logic inside one large function, it is better to split the logic into smaller functions where each one does a single job well. This follows the principle of separation of concerns.

---

### How can this be improved further?
This solution could be improved further by adding unit tests and making the scoring rules configurable instead of hardcoded values.
