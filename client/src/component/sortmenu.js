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
                {this.props.categories.map((category) => {
                    return (
                        <SortElements
                            value={category}
                        />
                    )
                })}
            </div>
        );   
    }
}

class SortElements extends React.Component {
    render() {
        return (
            <button className="btn btn-outline-success m-1">{this.props.value}</button>
        );
    }
}

export default SortMenu;