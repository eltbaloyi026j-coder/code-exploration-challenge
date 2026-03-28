// cli.js
const { program } = require('commander');
const { TaskManager } = require('./app');
const { TaskStatus, TaskPriority } = require('./models');

const formatTask = (task) => {
  const statusSymbol = {
    [TaskStatus.TODO]: '[ ]',
    [TaskStatus.IN_PROGRESS]: '[>]',
    [TaskStatus.REVIEW]: '[?]',
    [TaskStatus.DONE]: '[✓]'
  };

  const prioritySymbol = {
    [TaskPriority.LOW]: '!',
    [TaskPriority.MEDIUM]: '!!',
    [TaskPriority.HIGH]: '!!!',
    [TaskPriority.URGENT]: '!!!!'
  };

  const dueStr = task.dueDate
    ? `Due: ${task.dueDate.toISOString().split('T')[0]}`
    : 'No due date';

  const tagsStr = task.tags.length
    ? `Tags: ${task.tags.join(', ')}`
    : 'No tags';

  return (
    `${statusSymbol[task.status]} ${task.id.substr(0, 8)} - ${prioritySymbol[task.priority]} ${task.title}\n` +
    `  ${task.description}\n` +
    `  ${dueStr} | ${tagsStr}\n` +
    `  Created: ${task.createdAt.toISOString().split('T')[0]} ${task.createdAt.toTimeString().split(' ')[0]}`
  );
};

const taskManager = new TaskManager();

program
  .version('1.0.0')
  .description('Task Manager CLI');

// (you can keep the rest same as you pasted before)
