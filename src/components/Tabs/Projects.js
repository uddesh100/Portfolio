import React from 'react'; 
import './Projects.css';

function Projects() {
        
        return(
            <body className="body">
                <div className='test'><h3>Projects</h3></div>
                <div className='list'>
                <div className = "container">
                    <div className = "card">
                        <div className="image">
                            <img href = "#" src ="/artistic.png" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Artistic Photos</h2>
                            <p>.</p>
                        </div>
                    </div>
                    <div className = "card">
                        <div className="image">
                            <img href = "#" src ="https://skift.com/wp-content/uploads/2016/12/google-food-emoji-1024x683.png" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Restraunts Recommendatios</h2>
                            <p>.</p>
                        </div>
                    </div>
                    <div className = "card">
                        <div className="image">
                            <img href = "#" src ="https://content.fortune.com/wp-content/uploads/2018/04/gettyimages-923334996.jpg" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Distracted Driver Detection</h2>
                            <p>.</p>
                        </div>
                    </div>
                    <div className = "card">
                        <div className="image">
                            <img href = "#" src ="https://richwoodbank.com/wp-content/uploads/2019/05/Notifi-Graphics-web-04.png" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Instant News</h2>
                            <p>.</p>
                        </div>
                    </div>     
                </div>
                </div>
</body>
    );
}

export default Projects;