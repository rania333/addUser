import { Form } from 'react-bootstrap';
import Card from '../UI/Card';
import Buttonn from '../UI/Button';
import { useState } from 'react';
import Errorr from '../UI/Error';
function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [Error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if(enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }
    const changeUserNameHandler = (e) => {
        setEnteredUserName(e.target.value);
    }
    const changeAgeHandler = (e) => {
        setEnteredAge(e.target.value);
    }
    const errorHandler = (e) => {
        e.preventDefault();
        setError();
    }
    return (
        <div>
            {Error && (
                <Errorr
                title={Error.title}
                message={Error.message}
                onConfirm={errorHandler}
                />
            )}
            <Card>   
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={changeUserNameHandler}
                value={enteredUserName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" onChange={changeAgeHandler} 
                value={enteredAge}/>
            </Form.Group>
            <Buttonn className='button'>Add User</Buttonn>
        </Form>
        </Card>
    </div>
    );
}

export default AddUser