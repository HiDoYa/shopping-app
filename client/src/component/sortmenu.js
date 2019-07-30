import React from 'react'

class SortMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        }
    }
    // TODO Add categories based on all the categories that currently exist
    render() {
        return (
            <div className="col-md-3">
                <div className="row">
                    <h5>Filter:</h5>
                </div>
                {this.props.categories.map((category) => 
                    <SortElements
                        value={category}
                        key={category}
                        setFilter={(categoryName) => this.props.setFilter(categoryName)}
                    />
                )}
                <SortElements
                    value="All"
                    key="All"
                    setFilter={(categoryName) => this.props.setFilter(categoryName)}
                    All
                />
            </div>
        );   
    }
}

class SortElements extends React.Component {
    render() {
        return (
            <button 
            className="btn btn-outline-success m-1"
            onClick={() => this.props.setFilter(this.props.value)}>
                {this.props.value}
            </button>
        );
    }
}

export default SortMenu;