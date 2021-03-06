

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendListData, todoActions } from "../store/taskSlice";




const ListTodo = () => {
    const { todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [state, setState] = useState({
        id: Date.now(), content: '', contentError: null
    });

    useEffect(() => {
        dispatch(sendListData(todoList))
    }, [todoList, dispatch])


    const onEditToggle = (id, content) => {
        setEditing(true);
        setState({ ...state, id, content });
    }

    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value,
            [`${e.target.name}Error`]: null
        });
    }
    const { content, contentError, id } = state;
    const edit = () => {
        if (content === '') {
            setState({ ...state, contentError: 'Пустое поле!' });
            return;
        }
        dispatch((todoActions.editTodo({ content, id })));
        setEditing(false);
    }
    return <div>
        {isEditing ? <div className='form'><h2>изменить задачу</h2>
            <input type='text' value={content} name='content' onChange={handleChange}></input>
            <button type='button' className='button'
                onClick={edit}>Сохранить
            </button>
            {contentError ?
                <div className='error'>{contentError}</div> : null
            }
        </div> :
            <ol className='todos'>
                {
                    todoList.map((el) => {
                        return <div >
                            <li className='list' key={el.id}
                            // id={el.id}
                            >
                                <div className="box"><p className='content'>{el.content}</p></div>
                                <div className='box-btn'>
                                    <button className="button"
                                        onClick={() => dispatch(todoActions.deleteToDo({ id: el.id }))}
                                    >X</button>
                                    <button className="button"
                                        onClick={() => onEditToggle(el.id, el.content)}
                                    >+</button>
                                </div>
                            </li>
                        </div>
                    })
                }
            </ol>
        }
    </div>;
};
export default ListTodo;