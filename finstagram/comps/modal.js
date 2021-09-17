import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const ModalContainer = styled.div`
    position: 'absolute';
    top: 50%,
    left: 50%,
    transform: translate(-50%, -50%),
    width: 400;
    
    border: '2px solid #000';
    
    

  `;

const Popup = styled.div`
  background: aliceblue;
  min-width: 300px;
  max-width: 550px;
  margin: auto;
  margin-top: 25vh;
  outline: none;
  padding-left: 2em;
  padding-right: 2em;
  position: relative;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const ModalHeader = styled.p`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  color: #2e8dcc;
  margin: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  fontsize: 20px;
`;

export default function PhotoModal({
  open = false,
  description,
  image,
  setOpen,
  name,
}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.3)" } }}
        >
          <Popup>
            <Flex>
              <ModalHeader>{name}</ModalHeader>
            </Flex>
            <div className="modal-img-container">
              <img src={image} />
            </div>
            <CloseModalBtn onClick={handleClose}>X</CloseModalBtn>
            <p>{description}</p>
            <Flex justify="flex-end" align="center"></Flex>
          </Popup>
        </Modal>
      </div>
    </div>
  );
}
