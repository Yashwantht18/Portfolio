import '../style/Skills.css';
import Contact from './Contact'
function Skills() {
    return (
        <div className='skill-session' id='skill'>
            
            <div className='container-fluid nav section'>
                    <p>My Skills</p>  
            </div>

            <div className="container-xxl mt-4 px-3 text-center skill-div">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gy-4 gx-4 p-1 p-lg-2 skill-content">
                    <div className="col">
                        <div className="p-3 p-lg-4 rounded-4 unique-Skill">
                            <h2 className='p-2'>Web Development</h2>
                            <div className="row row-cols-2 text-center">
                                <div className="col p-2">HTML5</div>
                                <div className="col p-2">CSS3</div>
                                <div className="col p-2">JavaScript</div>
                                <div className="col p-2">Bootstrap</div>
                                <div className="col p-2">React</div>
                                <div className="col p-2">Git/GitHub</div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 p-lg-4 rounded-4 unique-Skill">
                            <h2 className='p-2'>Course Work</h2>
                            <div className="row row-cols-1 text-center">
                                <div className="col p-2">Data Structures and Algorithms (DSA)</div>
                                <div className="col p-2">Web Technology</div>
                                <div className="col p-2">Cloud Computing</div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 p-lg-4 rounded-4 unique-Skill">
                            <h2 className='p-2'>Programming Languages</h2>
                            <div className="row row-cols-1 text-center">
                                <div className="col p-2">JavaScript</div>
                                <div className="col p-2">Python</div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 p-lg-4 rounded-4 unique-Skill">
                            <h2 className='p-2'>Certificates</h2>
                            <div className="row row-cols-1 text-center">
                                <div className="col p-2">NPTEL - Cloud Computing</div>
                                <div className="col p-2">Motion Cut - Web Development</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Skills;
