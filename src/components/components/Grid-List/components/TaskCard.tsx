import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./TaskCard.module.css";
import { useAppDispatch } from "src/hooks";
import { deleteTask } from "src/redux/reducers/task";
import { Status, Task } from "src/types/Task";
import ControlledCheckbox from "./components/CheckBox";
import AddStartButton from "./components/StartButton";

const TaskCard = (props: {
  item: Task;
  isCheckBox: boolean;
  isStartButton: boolean;
  statusChange: Status;
}) => {
  const dispatch = useAppDispatch();
  return (
    <Card className={styles["card"]} key={props.item.id}>
      <CardContent>
        <Box className={styles["buttonContainer"]}>
          <Button
            aria-label="delete"
            onClick={() => {
              dispatch(deleteTask(props.item.id));
            }}
            className={styles["button"]}
          >
            <ClearIcon fontSize="small" />
          </Button>
        </Box>
        <Box className={styles["taskContent"]}>
          {props.isCheckBox && (
            <ControlledCheckbox
              item={props.item}
              statusChange={props.statusChange}
            />
          )}
          <Box className={styles["taskDetails"]}>
            <Typography
              className={styles["title"]}
              sx={{
                fontWeight: "bold",
                textDecoration:
                  props.item.status === "completed" ? "line-through" : "none",
              }}
            >
              {props.item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color="text.secondary"
              className={styles["description"]}
            >
              {props.item.description}
            </Typography>
            {AddStartButton(
              props.item,
              props.isStartButton,
              props.statusChange
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
