import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { Replay } from "@mui/icons-material";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          input: action.payload.text,
          checked: action.payload.checked,
        },
      ];
    }
    case "deletChecede": {
      const stateNews = state.filter((items) => items.id !== action.payload);
      return stateNews;
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, [
    { id: 0, input: "likeFood", checked: true },
  ]);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: { text, checked },
    });
  };

  const deletAdd = (id) => {
    dispatch({
      type: "deletChecede",
      payload:  id ,
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
            <Item deletAdd={deletAdd} {...obj} key={obj.id} />
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
