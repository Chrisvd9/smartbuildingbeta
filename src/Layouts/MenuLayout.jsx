import { useState } from "react";
import Sidebar from "../components/Global/Sidebar";
import Topbar from "../components/Global/Topbar";

const Menu = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Menu;
