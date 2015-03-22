var comicList = [{title: "Amazing Spider-Man (2014) #1 (Mhan Variant)"}, {title: "Superior Spider-Man (2013) #22"}];

var ComicApp = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Comic Viewer</h1>
                <ul>
                    {comicList.map(function (comic) {
                        return (<ComicElement title={comic.title} />)
                    })}
                </ul>
            </div>
        );
    }
});

var ComicElement = React.createClass({
    render: function () {
        return (<li>{this.props.title}</li>);
    }
});

React.render(<ComicApp />, document.getElementById('container'));