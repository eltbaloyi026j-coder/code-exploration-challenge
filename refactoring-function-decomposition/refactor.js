// BEFORE: messy function
function processTasks(tasks) {
  let result = [];

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];

    if (task.status !== 'done') {
      let score = 0;

      if (task.priority === 4) score += 40;
      else if (task.priority === 3) score += 30;
      else if (task.priority === 2) score += 20;
      else score += 10;

      if (task.dueDate) {
        let daysLeft = Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
        if (daysLeft <= 1) score += 20;
      }

      result.push({ ...task, score });
    }
  }

  return result.sort((a, b) => b.score - a.score);
}
// AFTER: clean refactored version

function calculatePriorityScore(priority) {
  const map = { 1: 10, 2: 20, 3: 30, 4: 40 };
  return map[priority] || 0;
}

function calculateDueDateScore(dueDate) {
  if (!dueDate) return 0;

  const daysLeft = Math.ceil((new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24));
  return daysLeft <= 1 ? 20 : 0;
}

function calculateTaskScore(task) {
  return (
    calculatePriorityScore(task.priority) +
    calculateDueDateScore(task.dueDate)
  );
}

function filterActiveTasks(tasks) {
  return tasks.filter(task => task.status !== 'done');
}

function sortTasks(tasks) {
  return tasks.sort((a, b) => b.score - a.score);
}

function processTasks(tasks) {
  const activeTasks = filterActiveTasks(tasks);

  const scoredTasks = activeTasks.map(task => ({
    ...task,
    score: calculateTaskScore(task)
  }));

  return sortTasks(scoredTasks);
}
