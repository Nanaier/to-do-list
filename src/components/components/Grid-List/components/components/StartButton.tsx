import Button from "@mui/material/Button";

import { Status, Task } from "D:/test-task/task1/todo-list/src/types/Task";
import { updateTaskStatus } from "D:/test-task/task1/todo-list/src/redux/reducers/task";
import { useAppDispatch } from "D:/test-task/task1/todo-list/src/hooks";
import Box from "@mui/material/Box";

import styles from "./StartButton.module.css";

const AddStartButton = (
  item: Task,
  isStartButton: boolean,
  statusChange: Status
) => {
  if (isStartButton) {
    return <StartButton item={item} statusChange={statusChange} />;
  } else {
    return <Box className={styles["box"]}></Box>;
  }
};

const StartButton = (props: { item: Task; statusChange: Status }) => {
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
};
export default AddStartButton;
