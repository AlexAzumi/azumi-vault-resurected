import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

export interface ProjectModalProps {
  /**
   * Whether to show the modal to the user
   */
  show: boolean;

  /**
   * Function called when the modal is dissmised
   */
  handleClose(): void;
}

const ProjectModal: FC<ProjectModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
