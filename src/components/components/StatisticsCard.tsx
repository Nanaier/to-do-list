import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Main-page.css";

export default function StatisticsCard(props:{title: string, amount: number, color: string}) {
  return (
    <Card sx={{ minWidth: 80, backgroundColor: props.color}}>
      <CardContent>
        <Typography variant="subtitle1" component="div" color="text.secondary">
            {props.title}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}}>
        {props.amount}
        </Typography>

      </CardContent>
    </Card>
  );
}
