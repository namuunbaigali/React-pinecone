import React from "react";

const hiceel = [
  "Resolutions",
  "Decision Making",
  "Psychology",
  "Self Improvement",
  "Science",
];

function App() {
  const renderListOfUserNames = (names) => {
    return names.map((name) => <li>{name}</li>);
  };

  return (
    <div>
      <ul className="d-flex justify-content-between bg-secondary rounded-5">
        {renderListOfUserNames(hiceel)}
      </ul>
    </div>
  );
}

export default App;
