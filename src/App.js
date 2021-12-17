import * as React from 'react';
import Home from "./components/Tabs/Home.js"
import Projects from "./components/Tabs/Projects.js"
import './App.css';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import Particles from 'react-tsparticles';
import particlesConfig from './config/configParticles';


function App() {
  const [value, setValue]=React.useState(0);
  const handleTabs=(e,val)=>{
    console.warn(val);
    setValue(val);
  }

  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
        <div className="back" style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <AppBar>
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="Home" />
            <Tab label="Projects" />
            <Tab label="Resume" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}><Home/></TabPanel>
        <TabPanel value={value} index={1}><Projects/></TabPanel>
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
