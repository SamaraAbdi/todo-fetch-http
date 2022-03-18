
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { getListData } from './store/taskSlice';
function App() {
  const { todo } = useSelector((state) => state.todo);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListData(todo))
  }, [todo, dispatch])


  return (
    <div className="app">
      <h1 className="app-title">Мои задачи</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;


