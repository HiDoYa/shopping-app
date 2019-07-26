import React from 'react'

class CartMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        }
    }

    openMenu() {
        this.setState({
            showing: !this.state.showing,
        })
    }

    render() {
        let classes = "shopping-cart cartmenu";
        const elements = [];

        if (this.props.apiResponse !== "") {
            let dataJson = JSON.parse(this.props.apiResponse);
            
            for (let i = 0; i < this.props.itemsAdded.length; i++) {
                let currentIdx = this.props.itemsAdded[i];
                elements.push(
                    <CartMenuElement
                        name={dataJson["items"][currentIdx]["name"]}
                        price={dataJson["items"][currentIdx]["price"]}
                        category={dataJson["items"][currentIdx]["category"]}
                        index={currentIdx}
                        removeFromCart={(index) => this.props.removeFromCart(index)}
                        quantity={1}
                    />
                );
            }
        }

        if (this.state.showing) {
            classes += " cartmenuopen";
        }
        return (
            <React.Fragment>
                <CartMenuBtn
                    showing={this.state.showing}
                    onClick={() => this.openMenu()}
                />
                <div className={classes}>
                    <h3 className="cartmenu-title mt-3">Shopping Cart</h3>
                    {elements}
                </div>
            </React.Fragment>
        );   
    }
}

class CartMenuBtn extends React.Component {
    render() {
        let classes = "btn btn-success seecartmenu";
        if (this.props.showing) {
            classes += " seecartmenuopen";
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
    }

    render() {
        return (
            <div className="m-3 cartmenu-element row">
                <div className="col-md-6">
                    <h5 className="mt-2">{this.props.name}</h5>
                    <button 
                        className="btn btn-primary mt-3 mb-3"
                        onClick={() => this.props.removeFromCart(this.props.index)} 
                        >
                        Remove
                    </button>
                </div>
                <div className="col-md-6">
                    <image>test</image>
                </div>
            </div>
        );
    }
}

export default CartMenu;