import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function reducer(state, action) {
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
    case "CHECED_TASK": {
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            checked: !obj.checked,
          };
        }
        return obj;
      });
    }
    case "deletChecede": {
      const stateNews = state.filter((items) => items.id !== action.payload);
      return stateNews;
    }
    case "CLEAR_TASK": {
      return [];
    }
    case "CHECKED_ALL_TRUE": {
      return state.map((e) => ({
        ...e,
        checked: true,
      }));
    }
    case "TAB_ALL": {
      return state;
    }
    case "TAB_ALL_TRUE":{
     return state.filter((e)=> e.checked === false)
    }
    case "TAB_ALL_FALSE":{
      return state.filter((e)=> e.checked === false)
     }

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, [
    {
      id: 1,
      input: "like Cat",
      checked: true,
    },
  ]);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: { text, checked },
    });
  };
  const checkedTask = (id) => {
    dispatch({
      type: "CHECED_TASK",
      payload: id,
    });
  };

  const deletAdd = (id) => {
    dispatch({
      type: "deletChecede",
      payload: id,
    });
  };
  const ClearState = () => {
    dispatch({
      type: "CLEAR_TASK",
    });
  };
  const markCheckedAll = () => {
    dispatch({
      type: "CHECKED_ALL_TRUE",
    });
  };

  const tabAll = (e) => {
    if (e === "all") {
      dispatch({
        type: "TAB_ALL",
      });
    }
    if (e === "true") {
      dispatch({
        type: "TAB_ALL_TRUE",
      })
    }
    if (e === "false") {
      dispatch({
        type: "TAB_ALL_FALSE",
      })
    }
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
          <Tab label="Все" onClick={()=>tabAll("all")} />
          <Tab label="Активные" onClick={()=>tabAll("true")}  />
          <Tab label="Завершённые" onClick={()=>tabAll("false")}/>
        </Tabs>
        <Divider />
        <List>
          {state.map((obj) => (
            <Item
              key={obj.id}
              input={obj.input}
              checked={obj.checked}
              deletAdd={() => deletAdd(obj.id)}
              checkedTask={() => checkedTask(obj.id)}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={markCheckedAll}>Отметить всё</Button>
          <Button onClick={ClearState}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
