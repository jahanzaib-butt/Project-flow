export const STATUSES = [
  { id: 'todo', label: 'To Do' },
  { id: 'inprogress', label: 'In Progress' },
  { id: 'review', label: 'Review' },
  { id: 'done', label: 'Done' },
];

export const MOCK_TASKS = [
  {
    id: '1',
    title: 'Design project board UI',
    description: 'Create wireframes and final design for the board.',
    status: 'todo',
    deadline: '2025-04-22',
  },
  {
    id: '2',
    title: 'Implement drag-and-drop',
    description: 'Enable moving tasks between columns.',
    status: 'inprogress',
    deadline: '2025-04-21',
  },
  {
    id: '3',
    title: 'Test task creation flow',
    description: 'Ensure users can add and edit tasks easily.',
    status: 'review',
    deadline: '2025-04-23',
  },
  {
    id: '4',
    title: 'Polish visual design',
    description: 'Refine colors, spacing, and typography.',
    status: 'done',
    deadline: '2025-04-19',
  },
];
