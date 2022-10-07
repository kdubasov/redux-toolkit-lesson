import React, {useState} from 'react';
import {Badge, Button, Form, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, toggleComplited} from "../features/todoSlice";

const ToDo = () => {

    const dispatch = useDispatch();

    //data from state about todo items
    const dataToDo = useSelector(state => state.todos.todos);

    //form value
    const [todoText,setTodoText] = useState('')

    //get list item of todo
    const ToDoItem = (text,id) =>{

        const nowItemComplited = dataToDo.find(todoItem => todoItem.id === id).completed;
        // console.log(nowItemComplited)

        return (
            <ListGroupItem key={id} className={'w-50 p-2 mt-1 d-flex justify-content-between align-items-center'}>
                <p className={'m-0'}>{text}</p>
                {nowItemComplited && <Badge bg={"success"}>Выполнено</Badge> }
                <div>
                    {
                        !nowItemComplited &&
                        <Button
                            variant={'outline-success'}
                            className={'mx-1'}
                            size={"sm"}
                            onClick={() => dispatch(toggleComplited(id))}
                        >
                            Выполнить
                        </Button>
                    }
                    <Button variant={'outline-danger'} size={"sm"} onClick={() => dispatch(deleteTodo(id))}>
                        Удалить
                    </Button>
                </div>
            </ListGroupItem>
        )
    }

    //add todo
    const handleAddToDo = e =>{
        e.preventDefault();
        const todoItemData = {
            id: new Date().getMilliseconds() + new Date().getSeconds(),
            text: todoText,
            completed: false,
        }

        dispatch(addTodo(todoItemData))
        setTodoText('')
    }

    return (
        <div className={'ToDo w-100 p-3 border mt-3'}>
            <h4><Badge bg={"secondary"}>ToDo приложение</Badge></h4>
            <Form onSubmit={handleAddToDo} className={'d-flex align-items-center'}>
                <FormControl
                    required={true}
                    placeholder={'Введите задачу'}
                    className={'w-50'}
                    value={todoText}
                    onChange={e => setTodoText(e.target.value)}
                />

                <Button variant={'outline-success'} className={'mx-2'} type={"submit"}>
                    Добавить задачу
                </Button>
            </Form>

            <ListGroup>
                {
                    dataToDo.length?
                        dataToDo.map(todo => (
                            ToDoItem(todo.text,todo.id)
                        )):
                        <Badge className={'mt-2'}>Пока что задач нет</Badge>
                }
            </ListGroup>
        </div>
    );
};

export default ToDo;
