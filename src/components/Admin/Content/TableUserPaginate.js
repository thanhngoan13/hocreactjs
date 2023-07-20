
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {

    const { listUsers, pageCount } = props;

    const handlePageClick = (event) => {

        console.log(`User requested page number ${event.selected}`);
        props.setcurrentPage(+event.selected + 1);
        props.fetchListUsersWithPaginate(+event.selected + 1);

    };

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

                                        <BiMessageAltDetail className="btn-detail" onClick={() => props.handleClickBtnDetail(item)} />
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
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />

        </div>
    )

}
export default TableUserPaginate;