import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import styles from "./Main-Page.module.css";
import { useAppSelector } from "../hooks";
import GridList from "./components/Grid-List/GridList";
import FormDialog from "./components/Form-Dialog/FormDialog";
import Statistics from "./components/Statistics/Statistics";

const MainPage = () => {
  const plannedList = useAppSelector((state) => state.tasksReducer.plannedList);
  const inProgressList = useAppSelector(
    (state) => state.tasksReducer.inProgressList
  );
  const completedList = useAppSelector(
    (state) => state.tasksReducer.completedList
  );

  return (
    <Box className={styles["MainPage-body"]}>
      <Box className={styles["main-container"]}>
        <Box className={styles["main-container-top"]}>
          <Typography variant="h4" component="div">
            To-do List
          </Typography>

          <FormDialog />
        </Box>
        <Box className={styles["main-container-bottom"]}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <GridList
                List={plannedList}
                listName="Planned"
                statusChange="in-progress"
                isCheckBox={false}
                isStartButton
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GridList
                List={inProgressList}
                listName="In progress"
                statusChange="completed"
                isStartButton={false}
                isCheckBox
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <GridList
                List={completedList}
                listName="Completed"
                statusChange="completed"
                isCheckBox={false}
                isStartButton={false}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Statistics />
    </Box>
  );
};

export default MainPage;
