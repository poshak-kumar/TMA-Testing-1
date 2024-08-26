import React from "react";

const Earn = () => {
  return (
    <div style={styles.container}>
      <h2>All Tasks Here</h2>
      <ul style={styles.taskList}>
        <li>YouTube Follow Task</li>
        <li>Daily Login</li>
        <li>Invite Friends</li>
        {/* Add more tasks as needed */}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  taskList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
};

export default Earn;
