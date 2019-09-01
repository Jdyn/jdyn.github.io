import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Defines the `margin` style property.
   */
  margin: PropTypes.string,
  /**
   * Defines the `width` style property.
   */
  width: PropTypes.string,
  /**
   * Defines the `onClick` React property.
   */
  onClick: PropTypes.func,
  /**
   * Defines the button types
   */
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

const Button = props => (
  <button
    id={props.id}
    onClick={props.onClick}
    className={props.secondary ? props.classes.secondary : props.classes.primary}
  >
    {props.children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = {
  margin: "0",
  width: "175px"
};

const styles = theme => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    outline: "none",
    border: "none",
    fontWeight: 700,
    fontSize: 16,
    zIndex: 10,
    padding: "0 15px",
    borderRadius: 8,
    height: "50px",
    letterSpacing: ".025em",
    textTransform: "uppercase",
    transitionDuration: ".15s",
    boxShadow:
      "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 35px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)"
    },
    "&:active": {
      transform: "translateY(3px)"
    }
  },
  primary: props => ({
    extend: "button",
    margin: "10px auto",
    backgroundColor: theme.accent,
    color: "#fff",
    height: "50px",
    borderRadius: 10,
    width: props.width,
    "@media (min-width: 650px)": {
      margin: "10px auto 10px 10px"
    }
  }),
  secondary: {
    extend: "button"
  }
});

export default withStyles(styles)(Button);
