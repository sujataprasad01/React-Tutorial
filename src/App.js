
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
import Component1 from './components/Component1.js';
import Comp1 from './components/Comp1.js';
function App() {
  return (
       <div>
       {/* <Dashboard name="sujata" age={20} /> */}
       <Profile></Profile>
       <p>Football ------------------------</p>
       <Football/>
       <p>ChangeText ------------------------</p>
       <ChangeText />
       <p>AddItem --------------------------</p>
       <AddItem></AddItem>
       <p>ToggleButton ----------------------</p>
       <ToggleButton></ToggleButton>
       <p>Form -----------------------------</p>
       <Form></Form>
       <p>keyCounter -----------------------</p>
       <KeyCounter></KeyCounter>
       <p>Table ----------------------------</p>
       <Table></Table>
       <p>Component --------------------------</p>
       <Component1></Component1>
       <p>Using useContext --------------------------</p>
       <Comp1></Comp1>
       </div>
      );
    }
    
export default App;
