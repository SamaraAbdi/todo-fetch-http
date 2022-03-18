

import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/taskSlice";


const AddTodo = () => {

    const dispatch = useDispatch();
    // const { todoList } = useSelector((state) => state.todo);


    // useEffect(() => {
    //     dispatch(todoActions.getListData(todoList))
    // }, [todoList, dispatch])

    const [state, setState] = useState({
        content: '',
        contentError: null
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            [`${e.target.name}Error`]: null
        });
    }
    const add = () => {
        if (content === '') {
            setState({
                ...state,
                contentError: 'Пустое поле!'
            });
            return;
        }
        dispatch(todoActions.addToDo({ newContent: content }));
        setState({ ...state, content: '' });
    }
    const { content, contentError } = state;
    return <div className='form'>
        <h2>Какие планы на сегодня?</h2>
        <input type='text' value={content}
            name='content'
            onChange={handleChange}>
        </input>
        <button type='button' className='button'
            onClick={add}>Добавить
        </button>
        {contentError ?
            <div className='error'>{contentError}</div> : null}
    </div>;
};
export default AddTodo;