import React from "react";

const hiceel = [
  "Resolutions",
  "Decislogy",
  "Self Iion Making",
  "Psychomprovement",
  "Science",
];

function App() {
  const renderListOfUserNames = (names) => {
    return names.map((name) => (
      <li className="d-flex justify-content-between bg-secondary rounded-5">
        {name}
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderListOfUserNames(hiceel)}</ul>
    </div>
  );
}

export default App;
