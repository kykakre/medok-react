import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import DrawerContainer from "./components/Drawer/DrawerContainer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DrawerContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
