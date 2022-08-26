import { Component } from "react";
import bag from './bag.png'

export class GroceryList extends Component {
    state = {  // the state of what will change
        userInput: "", // the text that the user enters into the input will change, so we write an empty string
        groceryList: [] // here we will have an array (list) of user-entered cases and this will be added to one array
    }

    onChangeEvent(e) {
        this.setState({userInput: e});  // changes in Input, which is equal to e - find out what exactly the user writes in the input - equate it to an event (click, text change, etc.)
    //    console.log(e)
    }

    addItem(input) {
        if(input === '') {
            alert ("Please enter an item");
        } else {
        let listArray = this.state.groceryList;  // a variable that creates a list where all our cases will be placed
        listArray.push(input)  // push() - a method that adds what the user writes (input) to the end of the array
        this.setState({ groceryList: listArray, userInput: '' }) // equals to list Array, user Input equals to an empty string - empty the input after entering text
   //console.log(listArray)

    // When there are many elements, it is necessary to add an array - the place where we will store all these elements
    }
}

// Write a function for the DELETE button

    deleteItem() {
        let listArray = this.state.groceryList;  // get access to what we have in the array
        listArray = []; // empty array = to empty array
        this.setState({groceryList: listArray})
    }

    // write the function that strikeout the element when clicked
    crossedword(event) {  // event - as soon as we have something dependent on li (here this event is a click), we will assume this using event.target
        const li = event.target;
        li.classList.toggle("crossed"); // toggle - adds the class if it doesn't exist and removes the class if it exists
    }

    // Working on the ENTER button | put all the content in the <form></form>
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="What do you want to buy today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} // allows you to see in the console the text that the user enters into the input
                    value={this.state.userInput} />   {/* find out the value of what exactly the user enters into the input */}
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>   
                     {/* addItem - each click adds a new element = this.state.userInput*/}
                </div>
                {/* we need to access every element of our array and we need to map each element and for this we use the map function - takes up to 3 arguments */}
                <ul> 
                    {this.state.groceryList.map((item, index) => (  // index - each element appears under its own individual serial number, which will become its unique key
                        <li onClick={this.crossedword} key={index}>
                            <img src={bag} className="bag" alt="bag" />
                            {item}</li>
                    ))} 
                    
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
                </form>
            </div>
        )
    }

}

