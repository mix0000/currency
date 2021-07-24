import { Button, DatePicker } from "antd";
import { useStore } from "effector-react";
import React from "react";

import { $theme, toggleTheme } from "./store/store";

function App() {
  const isDark = useStore($theme);

  return (
    <main className="App">
      <h1>Is Dark: {isDark}</h1>
      <DatePicker />
      <Button
        type="ghost"
        style={{ marginLeft: 8 }}
        onClick={() => toggleTheme()}
      >
        Toggle Theme
      </Button>
    </main>
  );
}

export default App;
