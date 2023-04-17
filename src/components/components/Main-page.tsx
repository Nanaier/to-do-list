import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "../../styles/Main-page.css";
import { Task } from "../../types/Task";
import { useAppSelector } from "../../hooks/hooks";
import GridList from "./Main-page-components/GridList";
import FormDialog from "./Main-page-components/FormDialog";
import Statistics from "./Main-page-components/Statistics";

const MainPage = () => {
  const tasks = useAppSelector((state) => state.tasksReducer);
  const [plannedList, setPlannedList] = useState<Task[]>([]);
  const [inProgressList, setInProgressList] = useState<Task[]>([]);
  const [completedList, setCompletedList] = useState<Task[]>([]);

  const filterStatus = () => {
    setPlannedList(tasks.filter((item) => item.status === "planned"));
    setInProgressList(tasks.filter((item) => item.status === "in-progress"));
    setCompletedList(tasks.filter((item) => item.status === "completed"));
  };
  useEffect(() => {
    filterStatus();
  }, [tasks]);

  return (
    <div className="MainPage-body">
      <div className="main-container">
        <div className="main-container-top">
          <Typography variant="h4" component="div">
            To-do List
          </Typography>

          <FormDialog />
        </div>
        <div className="main-container-bottom">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{ p: "1rem" }}
              >
                Planned
              </Typography>
              <GridList
                List={plannedList}
                statusChange="in-progress"
                isCheckBox={false}
                isStartButton
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{ p: "1rem" }}
              >
                In progress
              </Typography>
              <GridList
                List={inProgressList}
                statusChange="completed"
                isStartButton={false}
                isCheckBox
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{ p: "1rem" }}
              >
                Completed
              </Typography>
              <GridList
                List={completedList}
                statusChange="completed"
                isCheckBox={false}
                isStartButton={false}
              />
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
