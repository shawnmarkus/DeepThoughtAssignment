import React, { useState } from "react";
import Expandable from "./Expandable";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveNavbar from "./ResponsiveNavbar";
import "./app.css";
import data from "./Data.json";
import AssetsCollectionPage from "./AssetsCollectionPage";
import Title from "./Title.jsx";

function App() {
  const [selected, setSelected] = useState(data.tasks[0].task_id);
  return (
    <div className="App">
      <ResponsiveNavbar />
      <Title title={data.title} />
      <Expandable
        data={data}
        selected={selected}
        updateSelected={(taskId) => setSelected(taskId)}
      />
      <AssetsCollectionPage selected={selected} />
    </div>
  );
}

export default App;
