import React from "react";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Item = ({ id, checked, input, deletAdd }) => {
  const [checedRemove, setChecedRemove] = React.useState(checked);
  const removeBtn = () => {
    alert("Нужно ли удалять задачу?");
    deletAdd(id);
  };

  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={(e) => setChecedRemove(e.target.checked)}
          checked={checedRemove}
        />
        <Typography className="item-text">{input}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={removeBtn}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
