import React from 'react'
import './HomePage.css'
import dndInstrumentsDemo from '../../images/dndInstrumentsDemo.gif'
import skyBnBDemo from '../../images/skyBnBDemo.gif'
import mediumWellDemo from '../../images/mediumWellDemo.gif'

const HomePage = () => {
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth'
        }); 
      }; 
    return(
        <div className="site__container">
            <div className="header__container">
                <div className='header__text__container'>
                    <h1>Brandon Forster</h1>
                    <h2>Full Stack Software Engineer</h2>
                </div>
                <div className='header__image__container'>
                    <div className='header__image__container__1'>
                        <img id='dndInstrumentsDemo' src={dndInstrumentsDemo}/>
                        <div className='header__text__container__1'>
                            <h3>DnD Instruments</h3>
                            <h4>A Dungeons and Dragons calculator.</h4>
                            <a href='https://github.com/brandonforster822/DnD-Instruments'>Github</a>
                            <a href='https://dndinstruments.herokuapp.com'>Live Site</a>
                        </div>
                    </div>
                    <div>
                        <img id='skyBnBDemo' src={skyBnBDemo}/>
                        <p>huaggh???</p>
                    </div>
                    <div>
                        <img id='mediumWellDemo' src={mediumWellDemo}/>
                    </div>
                    <div>
                        <img id='dndInstrumentsDemo' src={dndInstrumentsDemo}/>
                    </div>
                </div>
            </div>
            <div className="about__container">
                    <h3>About me</h3>
                    <div>
                        <p>Hello! I am a junior-level software engineer based in Boise, Idaho. I'm currently pursuing new and exciting opportunities, especially in the big software development hubs of the US! I have a background working with front-end applications, using: JavaScript, React, and Redux, as well as experience developing backend APIs, using: Express, Flask, SQLALchemy, and PostgreSQL. Interested in collab-ing? </p>
                        <button onClick={scrollToBottom}>Let's Connect!</button>
                    </div>
                    <div className="links__container">
                        <h5>Profile links</h5>
                        <a
                        href="https://github.com/brandonforster822"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github__link"
                        >
                            <i class="fab fa-github fa-6x"></i>
                        </a>
                        <a
                        href="https://www.linkedin.com/in/brandon-forster-759553208/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github__link"
                        >
                            <i class="fab fa-linkedin fa-6x"></i>
                        </a>
                        <a
                        href="https://angel.co/u/brandon-forster-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github__link"
                        >
                            <i class="fab fa-angellist fa-6x"></i>
                        </a>
                        
                        
                    </div>
            </div>
            <div className="skills__container">
                <h3>Skills</h3>
                <div className="skill__icon__container">
                <i class="devicon-amazonwebservices-plain-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-redux-original"></i>
                <i class="devicon-github-original-wordmark"></i>
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-flask-original-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-sqlalchemy-original-wordmark"></i>
                <i class="devicon-nodejs-plain-wordmark"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-python-plain"></i>
                </div>
            </div>
            <div className="projects__container">
                <h3>Projects</h3>
                <div className="projects_list">
                    <div className="project project-one">
                        <div className="overlay">
                            <p>Medium well is a clone site of medium using express.</p>
                            <button onClick={()=> window.open("https://github.com/cygnus33065/Medium_Well")}>Github</button>
                            <button onClick={()=> window.open("https://medium-well.herokuapp.com/")}>Live Site</button>
                        </div>
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/11368/cow-cattle-animal-clipart-md.png"/>
                        <h5>Medium Well</h5>
                    </div>
                    <div className="project project-two">
                        <div className="overlay">
                            <p>Picketsy is a clone site of etsy using React and express.</p>
                            <button onClick={()=> window.open("https://github.com/brandonforster822/picketsy")}>Github</button>
                            <button onClick={()=> window.open("https://picketsy.herokuapp.com")}>Live Site</button>
                        </div>
                        <img src="https://www.jing.fm/clipimg/full/54-540160_image-picket-fence-png-picket-fence.png"/>
                        <h5>Picketsy</h5>
                    </div>
                    <div className="project project-three">
                        <div className="overlay">
                            <p>SkyBnB is a clone site of AirBnB using React and Flask.</p>
                            <button onClick={()=> window.open("https://github.com/V3RS/skybnb")}>Github</button>
                            <button onClick={()=> window.open("https://skybnb-app.herokuapp.com")}>Live Site</button>
                        </div>
                        <img src="https://skybnb.s3.amazonaws.com/logo.png"/>
                        <h5>SkyBnB</h5>
                    </div>
                    <div className="project project-four">
                        <div className="overlay">
                            <p>A site designed for running a dungeons and dragons game created using React and Flask.</p>
                            <button onClick={()=> window.open("https://github.com/brandonforster822/dnd-instruments")}>Github</button>
                            <button onClick={()=> window.open("http://dndinstruments.herokuapp.com/")}>Live Site</button>
                        </div>
                        <img src="https://i.pinimg.com/originals/48/cb/53/48cb5349f515f6e59edc2a4de294f439.png"/>
                        <h5>DnD Instruments</h5>
                    </div>
                </div>

            </div>
            <div className="contact__container">
            <h3>Contact Info</h3>
                    <div className="contact__links__container">

                        <p>brandonforster@live.com</p>
                        <p>208-559-6384</p>
                        <a href="https://docs.google.com/document/d/1eu6jVyC8BmLHGzPz0sEX239xjqRoc-SikV8xfyJka28/edit?usp=sharing">Link to resume</a>
                    </div>
            </div>
        </div>
    )
}

export default HomePage