import Checkbox from "@mui/material/Checkbox";

import { useState, ChangeEvent } from "react";
import { Status, Task } from "src/types/Task";
import { updateTaskStatus } from "src/redux/reducers/task";
import { useAppDispatch } from "src/hooks";

const ControlledCheckbox = (props: { item: Task; statusChange: Status }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const obj: Task = {
      id: props.item.id,
      title: props.item.title,
      description: props.item.description,
      status: props.statusChange,
    };
    dispatch(updateTaskStatus(obj));
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ControlledCheckbox;
