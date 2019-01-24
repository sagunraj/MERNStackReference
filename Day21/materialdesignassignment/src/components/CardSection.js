import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NatureIcon from "@material-ui/icons/Nature";
import LocalFlorist from "@material-ui/icons/LocalFlorist";
import FastFood from '@material-ui/icons/Fastfood';

const styles = {
  card: {
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
};


class CardSection extends React.Component {
    chooseIcon(){
        if(this.props.icon == "FastFood"){
            return <FastFood/>
        }
        else if(this.props.icon == "NatureIcon"){
            return <NatureIcon/>
        }
        else if(this.props.icon == "LocalFlorist"){
            return <LocalFlorist/>
        }
    }
    render(){
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {this.chooseIcon()}<br/>
         {this.props.title}
        </Typography>
        <Typography component="p">
         {this.props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
}


export default withStyles(styles)(CardSection);

