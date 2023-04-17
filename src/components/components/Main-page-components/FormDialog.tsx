import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

import { Task } from "../../../types/Task";
import { Status } from "../../../types/Task";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addToTasks } from "../../../redux/reducers/task";
import BasicSelect from "./Form-Dialog-components/BasicSelect";

export default function FormDialog() {
  const [status, setStatus] = React.useState<Status>("planned");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const AddTask = () => {
    if (title !== "" && description !== "") {
      if (tasks[tasks.length - 1]) {
        const obj: Task = {
          id: tasks[tasks.length - 1].id + 1,
          title: title,
          description: description,
          status: status as Status,
        };
        dispatch(addToTasks(obj));
        setDescription("");
        setTitle("");
      } else {
        const obj: Task = {
          id: 0,
          title: title,
          description: description,
          status: status as Status,
        };
        dispatch(addToTasks(obj));
        setDescription("");
        setTitle("");
      }
      setOpen(false);
    }
  };

  const tasks = useAppSelector((state) => state.tasksReducer);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create task
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the details about your task:
            </DialogContentText>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              <BasicSelect status={status} setStatus={setStatus}></BasicSelect>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={AddTask}>Add task</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
