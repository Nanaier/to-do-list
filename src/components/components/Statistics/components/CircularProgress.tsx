import { FC } from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "./CircularProgress.module.css";

interface ComponentProps {
  progressValue: number;
}

type MergedProps = CircularProgressProps & ComponentProps;

const CircularProgressWithLabel: FC<MergedProps> = ({
  progressValue,
  ...props
}) => {
  return (
    <Box className={styles["circularProgressWrapper"]}>
      <CircularProgress
        className="circularProgress"
        variant="determinate"
        {...props}
        value={progressValue}
      />
      <Box className={styles["labelWrapper"]}>
        <Typography
          variant="h6"
          component="div"
          className={styles["label"]}
        >{`${Math.round(progressValue)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
