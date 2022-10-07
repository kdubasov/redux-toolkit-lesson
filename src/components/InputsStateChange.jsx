import React from 'react';
import {Badge, Form, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setName, setSurname} from "../features/userSlice";

const InputsStateChange = () => {

    //берет action
    const dispatch = useDispatch();

    //берет значения из store
    const userData = useSelector(state => state.user);

    return (
        <div className={'InputsStateChange p-3 border'}>
            <h4><Badge bg={"secondary"}>Redux Toolkit State Change</Badge></h4>

            <div className="box w-100">
                <Form className={'mb-3 w-50'}>
                    <FormControl
                        placeholder={'Введите имя'}
                        className={'mb-1'}
                        onChange={e => dispatch(setName(e.target.value))}
                    />

                    <FormControl
                        placeholder={'Введите фамилию'}
                        onChange={e => dispatch(setSurname(e.target.value))}
                    />
                </Form>

                <ListGroup horizontal className={'mb-1'}>
                    <ListGroupItem>Имя:</ListGroupItem>
                    <ListGroupItem>{userData.name || 'Введите ваше имя и оно отобразится здесь'}</ListGroupItem>
                </ListGroup>
                <ListGroup horizontal>
                    <ListGroupItem>Фамилия:</ListGroupItem>
                    <ListGroupItem>{userData.surname || 'Введите вашу фамилию и она отобразится здесь'}</ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
};

export default InputsStateChange;
