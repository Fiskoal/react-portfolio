import React from "react";
import './style.css';

function Home() {
    return (
        <div className="hero-image" style={{ backgroundImage: "url(https://raw.githubusercontent.com/Fiskoal/rotmg-tools/796037a61ba9a83dc7d54d59821011ab59e902e4/assets/images/cube-background.png)" }}>
            <div className="hero-text">
                <p>Jakob Knicley</p>
                <h2>Full Stack Web Developer</h2>
            </div>
        </div>

    );
}

export default Home;