import React from 'react'
import CartMenu from './cartmenu'
import ItemsGrid from './itemsgrid'
import SortMenu from './sortmenu'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        }
    }

    addToCart() {
        // TODO
        alert(2);
    }

    componentDidMount() {
        fetch("http://localhost:9000/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
    }

    render() {
        return (
            <React.Fragment>
                <p>{this.state.apiResponse}</p>
                <CartMenu />
                <div class="container">
                    <h3 class="display-4 text-center pt-4 mb-4">HiDoYa's Groceries</h3>
                    <div class="row">
                        <SortMenu />
                        <ItemsGrid 
                            addToCart={() => this.addToCart()}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;