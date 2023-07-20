import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import { useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUsers, getUserWithPaginate } from '../../../services/apiService';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import ModalDetailUser from "./ModalDetailUser";


const ManageUser = (props) => {
    const LIMIT_USER = 3;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDetailUser, setShowModalDetailUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);

    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDetail, setDataDetail] = useState({});
    const [listUsers, setListUser] = useState([]);
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        fetchListUsersWithPaginate(1);

    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers();

        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);

        if (res.EC === 0) {
            //console.log("get phan trang ", res.DT)
            setListUser(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        // alert("show update");
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const handleClickBtnDetail = (user) => {
        // alert("show update");
        setShowModalDetailUser(true);
        setDataDetail(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

    const resetUpdateDate = () => {
        setDataUpdate({});
    }

    const resetDetailDate = () => {
        setDataDetail({});
    }

    return (
        <div className='manage-user-container'>
            <div className='title'>
                Manage User
            </div>
            <div className='users-content'>
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus />Add new user</button>


                </div>
                <div className="table-users-container">

                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnDelete={handleClickBtnDelete}
                        handleClickBtnDetail={handleClickBtnDetail}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setcurrentPage={setcurrentPage}
                    />


                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setcurrentPage={setcurrentPage}

                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setcurrentPage={setcurrentPage}
                />
                <ModalDetailUser
                    show={showModalDetailUser}
                    setShow={setShowModalDetailUser}
                    dataDetail={dataDetail}
                    setDataDetail={setDataDetail}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setcurrentPage={setcurrentPage}
                />

                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setcurrentPage={setcurrentPage}
                />

            </div>

        </div>
    )
}

export default ManageUser;