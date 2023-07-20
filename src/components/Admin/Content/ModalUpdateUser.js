import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";

import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiService';
import { useEffect } from 'react';
import _ from 'lodash';


const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;
    // const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setUsername("");
        setPassword("");
        setRole("USER");
        setImage("");
        setPrivewImage("");
        props.setDataUpdate();
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [priveImage, setPrivewImage] = useState("");

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPrivewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
        else {
            //setPrivewImage("");
        }

    }


    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            console.log(dataUpdate);
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setPassword(dataUpdate.password);
            setRole(dataUpdate.role);
            setImage("");
            if (dataUpdate.image) {
                setPrivewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }


        }

    }, [dataUpdate])



    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitUpdateUser = async () => {

        if (!username) {
            toast.error("Invalid username")
            return;

        }

        let data = await putUpdateUser(dataUpdate.id, username, role, image);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsersWithPaginate(props.currentPage);

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);

        }

    }



    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal show={show}
                backdrop="static"
                size="xl"
                onHide={handleClose}
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" disabled className="form-control" value={email}
                                onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" disabled value={password}
                                onChange={(event) => { setPassword(event.target.value) }} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username}
                                onChange={(event) => { setUsername(event.target.value) }}
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Role</label>
                            <select id="inputState" className="form-select" onChange={(event) => { setRole(event.target.value) }}>
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12">

                            <label className="form-label label-upload" htmlFor='labelUpload' ><FcPlus />Upload File Image </label>
                            <input type='file' hidden id="labelUpload"
                                onChange={(event) => handleUploadImage(event)}
                            />

                        </div>
                        <div className="col-md-12 img-preview">
                            {priveImage ?
                                <img src={priveImage} />
                                :
                                <span>Priview Image</span>
                            }



                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;