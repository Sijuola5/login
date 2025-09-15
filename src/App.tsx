import React from "react";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f3f4f6"
    }}>
      <LoginForm />
    </div>
  );
}

export default App;
