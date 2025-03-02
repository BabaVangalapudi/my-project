import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  gap: "10px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "250px",
  bgcolor: "background.paper",
  border: "1px solid none",
  boxShadow: 24,
  p: 3,
};
const modalData = [
  {
    id: 1,
    head: "Book N Play",
    description: "INR 300.00/hour",
  },
  {
    id: 2,
    head: "Membership",
    description: "INR 1000.00/Month Per single person",
  },
  {
    id: 3,
    head: "Coaching",
    description: "INR 2000.00/Month",
  },
];

export default function TransitionsModal(props) {
  const { userData } = props;
  const { id, image, name } = userData;
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);
  const handleOpen = () => {
    setSelectedData(modalData.find(item => item.id === userData.id));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className="available-modal">
        <img className="avaialble-icon" src={image} alt="icon1" />
        <p className="booknplayside">{name}</p>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {selectedData && (
            <Box sx={style} key={selectedData.id}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {selectedData.head}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {selectedData.description}
              </Typography>
              <button><a href="https://wa.me/message/63CIAW324QBMK1" style={{ padding: "10px" }}>Book Now</a></button>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
