import React from 'react';
import './Home.css';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { SocialIcon } from 'react-social-icons';

function Home() {

        const handleClick = () => {
            window.open("https://www.wisdomlib.org/definition/uddeshya");
        }
        
        return(
        <div>
            <div className="name">
                <div className='intro'>
                    <img className='image' src='/Profile2.jpg' alt='' width="300" height="300"/>
                    <p>
                        Hey, I'm <em className="name_link" onClick={handleClick}>Uddeshya.</em> <br/>I'm a Full-Stack Software Engineer <br/>
                        <div className="social">
                            <div><SocialIcon url= "https://www.facebook.com/uddeshya.kumar.526/" fgColor="#893E4F"/></div>
                            <div><SocialIcon url="https://github.com/uddesh100" fgColor="#e1c699"/></div>
                            <div><SocialIcon url="https://instagram.com" fgColor="#1D4527"/></div>
                            <div><SocialIcon url="https://www.linkedin.com/in/uddeshya-kumar-001490183/" fgColor="#DFE979"/></div>
                        </div>
                    </p>
                    
                </div>
            </div>
             <div className="icons">
                <div>
                    <DeleteIcon color="primary" sx={{fontSize:100}}/>
                    <h7>Trash</h7>
                    <p>Trash how is this happening</p>
                </div>
                <div>
                    <RocketLaunchIcon color="primary" sx={{fontSize:100}}/>
                    <h7>Fast</h7>
                    <p>I'm fast as fuck boiiiii</p>
                </div>
                <div>
                    <DevicesIcon color="primary" sx={{fontSize:100}}/>
                    <h7>Smart</h7>
                    <p>It's big brain time</p>
                </div>
                <div>
                    <LightbulbIcon color="primary" sx={{fontSize:100}}/>
                    <h7>Innovative</h7>
                    <p>Create something new out of nothing</p>
                </div>
            </div>
            
            <div className='summary'>
            </div>
            <div className='skills'>
            </div>
        </div>
        );
}

export default Home;