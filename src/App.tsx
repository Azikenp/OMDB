import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div className="pb-6">
      <Header />
      
      <Outlet />
    </div>
  );
};

export default App;

