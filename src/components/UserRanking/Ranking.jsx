import React from "react";
const Ranking = () => {
  return (
    <div style={styles.container}>
      <h2>User Rankings</h2>
      <ol style={styles.rankingList}>
        <li>#1 Telegram Username</li>
        <li>#2 Telegram Username</li>
        <li>#3 Telegram Username</li>
        {/* Add more rankings */}
      </ol>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  rankingList: {
    listStyleType: "decimal",
    paddingLeft: "20px",
  },
};

export default Ranking;
