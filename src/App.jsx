import React, { useState } from 'react';
import { STATUSES, MOCK_TASKS } from './mockData.js';
import './App.css';
import Navbar from './Navbar.jsx';
import DarkHeroSection from './DarkHeroSection.jsx';
import ProductShowcase from './ProductShowcase.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import TeamSection from './TeamSection.jsx';
import CaseStudySection from './CaseStudySection.jsx';
import FooterSection from './FooterSection.jsx';
import './Navbar.css';
import './DarkHeroSection.css';
import './ProductShowcase.css';
import './FeaturesSection.css';
import './TeamSection.css';
import './CaseStudySection.css';
import './FooterSection.css';

function getDeadlineColor(deadline) {
  const today = new Date();
  const due = new Date(deadline);
  const diff = (due - today) / (1000 * 60 * 60 * 24);
  if (diff < 0) return '#ff6b6b'; // Overdue
  if (diff < 2) return '#ffd166'; // Due soon
  return '#06d6a0'; // On track
}

function TaskCard({ task, onEdit, onDelete, onDragStart, draggable }) {
  return (
    <div
      className="task-card"
      draggable={draggable}
      onDragStart={e => onDragStart && onDragStart(e, task)}
      style={{ borderLeft: `6px solid ${getDeadlineColor(task.deadline)}` }}
    >
      <div className="task-header">
        <h4>{task.title}</h4>
        <div className="task-actions">
          <button onClick={() => onEdit(task)} title="Edit">✏️</button>
          <button onClick={() => onDelete(task.id)} title="Delete">🗑️</button>
        </div>
      </div>
      <div className="task-desc">{task.description}</div>
      <div className="task-deadline">
        <span>Deadline:</span> <span>{task.deadline}</span>
      </div>
    </div>
  );
}

function TaskModal({ open, onClose, onSave, task }) {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [deadline, setDeadline] = useState(task?.deadline || '');
  const [status, setStatus] = useState(task?.status || STATUSES[0].id);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>{task ? 'Edit Task' : 'Add Task'}</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSave({
              ...task,
              title,
              description,
              deadline,
              status,
            });
          }}
        >
          <label>
            Title
            <input value={title} onChange={e => setTitle(e.target.value)} required />
          </label>
          <label>
            Description
            <textarea value={description} onChange={e => setDescription(e.target.value)} required />
          </label>
          <label>
            Deadline
            <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
          </label>
          <label>
            Status
            <select value={status} onChange={e => setStatus(e.target.value)}>
              {STATUSES.map(s => (
                <option value={s.id} key={s.id}>{s.label}</option>
              ))}
            </select>
          </label>
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [draggedTask, setDraggedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleDrop = (status) => {
    if (draggedTask) {
      setTasks(tasks => tasks.map(t => t.id === draggedTask.id ? { ...t, status } : t));
      setDraggedTask(null);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks => tasks.filter(t => t.id !== id));
  };

  const handleSave = (task) => {
    if (task.id) {
      setTasks(tasks => tasks.map(t => t.id === task.id ? task : t));
    } else {
      setTasks(tasks => [
        ...tasks,
        { ...task, id: String(Date.now()) }
      ]);
    }
    setModalOpen(false);
    setEditingTask(null);
  };

  return (
    <>
      <Navbar />
      <DarkHeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <CaseStudySection />
      <TeamSection />
      <section id="board" className="board-container" style={{marginTop: 0}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: '36px 60px 12px 60px', background:'transparent'}}>
          <h2 style={{fontSize:'2rem', fontWeight:600, color:'#1d1d1f', letterSpacing:'-0.5px', margin:0}}>Your Board</h2>
          <button className="add-task-btn" onClick={() => { setEditingTask(null); setModalOpen(true); }}>+ Add Task</button>
        </div>
        <div className="board">
          {STATUSES.map(status => (
            <div
              className="column"
              key={status.id}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop(status.id)}
            >
              <div className="column-header">{status.label}</div>
              <div className="column-tasks">
                {tasks.filter(t => t.status === status.id).map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onDragStart={(e, t) => setDraggedTask(t)}
                    draggable
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <TaskModal
          open={modalOpen}
          onClose={() => { setModalOpen(false); setEditingTask(null); }}
          onSave={handleSave}
          task={editingTask}
        />
      </section>
      <FooterSection />
    </>
  );
}

export default App;
