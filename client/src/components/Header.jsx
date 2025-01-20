import '../style/Header.css';
import { useLocation, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        if (location.pathname === "/") {
            // Scroll to about section if already on home page
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home and scroll to #about
            navigate("/#about");
            setTimeout(() => {
                window.location.href = "/#about";
            }, 0);
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg nav1">
                <div className="container-fluid p-3 px-5">
                    <a className="navbar-brand name fs-3" href="/">Yashwanth.</a>
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
                                    <a className="nav-link" href="/skills">Skills</a>
                                </li>
                                <li className="nav-item fs-5">
                                    <a className="nav-link" href="/project">Project</a>
                                </li>
                                <li className="nav-item fs-5">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>


                            </div>

                        </ul>
                        <div className='ms-auto text-lg-end text-center w-100 mt-3 mt-lg-0 '>
                            <li>
                                <button className='btn btn-lg-lg btn-warning'>
                                    Download CV
                                </button>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;