import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { makeStyles } from "@material-ui/core";
 
const useStyles = makeStyles((theme) => ({
  text: {
    color: "#F9D25B",
    fontSize: "36pt",
    display: "inline-block"
  }
}))
const TEXTS = [
  "Doctor",
  "Driver",
  "Artist",
  "Engineer",
  "Farmer",
  "Judge",
  "Nurse",
  "Police",
  "Scientist",
  "Teacher"
];


 
const Text = () => {
  const classes = useStyles()
  const [index, setIndex] = React.useState(0);
 
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
  });
 
  return (
    <h2 className={classes.text}>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.default }
      />
    </h2>
  );
};
export default Text