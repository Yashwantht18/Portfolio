import '../style/About.css';
import Image from '../image/geometric_shape.svg'

function About() {
    return (
        <>
            <div className="front" id='about'>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-xl-2 p-lg-5 p-md-4 p-2">
                        <div className="col-12 col-lg-6 position-relative abt1">
                            <div className='aboutText position-absolute'>
                                <p className='text'>About</p>
                                <p className='headline'>Designing Engaging Web Interfaces 
                                    That Drive Results.</p>
                            </div>
                            <div className='aboutImg'>
                                <img src={Image} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-xl-0">

                            <div className="row row-cols-1">
                                <div className="col-12  about-heading">
                                    <h1>I'm Yashwanth</h1>
                                    <p>Junior Front-End Developer</p>
                                </div>
                                <div className="col-12 para pt-4">
                                    <p>
                                        I’m a Frontend Developer passionate about crafting dynamic and user-friendly web experiences. I specialize in creating responsive designs with advanced animations and interactive effects. My goal is to deliver visually appealing and functional solutions that leave a lasting impression. I believe that great design starts with understanding the user's needs and transforming them into seamless digital experiences. Every project I work on is driven by a commitment to quality and performance.
                                    </p>
                                </div>
                                <div className="col-12 para pt-2">
                                    <p>
                                        As a fresher, I bring enthusiasm, creativity, and a strong foundation in HTML, CSS, JavaScript, and React. I’m eager to apply my skills to real-world projects and grow as a developer. Let’s collaborate to transform your ideas into impactful digital experiences. I’m highly motivated to continuously improve my skills and stay updated with industry trends.
                                    </p>
                                </div>
                                <div className="col-12 para pt-2">
                                    <p>
                                        I am committed to continuous learning and improving my craft. My approach combines attention to detail with innovative problem-solving, ensuring that every project I work on not only meets but exceeds expectations. I'm excited about the opportunity to contribute to impactful web solutions. I enjoy collaborating with teams to brainstorm creative solutions and bring projects to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-xxl">
                        <div className='row row-cols-1 p-lg-5 p-md-4 p-2 pt-3'>
                            <div className="col-12 choose">
                                <h1 className='text-center'>
                                    Why Choose Me?
                                </h1>
                            </div>
                            <div className="col-12 para pt-3">
                                <p>
                                    I offer a strong foundation in frontend development, specializing in HTML, CSS, JavaScript, and React. My passion for creating user-friendly and visually appealing designs drives me to deliver exceptional results. By choosing me, you'll benefit from my dedication to ensuring every project meets high standards of performance and aesthetics. I am committed to understanding your needs and providing tailored solutions that engage users and create seamless experiences.By collaborating with me, you can expect a creative, results-driven partnership that exceeds expectations.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;