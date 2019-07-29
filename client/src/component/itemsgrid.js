import React from 'react'
const placeholder = require('./placeholder.jpg');

class ItemsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const items = [];

        // If there was a response
        if (this.props.apiResponse !== "") {
            let dataJson = JSON.parse(this.props.apiResponse);
            let numItems = dataJson["items"].length;
            let numRows = numItems / 3;
            // Create row with 3 "Items"
            for (let i = 0; i < numRows; i++) {
                const currentRow = [];
                let currentItem = 3 * i;

                for (let j = 0; j < 3; j++) {
                    if (dataJson["items"][currentItem]) {
                        currentRow.push(
                            <Item 
                                name={dataJson["items"][currentItem]["name"]}
                                price={dataJson["items"][currentItem]["price"].toFixed(2)}
                                category={dataJson["items"][currentItem]["category"]}
                                key={currentItem}
                                index={currentItem}
                                addToCart={(index) => this.props.addToCart(index)}
                            />);
                    }
                    currentItem++;
                }

                items.push(<div className="row" key={currentItem}>{currentRow}</div>);
            }
        }

        return (
            <div className="col-md-9">
                {items}
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

        // TODO : Replace placeholder with image this.props.image
        return (
            <div 
                className={overallClass} 
                onClick={() => this.props.addToCart(this.props.index)} 
                onMouseOver={() => this.mouseOver()} 
                onMouseOut={() => this.mouseOut()}
            >
                <h3>{this.props.name}</h3>
                <img className="mt-3 mb-3" src={placeholder} alt="Item"></img>
                <h5>Price: ${this.props.price}</h5>
                <button className="btn btn-success mt-3 mb-3">Add to Cart</button>
            </div>
        );
    }
}

export default ItemsGrid;