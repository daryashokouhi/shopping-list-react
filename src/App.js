import { Component } from 'react';
import './App.css';
import DeleteIcon from './delete-icon.png';

const shoppingList = [];

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        shoppingList: [],
        itemInput: ''
      }
    }

    handleInputChange = (e) => {
      this.setState({itemInput: e.target.value});
    }

    addtoList = () => {
      if(this.state.itemInput === ''){
        alert('Please enter a shopping item.');
      } else {
        shoppingList.push(this.state.itemInput);
        this.setState({shoppingList: this.state.shoppingList});
        this.setState({itemInput: ''});
        console.log(shoppingList);
      }
    }

    onEnter = (event) => {
      if (event.key === 'Enter') {
        if(this.state.itemInput === ''){
          alert('Please enter a shopping item.');
        } else {
          shoppingList.push(this.state.itemInput);
          this.setState({shoppingList: this.state.shoppingList});
          this.setState({itemInput: ''});
        }
    }
  }

  removeItem = (index) => {
    for(let i=0; i < shoppingList.length; i++) {
      if(i === index){
        shoppingList.splice(i, 1);
      }
    }
    this.setState({shoppingList: this.state.shoppingList});
  }



  render() {
    const shoppingItems = shoppingList.map((shoppingItem, index) =>
      <div className="singleItem" key={index}>
        <span onClick={() => this.removeItem(index)}><img src={DeleteIcon} alt="Delete Icon"/></span>
        <li>{shoppingItem}</li>
      </div>
    );

    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List App</h1>
        </div>
        <div className="body">
          <p>Add items to your shopping list!</p>
          <input value={this.state.itemInput}
                onChange={this.handleInputChange}
                onKeyPress={this.onEnter}
                type="text"
                placeholder="Shopping Item"
                name="itemInput"/>
          <button onClick={this.addtoList}>Add to Shopping List</button>
          <div className="listHolder">
            <ul>
              {shoppingItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
