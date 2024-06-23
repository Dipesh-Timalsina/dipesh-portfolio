

import React, { useState } from "react";
import data from "./data";
import "./style.css";


export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [checked, setChecked] = useState(false); // State for the toggle slider

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  const handleToggle = () => {
    setChecked(!checked);
    setEnableMultiSelection(!enableMultiSelection); // Toggle multi-selection mode
  };
  const toggleContent = (id) => {
    setSelected(selected === id ? null : id);
  };

  console.log(selected, multiple);
    return (
      <>
        <div className="layout">
          <div className="topsection">
            <div>
              <div className="toggle-slider">
                <div className="multipleSelection">
                  <h3>Multiple Selection</h3>
                </div>

                <input
                  type="checkbox"
                  id="toggle"
                  checked={checked}
                  onChange={handleToggle}
                />
                <label htmlFor="toggle" className="slider" />
              </div>

              <div> all</div>
              <div className="acc-wrapper">
                <div className="accordian">
                  {data && data.length > 0 ? (
                    data.map((dataItem) => (
                      <div className="item closed">
                        <div
                          onClick={() =>
                            enableMultiSelection
                              ? handleMultiSelection(dataItem.id)
                              : handleSingleSelection(dataItem.id)
                          }
                          className="title"
                        >
                          <h3>{dataItem.question}</h3>
                          <span onClick={() => toggleContent(dataItem.id)}>
                            {selected === dataItem.id ? "-" : "+"}
                          </span>
                        </div>
                        {enableMultiSelection
                          ? multiple.indexOf(dataItem.id) !== -1 && (
                              <div className="acc-content ">
                                {dataItem.answer}
                              </div>
                            )
                          : selected === dataItem.id && (
                              <div className="acc-content ">
                                {dataItem.answer}
                              </div>
                            )}
                        {selected === dataItem.id ||
                        multiple.indexOf(dataItem.id) !== -1 ? (
                          <div className="content">{dataItem.answer}</div>
                        ) : null}
                      </div>
                    ))
                  ) : (
                    <div>No data found also this !</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="learnings">
            <h1>Learnings</h1>
            <ol>
              <li>
                Learned to use the useState hook for managing local state in a
                functional component.
              </li>

              <li>
                Learned to conditionally render content based on the state.
              </li>
              <li>
                Implemented event handlers like handleSingleSelection,
                handleMultiSelection, and handleToggle to manage user
                interactions.
              </li>
              <li>
                Learned to implement toggle functionality for enabling/disabling
                multi-selection mode.
              </li>
            </ol>
          </div>
        </div>
      </>
    );
}
