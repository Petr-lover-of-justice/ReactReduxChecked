import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { Replay } from "@mui/icons-material";

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, [
    { id: 2, input: "likeFood", complete: true },
  ]);

  const addTask = (obj) => {
    dispatch({
      type: "ADD_TASK",
      payload: obj,
    });
  };


  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((obj) => (
            <Item
              key={obj.id}
              text={obj.input}
              {...state}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
