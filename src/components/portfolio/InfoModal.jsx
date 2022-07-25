import Modal from "react-bootstrap/Modal";
import { FaHandPointRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../portfolio/InfoModal.css";

export const InfoModal = ({
  handleClose,
  show,
  name,
  link,
  code,
  description,
  functionality,
  technologies,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <FaHandPointRight /> <span className="keyPoint">Description:</span>{" "}
            <span>{description}</span>
          </p>
          <p>
            <FaCheck /> <span className="keyPoint">Technologies:</span> <span>{technologies}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button>
            <a href={link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </button>
          <button>
            <a href={code} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
