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
                            <img href = "#" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/800px-Typical_Tetris_Game.svg.png" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Tetris</h2>
                            <p></p>
                        </div>
                    </div>
                    <div className = "card">
                        <div className="image">
                            <img href = "#" src ="http://ww1.prweb.com/prfiles/2018/07/10/15619597/distracted%20driving%202.jpg" alt=""/>
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
                <div className='container'>
                <div className = "card">
                        <div className="image">
                            <img href = "#" src ="https://psmag.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTI3NTgyMjIwOTYwNjM1MzU4/flappy-bird.jpg" alt=""/>
                        </div>
                        <div className = "content">
                            <h2>Flappy Bird</h2>
                            <p>.</p>
                        </div>
                    </div>
                </div>
                </div>
</body>
    );
}

export default Projects;