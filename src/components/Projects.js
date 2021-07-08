import React from "react";
import "./style.css";

function Projects() {
  return (
    <div id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h1 className="title-a">Check out some of my projects!</h1>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="projects">
          <h3>Projects</h3>
          <ul>
            <li class="one">
              <h3 class="h3one">GiftEZ</h3>
              <a
                href="https://giftez.herokuapp.com"
                target="blank"
              >
                <article>
                  <div></div>
                  <img src="assets/images/giftez.png" />
                </article>
              </a>
            </li>
          </ul>
          <div class="space-jam"></div>
          <ul>
            <li class="one">
              <h3 class="h3one">Astroplanner</h3>
              <a href="https://fiskoal.github.io/astroplanner" target="blank">
                <article>
                  <div></div>
                  <img src="assets/images/astroplanner.png" />
                </article>
              </a>
            </li>
          </ul>
          <div class="space-jam"></div>
          <ul>
            <li class="one">
              <h3 class="h3one">RotMG Tools</h3>
              <a href="https://fiskoal.github.io/rotmg-tools" target="blank">
                <article>
                  <div></div>
                  <img src={"./assets/rotmg.png"} />
                </article>
              </a>
            </li>
          </ul>
          </div>
        </div>
          </div>
  );
}

export default Projects;
