import React, { useState } from "react";

export default function CustomTab({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <>
      <div className="layout">
        <div className="topsection">
          <div className="wrapper">
            <div className="heading">
              {tabsContent.map((tabItem, index) => (
                <div
                  className={`tab-item ${
                    currentTabIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleOnClick(index)}
                  key={tabItem.label}
                >
                  <span className="label">{tabItem.label}</span>
                </div>
              ))}
            </div>
            <div className="content" style={{ color: "red" }}>
              {tabsContent[currentTabIndex] &&
                tabsContent[currentTabIndex].content}
            </div>
          </div>
        </div>
        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Learned to create a reusable CustomTab component that can be used
              to display different sets of tabs and their corresponding content.
            </li>

            <li>
              The CustomTab component can be customized with different
              tabsContent and onChange handlers.
            </li>
            <li>
              State Management with useState: Used the useState hook to manage
              the currentTabIndex, which tracks the currently active tab.
            </li>
            <li>
              Event Handling: Implemented the handleOnClick function to update
              the active tab index and call the onChange callback when a tab is
              clicked.
            </li>
            <li>
              Demonstrated how to pass event handlers as props to child
              components and execute them in response to user interactions.
            </li>
          </ol>
        </div>
      </div>
   
    </>
  );
}

