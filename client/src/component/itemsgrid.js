import React from "react";
const placeholder = require("./placeholder.jpg");

class ItemsGrid extends React.Component {
    render() {
        const items = [];

        // If there was a response
        if (this.props.apiResponse !== "") {
            // Parse JSON
            let dataJson = JSON.parse(this.props.apiResponse);

            // Only show elements based on filter
            dataJson = dataJson.filter(
                currentItem => this.props.filter === "All" || this.props.filter === currentItem["category"]
            );

            let numItems = dataJson.length;
            let numRows = numItems / 3;

            // Create row with 3 "Items"
            for (let i = 0; i < numRows; i++) {
                const currentRow = [];
                let currentItem = 3 * i;

                for (let j = 0; j < 3; j++) {
                    if (dataJson[currentItem]) {
                        currentRow.push(
                            <Item
                                name={dataJson[currentItem]["prod_name"]}
                                price={dataJson[currentItem]["price"].toFixed(2)}
                                category={dataJson[currentItem]["category"]}
                                key={currentItem}
                                index={currentItem}
                                addToCart={index => this.props.addToCart(index)}
                            />
                        );
                    }
                    currentItem++;
                }

                items.push(
                    <div className="row" key={currentItem}>
                        {currentRow}
                    </div>
                );
            }
        }

        return <div className="col-md-9">{items}</div>;
    }
}

class Item extends React.Component {
    render() {
        // TODO : Replace placeholder with image this.props.image
        return (
            <div className="col-md-4 mt-2 mb-2 text-center highlight" onClick={() => this.props.addToCart(this.props.index)}>
                <h3>{this.props.name}</h3>
                <img className="mt-3 mb-3 slide-up" src={placeholder} alt="Item" />
                <h5>Price: ${this.props.price}</h5>
                <button className="btn btn-success mt-3 mb-3">Add to Cart</button>
            </div>
        );
    }
}

export default ItemsGrid;
