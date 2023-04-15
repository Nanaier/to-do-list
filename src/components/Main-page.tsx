import React, { useEffect, useState } from "react";
import "./styles/Main-page.css";
import Input from "@mui/material/Input";
import { Task } from "../types/Task";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addToTasks,
  deleteTask,
  updateTaskStatus,
} from "../redux/reducers/task";
import Grid from "@mui/material/Grid";
import FormDialog from "./components/FormDialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import { Status } from "../types/Task";
import Statistics from "./components/Statistics";
import TaskCard from "./components/TaskCard";

const GridList = (props: { List: Task[]; statusChange: Status; isCheckBox: boolean; isStartButton:boolean }) => {
  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      spacing={1}
      sx={{ display: "flex", flexDirection: "column-reverse" }}
    >
      {props.List.slice(-3).map((item) => (
          <Grid item xs={12} md={12} key={item.id} className="element">
            <TaskCard item={item} isCheckBox={props.isCheckBox} isStartButton={props.isStartButton} statusChange={props.statusChange}/>
          </Grid>

      ))}
    </Grid>
  );
};

const MainPage = () => {
  const [task, setTask] = useState<Task>();
  const tasks = useAppSelector((state) => state.tasksReducer);
  const [plannedList, setPlannedList] = useState<Task[]>([]);
  const [inProgressList, setInProgressList] = useState<Task[]>([]);
  const [completedList, setCompletedList] = useState<Task[]>([]);

  const filterStatus = () => {
    setPlannedList(tasks.filter((item) => item.status === "planned"));
    setInProgressList(tasks.filter((item) => item.status === "in-progress"));
    setCompletedList(tasks.filter((item) => item.status === "completed"));
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    filterStatus();
  }, [tasks]);

  return (
    <div className="MainPage-body">
      <div className="main-container">
        <div className="main-container-top">
          <h1>To-do List</h1>
          <FormDialog />
        </div>
          <div className="main-container-bottom">
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <h2>Planned</h2>
                <GridList List={plannedList} statusChange="in-progress" isCheckBox={false} isStartButton/>
              </Grid>
              <Grid item xs={12} md={4}>
                <h2>In progress</h2>
                <GridList List={inProgressList} statusChange="completed" isStartButton={false} isCheckBox />
              </Grid>
              <Grid item xs={12} md={4}>
                <h2>Completed</h2>
                <GridList List={completedList} statusChange="completed" isCheckBox={false} isStartButton={false}/>
              </Grid>
            </Grid>
          </div>
        </div>
      <Statistics
        planned_amount={plannedList.length}
        in_progress_amount={inProgressList.length}
        completed_amount={completedList.length}
        total_amount={
          plannedList.length + inProgressList.length + completedList.length
        }
      />
    </div>
  );
};

export default MainPage;
