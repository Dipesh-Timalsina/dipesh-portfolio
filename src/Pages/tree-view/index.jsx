import MenuList from "./menu-list";

import menus from "./data";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Contact } from "../../components/Contact/Contact";

export default function TreeView({ menus = [] }) {
  return (
    <>
      <Navbar/>
      <div className="layout">
        <div className="topsection">
          <div className="tree-view-container">
            <MenuList list={menus} />
          </div>
        </div>
      </div>
      <Contact/>
    </>
  );
};
