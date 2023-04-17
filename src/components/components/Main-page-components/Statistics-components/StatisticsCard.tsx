import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function StatisticsCard(props: {
  title: string;
  amount: number;
  color: string;
}) {
  return (
    <Card sx={{ backgroundColor: props.color }}>
      <CardContent>
        <Typography variant="subtitle1" component="div" color="text.secondary">
          {props.title}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{props.amount}</Typography>
      </CardContent>
    </Card>
  );
}
