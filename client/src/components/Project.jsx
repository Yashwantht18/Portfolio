import '../style/Project.css';
import Contact from './Contact'
function Project() {
    return (
        <div className='skill-session' id='project'>
            <div className='container-fluid nav section'>
                <p>My Projects</p>
            </div>
            <div className="container-xxl mt-4 px-3 project-div">
                <div className="row row-cols-1 gy-4 gx-4 p-1 p-lg-2 project-title">
                    <div className="col">
                        <div className="p-3 rounded-4 unique-Skill">
                            <div className="row p-md-3 p-2">
                                <div className="col-12 align-content-start title">
                                    <span>RentEasee-Yukthi Innovation Challenge 2024 - <a className="nav-link active" href='https://www.linkedin.com/posts/yashwanththangaraj_we-are-excited-to-introduce-the-renteasee-activity-7242023467464728577-GFym/?utm_source=share&utm_medium=member_desktop' >LinkedIn</a> | <a className="nav-link active" href="https://github.com/Poovarasan-29/RentEaseeRepo">GitHub</a></span>
                                    <p>Team Project | On goning</p>
                                </div>
                                <div className="col-12">
                                    <ul className='title-Des'>
                                        <li className='nav-item p-md-1 '>
                                            A platform for renting yellow-board vehicles and hiring freelance drivers, featuring vehicle listings, driver profiles, real- time search, and membership-based access control.

                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Technologies: CSS3, Bootstrap5, ReactJS.

                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Designed and implemented intuitive Ul components for vehicle listings and driver profiles using ReactJS, ensuring a responsive and user-friendly experience.


                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Collaborated closely with the backend team to integrate APIs, optimizing real-time search and membership-based access for seamless functionality.
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 rounded-4 unique-Skill">
                            <div className="row p-md-3 p-2">
                                <div className="col-12 align-content-start title">
                                    <span>Predicition Game - <a className="nav-link active" href="https://color-perdiction-game-60028934566.development.catalystserverless.in/app/index.html" >Visit</a> | <a className="nav-link active" href="https://github.com/Yashwantht18/predictiongame">GitHub</a></span>
                                </div>
                                <div className="col-12 mt-4">
                                    <ul className='title-Des'>
                                        <li className='nav-item p-md-1 '>
                                            The Prediction Game is an interactive web-based game where users are tasked with predicting the color and number displayed on the screen.
                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Technologies: HTML5, CSS3, Bootstrap5, JavaScript.
                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Interactive and engaging game where users predict the displayed color, enhancing their experience with a simple yet effective design.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 rounded-4 unique-Skill">
                            <div className="row p-md-3 p-2">
                                <div className="col-12 align-content-start title">
                                    <span>Simple Mini E-Commerce - <a className="nav-link active" href="https://www.linkedin.com/posts/yashwanththangaraj_we-happy-to-share-this-e-commerce-project-activity-7242023614143684608-M7Aw/?utm_source=share&utm_medium=member_desktop" >LinkedIn</a> | <a className="nav-link active" href="https://github.com/Poovarasan-29/Mini-E-Commerce">GitHub</a></span>
                                    <p>Team Project</p>
                                </div>
                                <div className="col-12">
                                    <ul className='title-Des'>
                                        <li className='nav-item p-md-1 '>
                                            A mini e-commerce website enabling users to browse products, manage a shopping cart, and complete orders with seamless integration of front-end interfaces and back-end functionality.
                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Technologies: ReactJS, Node.js, MongoDB, JavaScript.
                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Created and managed a MongoDB database for storing user, product, and order data efficiently.
                                        </li>
                                        <li className='nav-item p-md-1 '>
                                            Integrated front-end and back-end components to ensure seamless functionality and data flow.
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div >
    )
}

export default Project;