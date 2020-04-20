/**
 * @description DetailNews
 * @function DetailNews
 * @param {object} props - Any props value to this component
 * @returns {object} DetailNews
 * @author Abhinav Adepu
 */
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Slide } from "@material-ui/core";
import roots from './../rsz_q3.jpg';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailNews = props => {
  const { itemDetail, openDetails, setOpenDetails } = props;

  const handleClose = () => {
    setOpenDetails(false);
  };

  return (
    <div>
      <Dialog
        fullWidth
        fullScreen
        open={openDetails}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ background: "#b3220f", color: "#fff" }}
        >
          {itemDetail !== null && itemDetail.title}
        </DialogTitle>
        <DialogContent dividers>
            <img height="100%" width="100%"
              src={
                itemDetail.media.length !== 0 &&
                itemDetail.media[0]["media-metadata"] !== undefined
                  ? itemDetail.media[0]["media-metadata"][0].url
                  : roots
              }/>
            <div>{itemDetail !== null && itemDetail.abstract}</div>
          <div>
            <b>{`Reporter - Kalyan Vanatadapula`}</b>
          </div>
          <DialogContentText id="alert-dialog-description">
            <b>{itemDetail !== null && itemDetail.published_date}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color: '#b3220f'}} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default React.memo(DetailNews);
