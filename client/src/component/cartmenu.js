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
        if (this.state.showing) {
            classes += " cartmenuopen";
        }
        return (
            <React.Fragment>
                <CartMenuBtn
                    showing={this.state.showing}
                    onClick={() => this.openMenu()}
                />
                <div class={classes}>
                    <div class="col-md-3">CartMenu</div>
                </div>
            </React.Fragment>
        );   
    }
}

class CartMenuBtn extends React.Component {
    render() {
        let classes = "btn btn-primary seecartmenu";
        if (this.props.showing) {
            classes += " seecartmenuopen";
        }
        return (
            <button class={classes} onClick={() => this.props.onClick()}>
                See cart
            </button>
        );
    }
}

export default CartMenu;