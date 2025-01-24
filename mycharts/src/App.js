function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          height: "100vh", // Makes the parent fill the viewport
        }}
      >
        <div
          className="card text-bg-light my-3"
          style={{ minWidth: "60rem", minHeight: "35rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Chart</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
