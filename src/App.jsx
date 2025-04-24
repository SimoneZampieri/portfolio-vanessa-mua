import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefLayout from "./layout/DefLayout";
import HomePage from "./components/HomePage";
import MuaDetail from "./components/MuaDetail";

function App() {
  console.log("App rendering");
  return (
    <GlobalProvider>
      <BrowserRouter>
        <DefLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<MuaDetail />} />
          </Routes>
        </DefLayout>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
