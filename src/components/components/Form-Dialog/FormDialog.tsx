import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

import styles from "./FormDialog.module.css";
import { Task, Status } from "src/types/Task";
import {
  useAppDispatch,
  useAppSelector,
} from "src/hooks";
import { addToTasks } from "src/redux/reducers/task";
import BasicSelect from "./Form-Dialog-components/BasicSelect";

const FormDialog = () => {
  const [status, setStatus] = useState<Status>("planned");
  const [open, setOpen] = useState(false);
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddTask = () => {
    if (title !== "" && description !== "") {
      const obj: Task = {
        id: tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 0,
        title: title,
        description: description,
        status: status as Status,
      };
      dispatch(addToTasks(obj));
      setDescription("");
      setTitle("");

      setOpen(false);
    }
  };
  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details about your task:
          </DialogContentText>
          <Box className={styles["box"]}>
            <Box className={styles["row"]}>
              <Input
                placeholder="Task Title"
                itemID="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Input
                placeholder="Task Description"
                itemID="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Box>
            <BasicSelect status={status} setStatus={setStatus} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>Add task</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FormDialog;
