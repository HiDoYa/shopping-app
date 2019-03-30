import React from 'react'
const placeholder = require('./placeholder.jpg');

class ItemsGrid extends React.Component {
    render() {
        return (
            <div class="col-md-9">
                <div class="row">
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                </div>
                <div class="row">
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                </div>
                <div class="row">
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                    <Item addToCart={() => this.props.addToCart()}/>
                </div>
            </div>
        );   
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false,
        };
    }

    mouseOver() {
        this.setState({
            highlight: true,
        });
    }

    mouseOut() {
        this.setState({
            highlight: false,
        });
    }

    render() {
        let overallClass = "col-md-4 mt-2 mb-2 text-center"
        if (this.state.highlight) {
            overallClass += " highlight"
        }

        return (
            <div 
                class={overallClass} 
                onClick={() => this.props.addToCart()} 
                onMouseOver={() => this.mouseOver()} 
                onMouseOut={() => this.mouseOut()}
            >
                <img class="mt-3 mb-3" src={placeholder}></img>
                <button class="btn btn-primary mt-3 mb-3">Add to Cart</button>
            </div>
        );
    }
}

export default ItemsGrid;