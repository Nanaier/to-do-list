import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/Main-page.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTask } from "../../redux/reducers/task";
import { Status, Task } from "../../types/Task";
import ControlledCheckbox from "./CheckBox";
import StartButton from "./StartButton";

const AddCheckBox = (item: Task, isCheckBox: boolean, statusChange: Status) =>{
    if (isCheckBox){
        return (<ControlledCheckbox item={item}  statusChange={statusChange}/>);
    }
}

const AddStartButton = (item: Task, isStartButton: boolean, statusChange: Status) =>{
    if (isStartButton){
        return (<StartButton item={item}  statusChange={statusChange}/>);
    }
}

export default function TaskCard(props: {
  item: Task;
  isCheckBox: boolean;
  isStartButton: boolean;
  statusChange: Status;
}) {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ minWidth: 80 }} key={props.item.id}>
      <CardContent>
        <Box
          sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        >
          <Button
            aria-label="delete"
            onClick={() => {
              dispatch(deleteTask(props.item.id));
            }}
            sx={{ alignSelf: "self-end" }}
          >
            <ClearIcon fontSize="small" />
          </Button>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}} >
            {AddCheckBox(props.item, props.isCheckBox, props.statusChange)}
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {props.item.status === "completed" ? <s>{props.item.title}</s> : props.item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color="text.secondary"
            >
              {props.item.description}
            </Typography>
            {AddStartButton(props.item, props.isStartButton, props.statusChange)}
          </Box>
        </Box>
            
      </CardContent>
    </Card>
  );
}
