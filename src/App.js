
import './App.css';
import AddItem from './components/AddItem';
import ChangeText from './components/ChangeText';
import Football from './components/Football';
import Profile from './components/Profile';
import ToggleButton from './components/Toggle.js';
// import Dashboard from './components/Dashboard';
import Form from './components/Form.js';
import KeyCounter from './components/Key_Event.js';
import Table from './components/Table.js';
function App() {
  return (
       <div>
       {/* <Dashboard name="sujata" age={20} /> */}
       <Profile></Profile>
       <Football/>
       <ChangeText />
       <AddItem></AddItem>
       <ToggleButton></ToggleButton>
       <Form></Form>
       <KeyCounter></KeyCounter>
       <Table></Table>
       </div>
      );
    }
    
export default App;
