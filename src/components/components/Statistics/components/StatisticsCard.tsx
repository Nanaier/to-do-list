import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import styles from "./StatisticsCard.module.css";

const StatisticsCard = (props: {
  title: string;
  amount: number;
  color: string;
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Card className={styles["card"]} style={{ backgroundColor: props.color }}>
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            color="text.secondary"
          >
            {props.title}
          </Typography>
          <Typography className={styles["amount"]}>{props.amount}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default StatisticsCard;
