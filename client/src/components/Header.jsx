import '../style/Header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        if (location.pathname === "/") {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#about");
            setTimeout(() => {
                window.location.href = "/#about";
            }, 0);
        }
    };

    // const handleDownload = ()=> {
    //     const pdf = "/Yashwanth_Resume.pdf"
    //     const link = document.createElement("a");
    //     link.href = pdf;
    //     link.download = "Yashwanth_Resume.pdf";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link)
    // }
    return (
        <>
            <nav className="navbar navbar-expand-lg nav1">
                <div className="container-fluid p-3 px-5">
                    {/* <a className="navbar-brand name fs-3" href="/">Yashwanth.</a> */}
                    <Link to="/" className="navbar-brand name fs-3">Yashwanth.</Link>
                    <button className="navbar-toggler bg-transparent border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light border-0 outline-0"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav py-4">
                            <div className='d-flex flex-lg-row flex-column'>
                                <li className="nav-item fs-5">
                                    <a className="nav-link active" aria-current="page" onClick={handleAboutClick} style={{ cursor: "pointer" }}>About</a>
                                </li>
                                <li className="nav-item fs-5">
                                    {/* <a className="nav-link" href="/skills">Skills</a> */}
                                    <Link to="/skills" className='nav-link'>Skills</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    {/* <a className="nav-link" href="/project">Project</a> */}
                                    <Link to="/project" className='nav-link'>Project</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>


                            </div>

                        </ul>
                        <div className='ms-auto text-lg-end text-center w-100 mt-3 mt-lg-0 '>
                            <li>
                                {/* <a href="../public/Yashwanth_Resume.pdf" download={} className='btn btn-lg-lg btn-warning'>
                                    Download CV
                                </a> */}
                                <a href="/Yashwanth_Resume.pdf" download className='btn btn-lg-lg btn-warning'>
                                   Download CV
                                </a>

                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
