import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "./GridList.module.css";
import TaskCard from "./components/TaskCard";
import { Status, Task } from "D:/test-task/task1/todo-list/src/types/Task";

const DISPLAY_TASKS_NUMBER = -3;

interface GridListProps {
  List: Task[];
  listName: string;
  statusChange: Status;
  isCheckBox: boolean;
  isStartButton: boolean;
}

const GridList: FC<GridListProps> = ({
  List,
  listName,
  statusChange,
  isCheckBox,
  isStartButton,
}) => {
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        color="text.secondary"
        className={styles["title"]}
      >
        {listName}
      </Typography>
      <Grid container spacing={1} className={styles["gridContainer"]}>
        {List.slice(DISPLAY_TASKS_NUMBER).map((item) => (
          <Grid item xs={12} md={12} key={item.id} className="element">
            <TaskCard
              item={item}
              isCheckBox={isCheckBox}
              isStartButton={isStartButton}
              statusChange={statusChange}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridList;
