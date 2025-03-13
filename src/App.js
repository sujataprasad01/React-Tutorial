
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
import useFetch from './components/useFetch.js';
import {BrouseRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Pages/Layout.js';
import NoPage from './Pages/NoPage.js';
import Home from './Pages/Home.js'
import Blog from './Pages/Blog.js'
import Contact from './Pages/Contact.js'
function App() {
  const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/users")
  return (
       <div>
           <div>
            <Router>
              <Routes>
              <Route path="/" element={<Layout></Layout>}>
           <Route index element={<Home></Home>}></Route>
           <Route element={<Blog></Blog>}></Route>
           <Route element={<Contact></Contact>}></Route>
           <Route element={<NoPage></NoPage>}></Route>
              </Route>
              </Routes>
            </Router>
           </div>
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
       <p>Fetching Json --------------------------</p>
       <div>
       { loading ? <p>Loading...</p>:
                <ul>
                  { data.map((user) => (
                    <li key = {user.id}>{user.name}</li>
                  ) )}
                </ul>
      }
      </div>
   
       </div>
      );
    }
    
export default App;
