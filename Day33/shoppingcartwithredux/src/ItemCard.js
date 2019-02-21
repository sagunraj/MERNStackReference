import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addItem} from './Actions';
import {connect} from 'react-redux';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};



function ItemCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
    {/* {console.log(props)} */}
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.item.name}
          className={classes.media}
          height="140"
          image={`./img/${props.item.image}`}
          title={props.item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
          <Typography component="p">
            Rs. {props.item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick = {()=>props.addItem(props.item)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => (
  {
    addItem:(item)=>dispatch(addItem(item))
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ItemCard));
// export default withStyles(styles)(ItemCard);