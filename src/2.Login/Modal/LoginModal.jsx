import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loginn from "../Login";

function LoginModal({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} className="text-center">Login </ModalHeader>
        <ModalBody>
          <Loginn />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LoginModal;
