import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Ngoan", age: "16" },
//             { id: 2, name: "Ngoan 2", age: "69" },
//             { id: 3, name: "Ngoan 3", age: "35" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userID) => {
//         let listUserClone = [...this.state.listUsers];
//         listUserClone = listUserClone.filter(item => item.id !== userID);
//         this.setState({
//             listUsers: listUserClone
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfo
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <DisplayInfor listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser} />
//             </div>
//         );
//     }
// }

const MyComponent = () => {

    const [listUsers, setlistUsers] = useState([
        { id: 1, name: "Ngoan", age: "16" },
        { id: 2, name: "Ngoan 2", age: "69" },
        { id: 3, name: "Ngoan 3", age: "35" },
    ])

    const handleAddNewUser = (userObj) => {
        setlistUsers([userObj, ...listUsers])


    }

    const handleDeleteUser = (userID) => {
        let listUserClone = [...listUsers];
        listUserClone = listUserClone.filter(item => item.id !== userID);
        setlistUsers(listUserClone);

    }
    return (
        <div>
            <AddUserInfo
                handleAddNewUser={handleAddNewUser}
            />
            <DisplayInfor listUsers={listUsers}
                handleDeleteUser={handleDeleteUser} />
        </div>
    );
}
export default MyComponent;