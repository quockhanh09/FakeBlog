import React from "react";
import './styles/Footer.css';

class Footer extends React.Component {
    render() {
        return <div id="footer">
        <footer>
            <div className="container">
                    <div>
                        <h3>Site Navigation</h3>
                        <ul>
                            <li><a href="/sitemap.html">Sitemap</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3>About</h3>
                        <ul>
                            <li><a href="https://github.com/quockhanh09?tab=repositories" target="_blank" rel="noreferrer">The Code</a></li>
                            <li><a href="https://github.com/quockhanh09?tab=repositories" target="_blank" rel="noreferrer">More of my Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Me</h3>
                        <ul>
                            <li><a href="https://github.com/quockhanh09" target="_blank" rel="noreferrer">GitHub</a></li>
                            
                            <li><a href="mailto:ksdz0209@gmail.com" target="_blank" rel="noreferrer">E-Mail</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="copyright">FakeBlogs</p>
                    </div>
            </div>
        </footer>
    </div>
    }
}

export default Footer;