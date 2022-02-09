import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const AddField = ({ addTask }) => {
  const [input, setInput] = React.useState("");
  const [checkedInput, setCheckedInput] = React.useState(false)

  const handleClick =()=>{
    setCheckedInput(!checkedInput)
  }

  const handleAddTas = () => {
    const newTodoTask = {
      id: Date.now(),
      input,
      completed: true,
    };
    setInput("");
    setCheckedInput(false)
    addTask(newTodoTask);
  };


  const inputGet = (e) => {
    setInput(e.target.value);
  };


  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={checkedInput}
        onClick={handleClick}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        onChange={inputGet}
        value={input}
      />
      <Button onClick={handleAddTas}>
        <AddIcon />
      </Button>
    </div>
  );
};
