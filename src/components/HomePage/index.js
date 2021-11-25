import React from 'react'
import './HomePage.css'
import dndInstrumentsDemo from '../../images/dndInstrumentsDemo.gif'
import skyBnBDemo from '../../images/skyBnBDemo.gif'
import mediumWellDemo from '../../images/mediumWellDemo.gif'
import picketsyDemo from '../../images/picketsyDemo.gif'
import profilePicture from '../../images/profilePicture.jpg'

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
                
                <div className='header__image__container'>
                <div className="header__text__positioning">
                    <div className='header__text__container'>
                        <h1>Brandon Forster</h1>
                        <h2>Full Stack Software Engineer</h2>
                        <div className='header__contact__container'>
                        <a
                            href="https://github.com/brandonforster822"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="github__link"
                            >
                                <i class="fab fa-github fa-5x"></i>
                            </a>
                            <a
                            href="https://www.linkedin.com/in/brandon-forster-759553208/"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="github__link"
                            >
                                <i class="fab fa-linkedin fa-5x"></i>
                            </a>
                            <a
                            href="https://angel.co/u/brandon-forster-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="github__link"
                            >
                                <i class="fab fa-angellist fa-5x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                    <div className='header__image__container__1'>
                        <img id='dndInstrumentsDemo' src={dndInstrumentsDemo}/>
                        <div className='header__text__container__1'>
                            <div>
                                <h3>DnD Instruments</h3>
                                <h4>A Dungeons and Dragons calculator.</h4>
                            </div>
                            <div className='logo__container'>
                                <a target="_blank" href='https://github.com/brandonforster822/DnD-Instruments'><i class="fab fa-github fa-3x"></i></a>
                                <a target="_blank" href='https://dndinstruments.herokuapp.com'><i class="fas fa-link fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='header__image__container__1'>
                            <img id='skyBnBDemo' src={skyBnBDemo}/>
                            <div className='header__text__container__1'>
                                <div>
                                    <h3>SkyBnB</h3>
                                    <h4>A clone of AirBnB.</h4>
                                </div>
                                <div className='logo__container'>
                                    <a target="_blank" href='https://github.com/V3RS/skybnb'><i class="fab fa-github fa-3x"></i></a>
                                    <a target="_blank" href='https://skybnb-app.herokuapp.com/'><i class="fas fa-link fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='header__image__container__1'>
                                <img id='mediumWellDemo' src={mediumWellDemo}/>
                                <div className='header__text__container__1'>
                                    <div>
                                        <h3>Medium Well</h3>
                                        <h4>A clone of Medium.</h4>
                                    </div>
                                    <div className='logo__container'>
                                        <a target="_blank" href='https://github.com/cygnus33065/Medium_Well'><i class="fab fa-github fa-3x"></i></a>
                                        <a target="_blank" href='https://medium-well.herokuapp.com/'><i class="fas fa-link fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    <div className='header__image__container__1'>
                                <img id='picketsyDemo' src={picketsyDemo}/>
                                <div className='header__text__container__1'>
                                    <div>
                                        <h3>Picketsy</h3>
                                        <h4>A clone of Etsy.</h4>
                                    </div>
                                    <div className='logo__container'>
                                        <a target="_blank" href='https://github.com/brandonforster822/picketsy'><i class="fab fa-github fa-3x"></i></a>
                                        <a target="_blank" href='http://picketsy.herokuapp.com/'><i class="fas fa-link fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className="about__skills__container">
                <div className="about__container">
                    <img src={profilePicture}/>
                    <div className='about__text__container'>
                        <h3>Hello! I am a junior-level software engineer based in Boise, Idaho.</h3>
                        <p>I'm currently pursuing new and exciting opportunities, especially in the big software development hubs of the US! I have a background working with front-end applications, using: JavaScript, React, TypeScript, and Redux, as well as experience developing backend APIs, using: Express, Flask, GraphQL, SQLALchemy, and PostgreSQL. Interested in collab-ing? Feel free to reach out! You can find all my contact and project links above.</p>
                    </div>
                </div>
                <div className='skills__container'>
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
                        <i class="devicon-graphql-plain-wordmark"></i>
                        <i class="devicon-nodejs-plain-wordmark"></i>
                        <i class="devicon-express-original-wordmark"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-python-plain"></i>
                        <i class="devicon-typescript-plain"></i>
                    </div>
                </div>
            </div>
            <div className='aspect__ratio__cover'>
            </div>
        </div>
    )
}

export default HomePage