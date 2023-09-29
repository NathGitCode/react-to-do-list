import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [archive, setArchive] = useState([]);

  console.log(toDo);
  console.log(userInput);
  console.log(archive);

  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const deleteBtn = (index, list) => {
    let storedToDo = [...toDo];
    let storedArchive = [...archive];
    storedToDo.splice(index, 1);
    storedArchive.push(list.task);
    setToDo(storedToDo);

    setArchive(storedArchive);
  };

  const miniDeleteBtn = (i) => {
    let storedArchive = [...archive];
    storedArchive.splice(i, 1);
    setArchive(storedArchive);
  };

  const addHandler = () => {
    let storedToDo = [...toDo];
    storedToDo.push({ task: userInput, toggle: false });
    setToDo(storedToDo);
    setUserInput("");
  };

  const handleEdit = (index) => {
    let storedToDo = [...toDo];
    storedToDo[index].toggle = !storedToDo[index].toggle;
    setToDo(storedToDo);
  };

  const changeEdit = (index, e) => {
    let storedToDo = [...toDo];

    storedToDo[index].task = e.target.value;

    console.log(storedToDo.task);

    setToDo(storedToDo);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      addHandler();
    }
  };

  return (
    <>
      <div className="App">
        <div className="archiveContainer">
          <h3>Archive</h3>
          {archive.map((arch, i) => {
            return (
              <div key={i}>
                {`${arch}  `}
                <button id="miniDelete" onClick={() => miniDeleteBtn(i)}>
                  -
                </button>
              </div>
            );
          })}
        </div>
        <div className="mainContainer">
          <div>
            <input
              type="text"
              value={userInput}
              onChange={changeHandler}
              onKeyDown={handleEnter}
            ></input>
            <input
              id="inputBtn"
              type="submit"
              value="Add"
              onClick={addHandler}
            ></input>
          </div>
          {toDo.map((list, index) => {
            return (
              <div key={index}>
                {" "}
                {`${index + 1}. `}
                {list.task}
                <button id="editBtn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button id="deleteBtn" onClick={() => deleteBtn(index, list)}>
                  Delete
                </button>
                <div>
                  {list.toggle && (
                    <input
                      type="text"
                      value={list.task}
                      onChange={(e) => changeEdit(index, e)}
                    ></input>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

// toDo.map((list, index) =>
// object, position in arrray
