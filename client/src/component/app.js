import React from 'react'
import CartMenu from './cartmenu'
import ItemsGrid from './itemsgrid'
import SortMenu from './sortmenu'

class App extends React.Component {
    addToCart() {
        alert(1);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
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