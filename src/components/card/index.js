import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 340,
    height: 360,
    margin: 25,
    border: '2px solid pink',
    fontFamily: 'Montserrat'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ExpansiveCard({Department, Director, biggerImage,smallText}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title = {Department}
        subheader= {Director}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {smallText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
