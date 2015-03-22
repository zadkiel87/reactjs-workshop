var ComicApp = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Comic Viewer</h1>
            </div>
        );
    }
});

React.render(<ComicApp />, document.getElementById('container'));