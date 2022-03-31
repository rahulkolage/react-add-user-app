import React, {useState, useRef} from "react";

import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css';


const AddUser = (props) => {
    
    // using useRef
    const nameInputRef =  useRef();
    const ageInputRef =  useRef();

    // array destrusturing,
    // useState returns array with 2 elements

    // commented because we are using Refs
    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        // console ref value
         const enteredName = nameInputRef.current.value;
         const enteredUserAge = ageInputRef.current.value;

        // we use Refs, so state values not required
        // if(enteredUserName.trim().length === 0 && enteredAge.trim().length === 0) {

        if(enteredName.trim().length === 0 && enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        // if(+enteredAge < 1) {
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }


        props.onAddUser(enteredName, enteredUserAge);
        // resetting inputs
        // using below reset input but not get reflected on view
        // to do that in input set value attribute
        // setEnteredUserName('');
        // setEnteredAge('');

        // resetting inputs
        // manipulatiing DOM without React, this not best approach 
        // but we are just resetting inputs, rerely do that.( not adding element to DOM, or adding new class )
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    // const userNameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    }

    return (

        // <div>
        <Wrapper>
            {error &&
                <ErrorModal title={error.title}
                message={error.message} 
                onConfirm={errorHandler}/>
            }

            {/* Here className property on Card component is custom property,
            not provided by React as it provides for default html elements */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" 
                    type="text" 
                    // value={enteredUserName} 
                    // onChange={userNameChangeHandler}
                    ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" 
                    type="number" 
                    // value={enteredAge} 
                    // onChange={ageChangeHandler}
                    ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
        // </div>
    );
}
export default AddUser;