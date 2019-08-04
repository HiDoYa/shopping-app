import React from "react";

class ItemsGrid extends React.Component {
    render() {
        let toRender = [];

        // If there was a response
        if (this.props.apiResponse !== "") {
            // Parse JSON
            let dataJson = JSON.parse(this.props.apiResponse);

            // Only show elements based on filter
            dataJson = dataJson.filter(
                currentItem => this.props.filter === "All" || this.props.filter === currentItem["category"]
            );

            // Split array into chunks of 3 items
            let chunkedArr = [];
            for (let i = 0; i < dataJson.length; i += 3) {
                chunkedArr.push(dataJson.slice(i, i + 3));
            }

            // Create row with 3 items inside
            toRender = chunkedArr.map((currentChunk, chunkIndex) => {
                return (
                    <div className="row" key={chunkIndex}>
                        {currentChunk.map((currentItem, itemIndex) => {
                            let totalIndex = chunkIndex * 3 + itemIndex;
                            return (
                                <Item
                                    name={currentItem["prod_name"]}
                                    price={currentItem["price"].toFixed(2)}
                                    category={currentItem["category"]}
                                    image={currentItem["image_path"]}
                                    key={totalIndex}
                                    index={totalIndex}
                                    addToCart={totalIndex => this.props.addToCart(totalIndex)}
                                />
                            );
                        })}
                    </div>
                );
            });
        }

        return <div className="col-md-9">{toRender}</div>;
    }
}

class Item extends React.Component {
    render() {
        return (
            <div className="col-md-4 mt-2 mb-2 text-center highlight" onClick={() => this.props.addToCart(this.props.index)}>
                <h3>{this.props.name}</h3>
                <img className="mt-3 mb-3 item-image" src={"http://localhost:9000/images/" + this.props.image} alt="Item" />
                <h5>Price: ${this.props.price}</h5>
                <button className="btn btn-success mt-3 mb-3">Add to Cart</button>
            </div>
        );
    }
}

export default ItemsGrid;
