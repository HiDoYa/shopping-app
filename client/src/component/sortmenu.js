import React from 'react'

class SortMenu extends React.Component {
    // TODO Add categories based on all the categories that currently exist
    render() {
        return (
            <div className="col-md-3">
                <div className="row">
                    <h5>Filter:</h5>
                </div>
                <SortElements value="Vegetables"/>
                <SortElements value="Fruits"/>
                <SortElements value="Meat"/>
                <SortElements value="Fish"/>
                <SortElements value="Dairy"/>
                <SortElements value="Snacks"/>
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