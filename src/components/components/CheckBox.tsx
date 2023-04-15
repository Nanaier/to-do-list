import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Status, Task } from '../../types/Task';
import { updateTaskStatus } from '../../redux/reducers/task';
import { useAppDispatch } from '../../redux/hooks';

export default function ControlledCheckbox(props:{item:Task, statusChange: Status}) {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}