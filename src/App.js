
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
function App() {

  return (
    <div className="app">
      <h1 className="app-title">Мои задачи</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;


