import React, { Component, memo, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = memo((props) => {

  const [habits, setHabits] = useState(
    [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  );

  const handleIncrement = habit => {
    const data = habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(data);
  };

  const handleDecrement = habit => {
    const data = habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(data);
  };

  const handleDelete = habit => {
    const data = habits.filter(item => item.id !== habit.id);
    setHabits(data);
  };

  const handleAdd = name => {
    const data = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(data);
  };

  const handleReset = () => {
    const data = habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setHabits(data);
  };

  return (
    <>
      <Navbar
        totalCount={habits.filter(item => item.count > 0).length}
      />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
});

export default App;
