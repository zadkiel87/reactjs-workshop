var comicList = [{title: "Amazing Spider-Man (2014) #1 (Mhan Variant)"}, {title: "Superior Spider-Man (2013) #22"}];

var ComicApp = React.createClass({

    getInitialState: function () {
        return {comicList: comicList};
    },

    _addComic: function (comic) {
        this.setState({comicList: this.state.comicList.concat(comic)});
    },

    render: function () {
        return (
            <div>
                <h1>Comic Viewer</h1>
                <ComicAdder onSubmit={this._addComic}/>
                <ul>
                    {this.state.comicList.map(function (comic) {
                        return (<ComicElement title={comic.title}/>)
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

var ComicAdder = React.createClass({

    _onSubmit: function (e) {
        e.preventDefault();
        this.props.onSubmit({title: this.refs.inputTitle.getDOMNode().value})
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