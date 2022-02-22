import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...state,
        {
          id: Date.now(),
          input: action.payload.text,
          checked: action.payload.checked,
        },
      ];
    }

    case "DELETE_TASK": {
      const stateNews = state.filter((items) => items.id !== action.payload);
      return stateNews;
    }

    case "DELETE_ALL_TASK": {
      return (state = []);
    }

    case "CHECKED_TASK": {
      return state.map((check) => {
        if (check.id === action.payload) {
          return {
            ...check,
            checked: !check.checked,
          };
        }
        return check;
      });
    }

    case "CHECKED_ALL": {
      return state.map((all) => {
        return {
          ...all,
          checked: true,
        };
      });
    }

    case "CHECKED_TAB": {
      return {
        ...state,
        orderBy: action.payload,
      };
    }



    case "TAB_ALL": {
      return state;
    }

    case "TAB_TRUE": {
      return state
      
    }
    // state.filter((t)=> t.checked === true);
    case "TAB_FALSE": {
      // return state.filter((item2) => item2.checked === false);
      return state
    }

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, []);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: { text, checked },
    });
  };

  const checkedPost = (id) => {
    dispatch({
      type: "CHECKED_TASK",
      payload: id,
    });
  };

  const deletTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const allDeletPost = (id) => {
    dispatch({
      type: "DELETE_ALL_TASK",
      payload: id,
    });
  };
  const checkedAll = (id, checked) => {
    dispatch({
      type: "CHECKED_ALL",
      payload: { checked, id },
    });
  };

  // const setType = (e) => {
  //   if (e === "all") {
  //     dispatch({
  //       type: "TAB_ALL",
  //     });
  //   } else if (e === "true") {
  //     dispatch({
  //       type: "TAB_TRUE",
  //       payload: state
  //     });
  //   } else if (e === "false") {
  //     dispatch({
  //       type: "TAB_FALSE",
  //     });
  //   }
  // };
  // const [tabs, setTabs] = React.useState(state);
  // const setTab=(e)=>{
  //   if(e==="all"){
  //     return state
  //   }
  // }

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
          <Tab label="Активные"  />
          <Tab label="Завершённые" />
        </Tabs>
        {/* //onClick={setType("all") */}
        <Divider />
        <List>
          {state.length ? (
            state.map((obj) => (
              <Item
                deletTask={deletTask}
                {...obj}
                key={obj.id}
                checkedPost={() => checkedPost(obj.id)}
              />
            ))
          ) : (
            <p>тут пуста</p>
          )}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={checkedAll}>Отметить всё</Button>
          <Button onClick={allDeletPost}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
