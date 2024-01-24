import React from "react";
import jobs from "./jobs.json";
import "./App.css";

function App() {
  console.log(jobs);
  return (
    <div className="App ">
      <header>
        <img src="/bg-header-desktop.svg" alt="header" className="NavHeader" />
      </header>
      <main className="Body">
        {jobs.map((job, index) => (
          <div key={index} className="JobComponent">
            
            <div>
              <img src={job.logo} alt="img"/>
              <p>{job.company}</p>
              <p>{job.position}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
