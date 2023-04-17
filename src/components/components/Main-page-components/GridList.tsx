import Grid from "@mui/material/Grid";

import TaskCard from "./Grid-List-components/TaskCard";
import { Status } from "../../../types/Task";
import { Task } from "../../../types/Task";

const GridList = (props: {
  List: Task[];
  statusChange: Status;
  isCheckBox: boolean;
  isStartButton: boolean;
}) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ display: "flex", flexDirection: "column-reverse" }}
    >
      {props.List.slice(-3).map((item) => (
        <Grid item xs={12} md={12} key={item.id} className="element">
          <TaskCard
            item={item}
            isCheckBox={props.isCheckBox}
            isStartButton={props.isStartButton}
            statusChange={props.statusChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridList;
