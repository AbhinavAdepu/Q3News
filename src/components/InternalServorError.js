import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  noResult: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%"
  },
  searchIcon: {
    color: "#c4c4c4",
    width: "70px",
    height: "70px"
  }
});

/**
 * @description Utility compponent to shows this screen with message
 * if no results found or if server is down
 * @function EkNoResults
 * @param {string} title - Any title to this component
 * @param {string} msg - Any message to this component
 * @param {object} DynamicIcon - Accepts any for this component, if no icon is passed defaults to ErrorIcon
 * @returns {object} Component with icons and message in centre of the screen
 * @author Abhinav Adepu
 */
const NoResults = ({
  title = "Internal server error",
  msg = "Please try later."
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.noResult}
    >
      <svg style={{ width: "100px", padding: "100px" }} viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Group-2" transform="translate(2.000000, 2.000000)">
            <circle
              id="Oval-2"
              stroke="rgba(252, 191, 191, .5)"
              stroke-width="4"
              cx="41.5"
              cy="41.5"
              r="41.5"
            ></circle>
            <circle
              class="ui-error-circle"
              stroke="#F74444"
              stroke-width="4"
              cx="41.5"
              cy="41.5"
              r="41.5"
            ></circle>
            <path
              class="ui-error-line1"
              d="M22.244224,22 L60.4279902,60.1837662"
              id="Line"
              stroke="#F74444"
              stroke-width="3"
              stroke-linecap="square"
            ></path>
            <path
              class="ui-error-line2"
              d="M60.755776,21 L23.244224,59.8443492"
              id="Line"
              stroke="#F74444"
              stroke-width="3"
              stroke-linecap="square"
            ></path>
          </g>
        </g>
      </svg>
      <Typography id="title" variant="h6">
        {title}
      </Typography>
      <Typography id="msg" variant="body2">
        {msg}
      </Typography>
    </Box>
  );
};

export default NoResults;
