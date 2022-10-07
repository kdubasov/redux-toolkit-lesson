import React from 'react';
import {Badge, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getJSON} from "../features/jsonSlice";

const GetJSON = () => {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.json.json)
    console.log(posts)

    return (
        <div className={'GetJSON w-100 p-3 border mt-3'}>
            <h4><Badge bg={"secondary"}>Получаем JSON</Badge></h4>

            <Button onClick={() => dispatch(getJSON())}>Получить посты</Button>

            <ListGroup className={'mt-2'}>
                {
                    posts?.map(post => (
                        <ListGroupItem key={post.id}>
                            <h5>{post.title}</h5>
                            <p className={'m-0 small'}>{post.body}</p>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default GetJSON;
