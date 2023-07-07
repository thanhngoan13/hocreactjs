import React, { useState } from "react";

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowListUsers, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowListUsers);
    }

    return (
        <>
            <div>
                <span onClick={() => { handleShowHideListUser() }}>

                    {isShowListUsers === true ? " Hide list user" : " Show list user"}

                </span>
            </div>
            {isShowListUsers &&
                <div>
                    {listUsers.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>Mys name is: {user.name}</div>
                                    <div>Mys age is :{user.age}</div>

                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>

                        )

                    })}
                </div>
            }
        </>
    )

}
export default DisplayInfor;