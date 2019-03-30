import React from 'react'

class SortMenu extends React.Component {
    render() {
        return (
            <div class="col-md-3">
                <div class="row">
                    <h5>Filter:</h5>
                </div>
                <div class="row">
                    <SortElements value="Vegetables"/>
                    <SortElements value="Fruits"/>
                </div>
                <div class="row">
                    <SortElements value="Meat"/>
                    <SortElements value="Fish"/>
                    <SortElements value="Dairy"/>
                </div>
                <div class="row">
                    <SortElements value="Snacks"/>
                </div>
            </div>
        );   
    }
}

class SortElements extends React.Component {
    render() {
        return (
            <button class="btn btn-outline-primary m-1">{this.props.value}</button>
        );
    }
}

export default SortMenu;