import { Modal } from "react-bootstrap";
import Btnn from './Button';
import classes from './Error.module.css';
function Error(props) {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>
            <Modal.Dialog className={classes.modal}>
                <Modal.Header className={classes.header}>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{props.message}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Btnn onClick={props.onConfirm}> Close </Btnn>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Error
