
import '../style/Home.css';
import yash from '../image/yash.jpg'
import About from './About'
import Contact from './Contact'
function Home() {
    return (
        <>
            <div className="front p-lg-5 p-3 p-md-4">
                <div className="container-fluid p-lg-5 p-3 p-md-4  position-relative">
                    {/* Orange Line */}
                    <div className="orange-line"></div>

                    {/* Flex container with Bootstrap */}
                    <div className="d-flex flex-column flex-xl-row justify-content-xl-between  justify-content-start align-items-start">
                        {/* Text Div */}
                        <div className="textDiv d-flex flex-column justify-content-start">
                            <h1 className="title">Hello, I'm Yashwanth</h1>
                            <p className="about">
                                I craft user-centered<br />
                                and visually appealing <br />
                                front-end experiences that <br />
                                drive engagement and <br />
                                conversion.
                            </p>
                        </div>

                        {/* Image Div */}
                        <div className="imgDiv position-relative d-flex align-content-center justify-content-end p-lg-3 p-xl-0 p-2 pt-4 pt-md-0">
                            <div className="lines">
                                <span></span>
                            </div>
                            <img src={yash} alt="yash" className="custom-img" />
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <Contact />
        </>
    );
}

export default Home;
