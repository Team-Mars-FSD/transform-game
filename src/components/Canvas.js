import React from 'react';
import Triangle from './Triangle';

const Canvas = () => {
  function renderColumns() {
    let columns = [];
    for (let i = 0; i <= 1000; i = i + 50) {
      columns.push(<line key={i} x1={i} x2={i} y1="0" y2="1000" stroke="gray" strokeWidth="1" />)
    }
    return columns;
  }

  function renderRows() {
    let rows = [];
    for (let i = 0; i <= 1000; i = i + 50) {
      rows.push(<line key={i} x1="0" x2="1000" y1={i} y2={i} stroke="gray" strokeWidth="1" />)
    }
    return rows;
  }

  function renderXNumbers() {
    let xNumbers = [];
    let counter = -10;
    for (let i = 2; i <= 1000; i = i + 50) {
      xNumbers.push(<text key={i} x={i} y="515">{counter}</text>)
      counter = counter + 1;
    }
    return xNumbers;
  }

  function renderYNumbers() {
    let yNumbers = [];
    let counter = 10;
    for (let i = -2; i <= 1000; i = i + 50) {
      if (counter !== 0) {
        yNumbers.push(<text key={i} x="505" y={i}>{counter}</text>)
      }
      counter = counter - 1;
    }
    return yNumbers;
  }

  return (
    <svg width="1000" height="1000">
      {renderColumns()}
      {renderRows()}
      <line x1="500" x2="500" y1="0" y2="1000" stroke="black" strokeWidth="3" />
      <line x1="0" x2="1000" y1="500" y2="500" stroke="black" strokeWidth="3" />

      {renderXNumbers()}
      {renderYNumbers()}
      <text x="505" y="15">10</text>
      <text x="980" y="515">10</text>

      <Triangle />

      {/* <path d="M 100 100 H 200 V 200 L 100 100"
          stroke="black" strokeWidth="3" fill="blue"/>

        <path d="M 100 100 H 200 V 200 L 100 100"
          stroke="black" strokeWidth="3" fill="blue"
          transform="translate(500 50)">
        </path> />

        <path d="M 100 100 H 200 V 200 L 100 100"
          stroke="black" strokeWidth="3" fill="blue"
          transform="translate(500 50)">
        </path> />


        <path d="M 100 100 H 200 V 200 L 100 100"
          stroke="black" strokeWidth="3" fill="blue"
          transform="rotate(180,500,500) ">
        </path> />

        <path d="M 100 100 H 200 V 200 L 100 100"
          stroke="black" strokeWidth="3" fill="blue"
          transform="rotate(270,500,500) ">
        </path> /> */}
    </svg>
  );
}

export default Canvas;