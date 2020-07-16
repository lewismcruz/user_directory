import React from "react";
import ReactDOM from "react-dom";

const headers = [
    "First Name", "Last Name", "EmployeeID", "Department", "E-mail", "HireDate"
];

// Try this way first

//let DataSheet = React.createClass({

function DataSheet() {
        return (
            <div>
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx) {
                            return React.DOM.th(null, title);
                            </div>
                        })
                    )
                )
            )
        )
    }



ReactDOM.render(
    React.createElement(DataSheet, {
      headers: headers,
    //  initialData: data,
    }),
    document.getElementById("root")
  );

export default DataSheet;


/*
function DataSheet() {
    return (
        <div>
        React.DOM.table(null,
            React.DOM.thead(null,
                React.DOM.tr(null,
                    this.props.headers.map(function(title, idx)
                    </div>
                    {
                        return React.DOM.th(null, title);
}

export default DataSheet;
*/
