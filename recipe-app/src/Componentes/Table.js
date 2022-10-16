import React from "react";

const Table = (props) => (
    <div className="container">
        <table>
          <thead>
            <tr>
              {props.getTable.columns.map((col, key) =><th key={key}>{col}</th>)}
            </tr>
          </thead>
          {props.getTable.result.map((el, key) =>
            <tbody key={key}>
              <tr >
                {props.getTable.columns.map((col, key) => <td key={key}>{el[col]}</td>)}
              </tr>
            </tbody>
          )}
        </table>
    </div>
);


export default Table;