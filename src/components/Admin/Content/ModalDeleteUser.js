import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {

    const { show, setShow, dataDelete } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //console.log("data delete", props.dataDelete)

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUser(dataDelete.id);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            props.setcurrentPage(1);
            await props.fetchListUsersWithPaginate(1);

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }

    }

    return (
        <>


            <Modal show={show}
                backdrop="static"
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user. <b>Email = {dataDelete && dataDelete.email ? dataDelete.email : ""}</b> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;