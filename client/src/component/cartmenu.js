import React from "react";

class CartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false
        };
    }

    clickMenuButton() {
        this.setState({
            showing: !this.state.showing
        });
    }

    render() {
        let classes = "shopping-cart cartmenu";
        if (this.state.showing) {
            classes += " cartmenuopen";
        }
        return (
            <React.Fragment>
                <CartMenuBtn showing={this.state.showing} onClick={() => this.clickMenuButton()} />
                <div className={classes}>
                    <h3 className="cartmenu-title mt-3">Shopping Cart</h3>
                    {this.props.itemsAdded.map((itemIndex, loopIndex) => {
                        let dataJson = JSON.parse(this.props.apiResponse);
                        return (
                            <CartMenuElement
                                name={dataJson[itemIndex]["prod_name"]}
                                price={dataJson[itemIndex]["price"]}
                                category={dataJson[itemIndex]["category"]}
                                key={itemIndex}
                                index={itemIndex}
                                removeFromCart={index => this.props.removeFromCart(index)}
                                quantity={1}
                            />
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

class CartMenuBtn extends React.Component {
    render() {
        let classes = "btn btn-primary cartmenubutton";
        if (this.props.showing) {
            classes += " cartmenubuttonopen";
        }
        return (
            <button className={classes} onClick={() => this.props.onClick()}>
                See cart
            </button>
        );
    }
}

class CartMenuElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberBuy: 1
        };
    }

    decreaseNumber() {
        this.setState({
            numberBuy: this.state.numberBuy === 1 ? 1 : this.state.numberBuy - 1
        });
    }

    increaseNumber() {
        this.setState({ numberBuy: this.state.numberBuy + 1 });
    }

    render() {
        return (
            <div className="m-3 cartmenu-element row">
                <div className="col-md-6">
                    <h5 className="mt-2">{this.props.name}</h5>
                    <div className="row ml-1">
                        <button className="m-1 col-md-3" onClick={() => this.decreaseNumber()}>
                            -
                        </button>
                        <p className="col-md-3">{this.state.numberBuy}</p>
                        <button className="m-1 col-md-3" onClick={() => this.increaseNumber()}>
                            +
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary mt-3 mb-3" onClick={() => this.props.removeFromCart(this.props.index)}>
                        Remove
                    </button>
                    <p>Cost: ${this.state.numberBuy * this.props.price}</p>
                </div>
            </div>
        );
    }
}

export default CartMenu;
