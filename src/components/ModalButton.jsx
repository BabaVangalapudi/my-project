import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <div onClick={handleOpen} className="amenities">
            <img className="avaialble-icon" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjYgNjYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjYgNjYiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTYwLjYgMTkuOWMtLjctMS42LTIuNi0yLjQtNC4zLTEuNmwtMjguMSAxMi43LTUuNy05LjljLS42LTEtMS42LTEuNi0yLjgtMS42LS4zIDAtLjUgMC0uNy4xbC0zLjQtNi4xYzItMS42IDIuOC01LjIgMS04LjUtMS45LTMuMi01LjYtNS4xLTguNy0zLjRzLTMuNSA1LjktMS44IDkuMWMxLjMgMi40IDMuNyA0IDYuMSA0IC41IDAgMS4xLS4xIDEuNi0uMmwzLjQgNi4yYy0uOSAxLTEgMi41LS4zIDMuN2w3LjEgMTIuNGMuOCAxLjQgMi42IDIgNC4xIDEuM2w1LjQtMi40IDQgMTEtMi40IDQuOS03LjkgNy4xYy0xLjUgMS40LTEuNiAzLjctLjIgNS4yczMuNyAxLjYgNS4yLjJsOC40LTcuNmMuNC0uMy42LS43LjgtMS4xbDMuMy03IDYuMiAyLjJ2MTAuNWMwIDIgMS42IDMuNyAzLjcgMy43czMuNy0xLjYgMy43LTMuN3YtMTMuMWMwLTEuNS0xLTIuOS0yLjQtMy41bC02LjUtMi4zLTQuMy0xMS44IDEzLjktNi4zYzEuNi0uNyAyLjQtMi42IDEuNi00LjJ6Ii8+PHBhdGggZD0ibTI0LjQgOS45Yy40IDAgLjYtLjEuOS0uMWwtLjgtNS45LS42LjFjLTEuNi4yLTIuNyAxLjgtMi41IDMuNC4zIDEuNCAxLjUgMi41IDMgMi41eiIvPjxwYXRoIGQ9Im0zMS4zIDEwLjRjLjguMSAxLjQtLjYgMS4xLTEuM2wtMS02LjhjLS4xLS43LS44LTEuMS0xLjQtLjdsLTMuNiAxLjguOSA2LjR6Ii8+PHBhdGggZD0ibTI4LjMgMTkuOWMwIDMuMSAyLjYgNS43IDUuNyA1LjdzNS43LTIuNSA1LjctNS43YzAtMy4xLTIuNS01LjctNS43LTUuNy0zLjEgMC01LjcgMi41LTUuNyA1Ljd6Ii8+PC9nPjwvZz48L3N2Zz4=" alt="icon1" />
            <p className="booknplayside">Book N Play</p>
          </div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}