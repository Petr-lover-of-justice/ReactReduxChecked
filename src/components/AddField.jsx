import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const AddField = ({ addTask }) => {
  const [input, setInput] = React.useState("");
  const [checkedInput, setCheckedInput] = React.useState(false);

  const handleAddTas = () => {
    addTask(input, checkedInput);
    setInput("");
    setCheckedInput(false);
  };

  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onChange={(e) => setCheckedInput(e.target.checked)}
        checked={checkedInput}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Button onClick={handleAddTas}>
        <AddIcon />
      </Button>
    </div>
  );
};
