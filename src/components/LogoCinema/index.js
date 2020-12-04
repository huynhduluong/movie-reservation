import { Avatar, Divider, List, ListItem, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "705px",
    width: "92px",
    border: "1px solid #ebebec",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    padding: 0,
    background: theme.palette.background.paper,
  },
  listItem: {
    padding: "20px",
    transition: "all 0.2s",
    cursor: "pointer",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  listItemActive: {
    background: "transparent!important",
    opacity: 1,
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  divider: {
    backgroundColor: "#ebebec",
    opacity: 0.5,
  },
}));

function LogoCinema(props) {
  const classes = useStyle();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const renderLogoCinema = () => {
    const { listCinema } = props;
    if (listCinema && listCinema.length > 0) {
      return listCinema.map((logo, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem
              className={
                selectedIndex === index
                  ? `${classes.listItemActive} ${classes.listItem}`
                  : classes.listItem
              }
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <Avatar
                alt={logo.tenHeThongRap}
                src={logo.logo}
                className={classes.avatar}
              />
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
          </React.Fragment>
        );
      });
    }
  };

  return <List className={classes.root}>{renderLogoCinema()}</List>;
}

const mapStateToProps = (state) => {
  return {
    listCinema: state.listCinemaReducer.listCinema,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoCinema);
