import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     //JSX cho phep viet code javacript ben code html
//     state = {
//         name: 'Ngoan',
//         address: 'kien giang',
//         age: 25
//     };

//     handleClick(event) {
//         this.setState({
//             name: 'Thanh Ngoan',
//             age: 30
//         })
//     }
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })



//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {

//         event.preventDefault()
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + ' random',

//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My Name is {this.state.name} and I' am from {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <label>Your age:</label>
//                     <input
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//                 <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
//             </div>
//         );

//     }
// }

const AddUserInfo = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState("VNPT");
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {

        event.preventDefault()

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + ' random',

            name: name,
            age: age
        });
    }

    return (
        <div>
            My Name is {name} and I' am from {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <label>Your age:</label>
                <input
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>

        </div>
    );
}
export default AddUserInfo;
