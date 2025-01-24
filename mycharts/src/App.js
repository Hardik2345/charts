import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="card text-bg-light my-3"
          style={{ minWidth: "60rem", minHeight: "35rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Chart</h5>
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
