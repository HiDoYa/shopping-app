import React from "react";
import CartMenu from "./cartmenu";
import ItemsGrid from "./itemsgrid";
import SortMenu from "./sortmenu";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            itemsAdded: [],
            categories: [],
            filter: "All"
        };
    }

    addToCart(index) {
        // Check if apiResponse not loaded yet
        if (this.state.apiResponse === "") {
            return;
        }

        // Checks if item already exists
        if (this.state.itemsAdded.includes(index)) {
            return;
        }

        let newState = this.state.itemsAdded.concat(index);

        // Can't push state array -> concat instead
        this.setState({ itemsAdded: newState });
    }

    removeFromCart(index) {
        // Check if apiResponse not loaded yet
        if (this.state.apiResponse === "") {
            return;
        }
        let newState = [...this.state.itemsAdded];
        let indexToRemove = newState.indexOf(index);
        newState.splice(indexToRemove, 1);

        this.setState({ itemsAdded: newState });
    }

    // Set filter for one of the categories
    setFilter(categoryName) {
        this.setState({ filter: categoryName });
    }

    componentDidMount() {
        // Calls API, gets response, converts to text, store as state
        // Note, json is passed into items to initialize them
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(jsonString => {
                let categoriesArr = [];
                // Gets item categories for sortMenu
                Array.from(JSON.parse(jsonString)["items"]).map(item => {
                    let currentCategory = item["category"];
                    if (!categoriesArr.find(element => element === currentCategory)) {
                        categoriesArr.push(currentCategory);
                    }
                    return null;
                });
                this.setState({
                    apiResponse: jsonString,
                    categories: categoriesArr
                });
            });
        fetch("http://localhost:9000/images");
    }

    render() {
        return (
            <React.Fragment>
                <CartMenu
                    apiResponse={this.state.apiResponse}
                    itemsAdded={this.state.itemsAdded}
                    removeFromCart={index => this.removeFromCart(index)}
                />
                <div className="container">
                    <h3 className="display-4 text-center pt-4 mb-4">HiDoYa's Market</h3>
                    <div className="row">
                        <SortMenu
                            categories={this.state.categories}
                            filter={this.state.filter}
                            setFilter={categoryName => this.setFilter(categoryName)}
                        />
                        <ItemsGrid
                            apiResponse={this.state.apiResponse}
                            filter={this.state.filter}
                            addToCart={index => this.addToCart(index)}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
