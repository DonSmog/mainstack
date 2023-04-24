import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import ItemOne from "./components/item1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item1" element={<ItemOne />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
