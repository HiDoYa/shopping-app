import React from 'react'
import CartMenu from './cartmenu'
import ItemsGrid from './itemsgrid'
import SortMenu from './sortmenu'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            itemsAdded: [],
        }
    }

    addToCart(index) {
        // Check if apiResponse not loaded yet
        if (this.state.apiResponse == "") {
            return;
        }

        // Checks if item already exists
        if (this.state.itemsAdded.includes(index)) {
            // TODO Already exists popup
            return;
        }

        let newState = this.state.itemsAdded.concat(index)

        // Can't push state array -> concat instead
        this.setState({itemsAdded: newState});
    }

    removeFromCart(index) {
        // Check if apiResponse not loaded yet
        if (this.state.apiResponse == "") {
            return;
        }
        let newState = [...this.state.itemsAdded];
        let indexToRemove = newState.indexOf(index);
        newState.splice(indexToRemove, 1)

        this.setState({itemsAdded: newState});
    }

    componentDidMount() {
        // Calls API, gets response, converts to text, store as state
        // Note, json is passed into items to initialize them
        fetch("http://localhost:9000/")
        .then(res => res.text())
        .then(jsonString => this.setState({ apiResponse: jsonString }));
    }

    render() {
        return (
            <React.Fragment>
                <CartMenu 
                    apiResponse={this.state.apiResponse}
                    itemsAdded={this.state.itemsAdded}
                    removeFromCart={(index) => this.removeFromCart(index)}
                />
                <div className="container">
                    <h3 className="display-4 text-center pt-4 mb-4">HiDoYa's Market</h3>
                    <div className="row">
                        <SortMenu />
                        <ItemsGrid 
                            apiResponse={this.state.apiResponse}
                            addToCart={(index) => this.addToCart(index)}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;