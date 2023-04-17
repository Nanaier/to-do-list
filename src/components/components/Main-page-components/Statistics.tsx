import Grid from "@mui/material/Grid";

import "../../../styles/Statistics.css"
import CircularProgressWithLabel from "./Statistics-components/CircularProgress";
import StatisticsCard from "./Statistics-components/StatisticsCard";

const calculatePercentage = (
  completed_amount: number,
  total_amount: number
) => {
  if (total_amount === 0 || completed_amount === 0) return 0;
  else return (completed_amount / total_amount) * 100;
};

const Statistics = (props: {
  planned_amount: number;
  in_progress_amount: number;
  completed_amount: number;
  total_amount: number;
}) => {
  return (
    <div className="side-container">
      <div className="progress-bar">
        <CircularProgressWithLabel
          thickness={2.7}
          size={250}
          value={calculatePercentage(
            props.completed_amount,
            props.total_amount
          )}
        />
      </div>
      <div className="task-statistics">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StatisticsCard
              title={"Planned"}
              amount={props.planned_amount}
              color="#ECF3FF"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatisticsCard
              title={"Total"}
              amount={props.total_amount}
              color="#FFEFE2"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatisticsCard
              title={"In progress"}
              amount={props.in_progress_amount}
              color="#FEEEFF"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StatisticsCard
              title={"Completed"}
              amount={props.completed_amount}
              color="#F1ECFF"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Statistics;
