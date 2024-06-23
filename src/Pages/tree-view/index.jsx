import MenuList from "./menu-list";

import menus from "./data";
import "./styles.css";


export default function TreeView({ menus = [] }) {
  return (
    <>
      <div className="layout">
        <div className="topsection">
          <div className="tree-view-container">
            <MenuList list={menus} />
          </div>
        </div>
        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Learned to structure a nested menu using two components: MenuItem
              and MenuList.
            </li>

            <li>
              MenuItem represents individual menu items, while MenuList
              represents a list of menu items.
            </li>
            <li>
              The displayCurrentChildren state is an object that tracks the
              display status of each menu item's children based on their labels.
            </li>
            <li>
              Used console.log statements to debug and monitor the state of
              displayCurrentChildren and the item prop during development.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
