import { Button, DatePicker, version } from "antd";
import React from "react";

function App() {
  return (
    <main className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </main>
  );
}

export default App;
