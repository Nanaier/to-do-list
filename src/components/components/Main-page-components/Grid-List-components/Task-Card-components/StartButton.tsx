import Button from "@mui/material/Button";

import { Status, Task } from "../../../../../types/Task";
import { updateTaskStatus } from "../../../../../redux/reducers/task";
import { useAppDispatch } from "../../../../../hooks/hooks";

export default function StartButton(props: {
  item: Task;
  statusChange: Status;
}) {
  const dispatch = useAppDispatch();
  return (
    <Button
      aria-label="start"
      onClick={() => {
        const obj: Task = {
          id: props.item.id,
          title: props.item.title,
          description: props.item.description,
          status: props.statusChange,
        };
        dispatch(updateTaskStatus(obj));
      }}
    >
      Start task
    </Button>
  );
}
