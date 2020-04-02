import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          City Information
        </Typography>
        <br />
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Country : {props.cityInfo.location.country} ({props.cityInfo.location.region})
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Time Zone : {props.cityInfo.location.timezone_id}
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Lat/Long : {props.cityInfo.location.lat}/{props.cityInfo.location.long}
        </Typography>        
      </CardContent> 
      <br/>
      <CardContent>
      <Typography variant="h5" component="h2">
          Current Observation
        </Typography>
        <br />
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Humidity : {props.cityInfo.current_observation.atmosphere.humidity}
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
          Sunrise : {props.cityInfo.current_observation.astronomy.sunrise}          
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>          
          Sunset : {props.cityInfo.current_observation.astronomy.sunset}
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>          
          Condition : {props.cityInfo.current_observation.condition.text}
        </Typography>     
        </CardContent>
    </Card>
  );
}
