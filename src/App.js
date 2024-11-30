
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskInput from './Componets/TaskInput';
import TaskList from './Componets/TaskList';



function App() {
  return (
    
    <div className='bg-dark  vh-100 d-flex flex-column justify-content-center  '>
      <div><h1 className='text-info text-center '>Task Tracker App</h1></div>
    <div className='   d-flex justify-content-center align-items-center p-2 ' >
    
      <div className=' bg-info  border rounded ' style={{width:'40%',padding:'40px'}}>
   
      <div>
    <TaskInput/>
    <TaskList/>
    </div>
    </div>
    </div>
    </div>
    
  );
}

export default App;
