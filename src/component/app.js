import React from 'react'
const placeholder = require('./placeholder.jpg');

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CartMenu />
                <div class="container">
                    <h1 class="display-3 text-center mb-4 mb-4">Shop</h1>
                    <div class="row">
                        <SortMenu />
                        <ItemsGrid />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class CartMenuBtn extends React.Component {
    render() {
        return (
            <button class="btn btn-primary seecartmenu" onClick={() => this.props.onClick()}>
                See cart
            </button>
        );
    }
}

class CartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        }
    }
    render() {
        return (
            <React.Fragment>
                <CartMenuBtn />
                <div class="shopping-cart cartmenu">
                    <div class="col-md-3">CartMenu</div>
                </div>
            </React.Fragment>
        );   
    }
}


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

class ItemsGrid extends React.Component {
    render() {
        return (
            <div class="col-md-9">
                <div class="row">
                    <Item value="0"/>
                    <Item value="1"/>
                    <Item value="2"/>
                </div>
                <div class="row">
                    <Item value="0"/>
                    <Item value="1"/>
                    <Item value="2"/>
                </div>
                <div class="row">
                    <Item value="0"/>
                    <Item value="1"/>
                    <Item value="2"/>
                </div>
            </div>
        );   
    }
}

class Item extends React.Component {
    render() {
        return (
            <div class="col-md-4 mt-2 mb-2">
                <img src={placeholder}></img>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        );
    }
}

export default App;