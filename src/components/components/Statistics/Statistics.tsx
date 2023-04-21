import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

import styles from "./Statistics.module.css";
import CircularProgressWithLabel from "./components/CircularProgress";
import StatisticsCard from "./components/StatisticsCard";
import calculatePercentage from "D:/test-task/task1/todo-list/src/utils/statistics";
import { useAppSelector } from "D:/test-task/task1/todo-list/src/hooks";

const Statistics = () => {
  const plannedList = useAppSelector((state) => state.tasksReducer.plannedList);
  const inProgressList = useAppSelector(
    (state) => state.tasksReducer.inProgressList
  );
  const completedList = useAppSelector(
    (state) => state.tasksReducer.completedList
  );
  const total_amount =
    plannedList.length + inProgressList.length + completedList.length;
  return (
    <Box className={styles["side-container"]}>
      <Box className="progress-bar">
        <CircularProgressWithLabel
          thickness={2.7}
          size={250}
          progressValue={calculatePercentage(
            completedList.length,
            total_amount
          )}
        />
      </Box>
      <Box className={styles["task-statistics"]}>
        <Grid container spacing={2}>
          <StatisticsCard
            title="Planned"
            amount={plannedList.length}
            color="#ECF3FF"
          />
          <StatisticsCard title="Total" amount={total_amount} color="#FFEFE2" />
          <StatisticsCard
            title="In progress"
            amount={inProgressList.length}
            color="#FEEEFF"
          />
          <StatisticsCard
            title="Completed"
            amount={completedList.length}
            color="#F1ECFF"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Statistics;
