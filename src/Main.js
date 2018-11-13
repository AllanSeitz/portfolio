import React, { Component } from "react";

const Main = props => {
  return (
    <div>
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Allans Portfolio</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              A Passionate Full Stack Developer and Veteran hailing from SDG!
            </h2>
            <a href="#about" class="btn btn-info js-scroll-trigger">
              resume
            </a>
          </div>
        </div>
      </header>
      <section id="about" class="about-section text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-white mb-4">Who am I?</h2>
              <p class="text-white-50">
                After graduating SDG as a Full Stack Developer, I wanted a place
                to showcase my skills. Please navigate to the "Contact Me" for
                any further questions. I am currently searching for a back end /
                front end web development job here in the Bay area.
              </p>
            </div>
          </div>
          <img src="./img/ipad.png" class="img-fluid" alt="" />
        </div>
      </section>
      <section id="projects" class="projects-section bg-light">
        <div class="container">
          {/* <!-- Featured Project Row --> */}
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="./img/weather.png"
                alt=""
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                {/* <h4>Weather API</h4> */}
                <h4 class="text-white">
                  {" "}
                  <a target="_blank" href="http://weatherapp-allan.surge.sh/">
                    WeatherApp
                  </a>
                </h4>
                <p class="text-black-50 mb-0">
                  My weather API was my first introduction into javascript
                  classes as well as fetching live data from an api.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img class="img-fluid" src="./img/Api.png" alt="" />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">
                      {" "}
                      <a
                        target="_blank"
                        href="https://github.com/AllanSeitz/SafariApi/blob/master/Controllers/SeenAnimalsController.cs"
                      >
                        SafariAPI
                      </a>
                    </h4>
                    <p class="mb-0 text-white-50">
                      My first API created in C#. I thoroughly enjoyed this
                      project.
                    </p>
                    <hr class="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Project Two Row --> */}
          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img class="img-fluid" src="./img/snowman.png" alt="" />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">
                      <a
                        href="https://snow-man-justin-allan.surge.sh"
                        target="_blank"
                      >
                        Snow Man
                      </a>
                    </h4>
                    <p class="mb-0 text-white-50">
                      Our reverse hangman app "Snowman" was an exciting project
                      created by Justin Lee and my self.
                    </p>
                    <hr class="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
