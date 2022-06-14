import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invitation } from "./components/Invitation/Invitation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:personID" element={<Invitation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
