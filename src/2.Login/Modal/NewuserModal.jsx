import React from 'react'
import NewUser from '../NewUser'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function ({modal,toggle}) {
  return (
    <>
     <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} className="text-center">Login </ModalHeader>
        <ModalBody>
          <NewUser />
        </ModalBody>
      </Modal>
    </>
  )
}
