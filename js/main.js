var comicData = [
    {
        title: "Amazing Spider-Man: Renew Your Vows (2015) #1",
        thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/5515b41ff2000.jpg"
    }, {
        title: "Amazing Spider-Man (2014) #18.1",
        thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/5506e04ad4bad.jpg"
    }, {
        title: "Iron Man Infinite Digital Comic (2013) #12",
        thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/1/03/52b4886020b90.jpg"
    }, {
        title: "Daredevil: End of Days (2012) #1",
        thumbnail: "http://i.annihil.us/u/prod/marvel/i/mg/f/70/4ff5b45a7da8a.jpg"
    }
];

var ComicApp = React.createClass({

    getInitialState: function () {
        return {comicList: []};
    },

    _addComic: function (comicTitle) {
        var comic = comicData.find(function (comic) {
            return comic.title == comicTitle;
        });
        this.setState({comicList: this.state.comicList.concat(comic)});
    },

    render: function () {
        return (
            <div>
                <h1>Comic Viewer ({this.state.comicList.length})</h1>
                <ComicAdder onSubmit={this._addComic}/>
                <ul>
                    {this.state.comicList.map(function (comic) {
                        return (<ComicElement comic={comic}/>)
                    })}
                </ul>
            </div>
        );
    }

});

var ComicElement = React.createClass({

    render: function () {
        return (
            <img
                src={this.props.comic.thumbnail}
                title={this.props.comic.title}/>
        );
    }

});

var ComicAdder = React.createClass({

    componentDidMount: function () {
        var input = this.refs.inputTitle.getDOMNode();
        new Awesomplete(input, {
            list: comicData.map(function (comic) {
                return comic.title
            })
        });
    },

    _onSubmit: function (e) {
        e.preventDefault();
        this.props.onSubmit(this.refs.inputTitle.getDOMNode().value)
    },

    render: function () {
        return (
            <form onSubmit={this._onSubmit}>
                <input type="text" ref="inputTitle"/>
                <input type="submit" value="Add"/>
            </form>
        );
    }

});

React.render(<ComicApp />, document.getElementById('container'));