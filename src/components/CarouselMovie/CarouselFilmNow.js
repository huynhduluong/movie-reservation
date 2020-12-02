import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { WithCarouselStyle } from "./WithCarouselStyles";
import { Box } from "@material-ui/core";

export default function CarouselFilmNow(props) {
  const classes = WithCarouselStyle();
  const { item } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="imgBx">
        <img src={item.hinhAnh} alt={item.biDanh} />
        <div className="overlayFilm"></div>
        <div className="playButton" onClick={handleClickOpen}>
          <PlayArrowIcon className="playIcon" />
        </div>
        <div className="reviewScore">{item.danhGia}</div>
      </div>
      <div className="detail">
        <div className="filmTitle">
          <h3>
            <span className="ageLimit">C18</span>
            {item.tenPhim}
          </h3>
          <div className="filmDuration">100 phút</div>
          <div className="buyTicket">Mua vé</div>
        </div>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent className={classes.dialogContent}>
          <iframe
            width={"100%"}
            height={"100%"}
            src={item.trailer}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
