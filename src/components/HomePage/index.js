import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return(
        <div className="site__container">
            <div className="header__container">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHJ25Q4aWficg/profile-displayphoto-shrink_800_800/0/1614665332731?e=1626307200&v=beta&t=C6SwAAsyQYu87Ih36qnsC3oDCVE0dk623CxxnS-IxeE"/>
                <div className="headertext__container">
                    <h1>Hello</h1>
                    <h2>I'm Brandon Forster</h2>
                    <h3>A Fullstack Software Engineer</h3>
                </div>
            </div>
            <div className="about__container">
                    <h3>About me</h3>
                    <p>Hello, I am a junior level software engineer based in Boise, Idaho looking to find a job in the big software development hubs of the country! I have a background working with front-end applications using JavaScript, React, and Redux, as well as experience developing backend APIs using Express, Flask, SQLALchemy, and PostgreSQL.</p>
                    <div className="links__container">
                        <h5>Profile links</h5>
                        <i class="fab fa-github fa-6x"></i>
                        <i class="fab fa-linkedin fa-6x"></i>
                        <i class="fab fa-angellist fa-6x"></i>
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
                            <button>Github</button>
                            <button>Live Site</button>
                        </div>
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/11368/cow-cattle-animal-clipart-md.png"/>
                        <h5>Medium Well</h5>
                    </div>
                    <div className="project project-two">
                        <div className="overlay">
                            <p>Picketsy is a clone site of etsy using React and express.</p>
                            <button>Github</button>
                            <button>Live Site</button>
                        </div>
                        <img src="https://www.jing.fm/clipimg/full/54-540160_image-picket-fence-png-picket-fence.png"/>
                        <h5>Picketsy</h5>
                    </div>
                    <div className="project project-three">
                        <div className="overlay">
                            <p>SkyBnB is a clone site of AirBnB using React and Flask.</p>
                            <button>Github</button>
                            <button>Live Site</button>
                        </div>
                        <img src="https://skybnb.s3.amazonaws.com/logo.png"/>
                        <h5>SkyBnB</h5>
                    </div>
                    <div className="project project-four">
                        <div className="overlay">
                            <p>A site designed for running a dungeons and dragons game created using React and Flask.</p>
                            <button>Github</button>
                            <button>Live Site</button>
                        </div>
                        <img src="https://i.pinimg.com/originals/48/cb/53/48cb5349f515f6e59edc2a4de294f439.png"/>
                        <h5>DnD Instruments</h5>
                    </div>
                </div>

            </div>
            <div className="contact__container">
            <h3>Contact</h3>
                    <p>I'm currently looking for job opportunities anywhere in the country, so feel free to contact me for anything!</p>
                    <div className="contact__links__container">
                        <h5>Contact Info</h5>
                        <p>brandonforster@live.com</p>
                        <p>208-559-6384</p>
                    </div>
            </div>
        </div>
    )
}

export default HomePage