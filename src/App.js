import "./styles.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]); //an empty array in useState initial data

  const handleChange = (event) => {
    console.log(event.target.value);

    setInputList(event.target.value);
  };
  //storing the input entered by user in an array and then calling the array to show the notes
  const handleClick = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]; //getting the previous inpputs of the input array
    });
    setInputList(""); //to clear the input bar after clicking the button
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id; //to match the id with the id of the list item and the id of item that is clicked
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TO DO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="add items "
            value={inputList}
            onChange={handleChange}
          />
          <button onClick={handleClick}>+</button>

          {items.map((val, idx) => {
            //return is neccessary in map function
            return (
              <TodoList key={idx} text={val} id={idx} onDelete={deleteItem} />
            );
          })}
        </div>
      </div>
    </>
  );
}
