import React from "react";

// Try this way first

let DataSheet = React.createClass({
    render: function() {
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(function(title, idx) {
                            return React.DOM.th(null, title);
                        })
                    )
                )
            )
        )
    }
});

export default DataSheet;

/*
function DataSheet() {
    return (
        React.DOM.table(null,
            React.DOM.thead(null,
                React.DOM.tr(null,
                    this.props.headers.map(function(title, idx) {
                        return React.DOM.th(null, title);
}

export default DataSheet;

*/