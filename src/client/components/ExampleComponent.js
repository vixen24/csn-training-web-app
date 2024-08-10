import React from "react";
import "../styles/main.css"

export default function ExampleComponent() {
	return <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">CloudSec Network</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <section className="hero-section">
        <div className="container">
            <h1>Welcome to CloudSec Network</h1>
            <p>Empowering individuals and organizations with the knowledge and resources needed to navigate the cloud security landscape.</p>
            <a href="#" className="btn btn-primary mt-4">Learn More</a>
        </div>
    </section>
    <section className="features-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4 feature">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Top Security</h3>
                    <p>Ensure top-notch security for your cloud infrastructure.</p>
                </div>
                <div className="col-md-4 feature">
                    <i className="fas fa-cogs"></i>
                    <h3>Easy Integration</h3>
                    <p>Seamless integration with your existing systems.</p>
                </div>
                <div className="col-md-4 feature">
                    <i className="fas fa-users"></i>
                    <h3>Expert Support</h3>
                    <p>Get access to our expert support team 24/7.</p>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer">
        <div className="container">
            <p>&copy; 2024 CloudSec Network. All Rights Reserved.</p>
        </div>
    </footer>
	</div>;
}