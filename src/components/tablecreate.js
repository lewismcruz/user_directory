import React from "react";


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


ReactDOM.render(
    Render.createElement(DataSheet, {
        headers: headers,
        initialData: data,
    }),
    document.getElementById("App")
);
