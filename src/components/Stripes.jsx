import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Social from "./Social";
import useWindowDimensions from "../lib/useWindow";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Stripes = props => {
  const { classes } = props;

  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.stripes}>
      <span />
      <span />
      <span />
      <span>{width > 650 && <Social />}</span>
    </div>
  );
};

const styles = theme => ({
  stripes: {
    display: "grid",
    position: "absolute",
    grid: "repeat(4, 180px)/repeat(7, 1fr)",
    top: 0,
    zIndex: 5,
    width: "100%",
    overflow: "hidden",
    transformOrigin: 0,
    background: theme.stripeBackground,
    transform: "skewY(-8deg)",
    "& span:first-child": {
      gridColumn: "span 1",
      background: theme.stripeTopLeft
      //   boxShadow: "0 5px 20px 0 rgb(0,0,0,.3)"
    },
    "& span:nth-child(2)": {
      gridColumn: "span 6",
      background: theme.stripeTopRight
      //   boxShadow: "0 5px 20px 0 rgb(0,0,0,.3)"
    },
    "& span:nth-child(3)": {
      gridColumn: "7",
      gridRow: "3",
      borderRadius: "16px 0 0 16px",
      background: theme.stripeRight
      //   boxShadow: "0 5px 20px 0 rgb(0,0,0,.3)"
    },
    "& span:nth-child(4)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      gridColumn: "span 3",
      gridRow: 4,
      background: theme.stripeBottom,
      borderRadius: "0 16px 0 0"
      //   boxShadow: "0 5px 20px 0 rgb(0,0,0,.3)"
    }
  }
});

Stripes.propTypes = propTypes;

export default withStyles(styles)(Stripes);