import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
// import uuid from 'uuid/v4';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        // { name: "Milk", qty: "5 gallons", id: uuid() },
        // { name: "Bread", qty: "2 loaves", id: uuid() },
        { name: "Milk", qty: "5 gallons" },
        { name: "Bread", qty: "2 loaves" },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }
  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name}:{item.qty}
          </li>
          //  <li key={item.id}>
          //   {item.name}:{item.qty}
          // </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
