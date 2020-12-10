import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { actChangeCinemaList } from "../../containers/HomeTemplate/HomePage/modules/ListShowTime/action";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "705px",
    minWidth: "92px",
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
    props.changeListCinema(index);
  };

  const renderLogoCinema = () => {
    const { listLogo } = props;
    if (listLogo && listLogo.length > 0) {
      return listLogo.map((logo, index) => {
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
              <Avatar alt={logo} src={logo} className={classes.avatar} />
              {props.detailPage ? (
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        style={{ marginLeft: "10px" }}
                      >
                        BHD
                      </Typography>
                    </React.Fragment>
                  }
                />
              ) : (
                <React.Fragment></React.Fragment>
              )}
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
    listLogo: state.listShowTimeReducer.listLogo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeListCinema: (cinemaIndex) => {
      dispatch(actChangeCinemaList(cinemaIndex));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoCinema);
