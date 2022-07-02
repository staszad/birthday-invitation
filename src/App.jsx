import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invitation } from "./components/Invitation/Invitation";

function App() {
  return (
    <div className="App">
      <div className="w-screen min-h-screen bg-[#221f2e] text-white px-32">
        <BrowserRouter>
          <Routes>
            <Route path="/:personID" element={<Invitation />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
