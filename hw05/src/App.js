import "./App.css";
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter className="Exercise_1" />
        <TodoList className="Exercise_1" />
      </header>
    </div>
  );
}

export default App;
