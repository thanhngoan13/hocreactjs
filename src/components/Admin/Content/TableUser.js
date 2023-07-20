
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";


const TableUser = (props) => {

    const { listUsers } = props
    return (
        <div>
            <table className="table table-hover table-bordered table-listUser">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        {/* <button className="btn btn-warning">View</button>
                                        <button className="btn btn-info mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >Update</button>
                                        <button className="btn btn-danger">Delete</button> */}
                                        <CgDetailsMore className="btn-detail" />
                                        < TiEdit className="btn-edit" onClick={() => props.handleClickBtnUpdate(item)} />
                                        <RiDeleteBack2Fill className="btn-delete"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        />
                                    </td>

                                </tr>
                            )

                        })}
                    {
                        listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>
                                Not found data
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )

}
export default TableUser;