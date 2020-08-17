import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function MediaCard(props) {
  let media = (
    <img className="cardimg" src={props.proj.imgsrc} alt={props.proj.name} />
  );
  if (props.proj.video !== undefined) {
    media = (
      <iframe
        title="flexMirror"
        width="100%"
        height="250px"
        src={props.proj.video}
      ></iframe>
    );
  }
  let nationals;
  if (props.proj.name === "Badminton Tryouts") {
    nationals = (
      <p className="pflex">
        Made by National Badminton Player{" "}
        <span role="img" aria-label=":sunglasses:">
          &#128526;
        </span>
      </p>
    );
  }
  return (
    <Card>
      <CardActionArea>
        {media}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.proj.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.proj.content}
            {nationals}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
