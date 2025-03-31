import { useState, useEffect } from 'react';
import React from "react";
import './Text.css';
import './TodoList.css';  // Import the CSS file for styling

const TodoComp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/simbenoit/What-do-you-want-to-watch/issues?labels=TODO`,
        );
        const data = await response.json();
        setTodos(data);
        console.log(data); // Print the fetched TODOs to the console
      } catch (err) {
        console.error("Failed to fetch TODOs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Loading TODOs...</p>;

  return (
    <div className="todo-container">
      <h1 className="title">📝 GitHub TODOs</h1>

      {/* Display the TODOs in a grid layout */}
      <div className="todo-grid-header">
        <div>Issue #</div>
        <div>Title</div>
        <div>Description</div>
        <div>Implemented?</div>
        <div>Opened at</div>
      </div>

        {todos.map((issue) => (
        <div key={issue.id} className="todo-grid-row">
          <div>
            <a
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="todo-link"
            >
              #{issue.number}
            </a>
          </div>
          <div>{issue.title}</div>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {issue.body || "No description provided."}
          </div>
          <div>{issue.state === "open" ? (
            <span style={{ color: "orangered" }}>🔴 Not Implemented</span>
          ) : (
            <span style={{ color: "limegreen" }}>🟢 Implemented</span>
          )}</div>
          <div>{new Date(issue.created_at).toLocaleDateString()}</div>
        </div>
      ))}

    </div>
  );
};

export default TodoComp;
