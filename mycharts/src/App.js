import Graph from "./components/Graph";
import { data } from "./data";

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
            <Graph data={data.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
