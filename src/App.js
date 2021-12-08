import * as React from 'react';
import Home from "./components/Tabs/Home.js"
import './App.css';
import {Tabs, Tab, AppBar} from '@material-ui/core';


function App() {
  const [value, setValue]=React.useState(0);
  const handleTabs=(e,val)=>{
    console.warn(val);
    setValue(val);
  }

  return (
    <div className="App">
        <AppBar>
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="Home" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}><Home/></TabPanel>
        <TabPanel value={value} index={1}>Projects</TabPanel>
        <TabPanel value={value} index={2}>Contact</TabPanel>
    </div>
  );
}

function TabPanel(props){
  const {children, value, index}=props;
  return(
    <div>
      {
        value===index && (<h1>{children}</h1>)
      }
    </div>
  )
}
export default App;
