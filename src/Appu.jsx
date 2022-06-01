function Appu() {
    return(<div>
    {/* <!-- Fixed navbar --> */}
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Erin Manahan</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li id="nav-about"><a href="#about">About</a></li>
            <li id="nav-portfolio"><a href="#portfolio">Portfolio</a></li>
            <li id="nav-contact"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* <!--/.nav-collapse --> */}
      </div>
    </nav>

    {/* <!-- Begin page content --> */}
    <div className="container-fluid">
      
      <div className="row cover top">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12 headline">
              <h1 className="text-center">Hi, I'm Erin</h1>
              <p className="lead text-center">A Web Developer in training.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-block text-center">
              <a href="#about"><span id="scrollIcon" className="front-glyph glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
            </div>
          </div>
        </div>
      </div>
      
      
      <div id="about" className="row cover">
        <h2 className="text-center">About Me</h2>
        <div className="row">
          <div className="col-md-6 text-center about-info">
            <img className="img-circle text-center profile-img" src="https://sonorangirl.github.io/img/Square-Ireland.png">
            <p className="text-center">I'm a self taught web developer from Scottsdale, AZ. I'm currently learning Javascript development with FreeCodeCamp and Treehouse. I also have degrees in Biology and Sustainability so I can't wait till I get to the point where I can jump into the more interactive data visualizations and put what I'm learning to good use. But for now I'm having fun learning the basics! </p>
          </div>
          <div className="col-md-6 about-tools">
            <p className="text-center">Here's a few of the tools I use</p>
              <div className="col-xs-6">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>Foundation</li>
                </ul>
              </div>
              <div className="col-xs-6">
                <ul>
                  <li>JQuery</li>
                  <li>Sass</li>
                  <li>Git</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </div>
            
          </div>
          <div className="row break">
            <div className="col-md-6 about-last">
              <p className="text-center">Check out my latest projects <span className="glyphicon glyphicon-arrow-down"></span></p>
            </div>
          </div>
        </div> 
      </div><!-- End #About -->

      <div id="portfolio" className="row cover">
        <h2 className="text-center">Portfolio</h2>
        <div className="container">
          <div className="row portfolio-projects"> 
          {/* <!-- Two project row--> */}
            <div className="col-lg-6"> 
            {/* <!--1st side project --> */}
              <div className="row"> 
                <div className="col-sm-5 text-center">
                  <h4 className="portfolio-projects--title">Earth Quotes</h4>
                  <p className="portfolio-projects--desc">Random quotes shown over google earth images</p>
                  <p className="portfolio-projects--desc">Uses: Javascript, JQuery, Bootstrap</p>
                  <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Earth-Quotes/#" role="button">View Project</a>
                </div>
                <div className="col-sm-7 text-center">
                  <img className="portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-quotes.png">
                </div>
              </div>
            </div>
            <div className="col-lg-6"> <!--2nd side project -->
              <div className="row"> 
                <div className="col-sm-5 text-center pull-right-sm"><!--flipped on small, unflipped on large-->
                  <h4 className="portfolio-projects--title">Task Timer</h4>
                  <p className="portfolio-projects--desc">A Pomodoro clock timer with a task list integration</p>
                  <p className="portfolio-projects--desc">Uses: Javascript, JQuery, Bootstrap</p>
                  <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Task-Timer/" role="button">View Project</a>
                </div>
                <div className="col-sm-7 text-center pull-right-sm"><!--flipped on small, unflipped on large-->
                  <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-task-timer.png">
                </div>
              </div>
            </div>
          </div><!--end Two project row-->

          <div className="row portfolio-projects"> <!-- Opposite Two project row-->
            <div className="col-lg-6"> <!--1st side project -->
              <div className="row"> 
                <div className="col-sm-5 text-center">
                  <h4 className="portfolio-projects--title">Whats the Weather</h4>
                  <p className="portfolio-projects--desc">A weather app to check current weather conditions.</p>
                  <p className="portfolio-projects--desc">Uses: Javascript, Jquery, APIs</p>
                  <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Weather/" role="button">View Project</a>
                </div>
                <div className="col-sm-7 text-center">
                  <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/weather-slice.png">
                </div>
              </div>
            </div>
            <div className="col-lg-6"> <!--2nd side project -->
              <div className="row"> 
                <div className="col-sm-5 text-center pull-right-sm"><!--flipped on small, unflipped on large-->
                  <h4 className="portfolio-projects--title">Simon Game</h4>
                  <p className="portfolio-projects--desc">A simple recreation of the 80s game Simon.</p>
                  <p className="portfolio-projects--desc">Uses: Javascript, Sass, JQuery</p>
                  <a className="btn btn-rounded portfolio-projects--btn" href="https://sonorangirl.github.io/Simon-Game/" role="button">View Project</a>
                </div>
                <div className="col-sm-7 text-center pull-right-sm"><!--flipped on small, unflipped on large-->
                  <img className="img-rounded portfolio-projects--image" src="https://sonorangirl.github.io/img/slice-simon.png">
                </div>
              </div>
            </div>
          </div><!--end Opposite Two project row-->

        </div>
        </div>
      </div><!-- End #Portfolio -->

      <div id="contact" className="row cover bottom">
        <h2 className="text-center contact-header">Contact Me</h2>
        <p className="text-center contact-email">Get in touch with me <span className="glyphicon glyphicon-arrow-right"></span> manahan.erin@gmail.com</p>
        <div className="text-center contact-social-icons">
          <p>Or find me on:</p>
          <ul className="centered">
            <a href="https://codepen.io/sonorangirl/"><li><i className="fa fa-codepen"></i> CodePen</li></a>
            <a href="https://www.linkedin.com/in/emanahan"><li><i className="fa fa-linkedin-square"></i> LinkedIn</li></a>
            <a href="https://github.com/sonorangirl"><li><i className="fa fa-github"></i> Github</li></a>
            <a href="https://freecodecamp.com/sonorangirl"><li>(<i className="fa fa-fire"></i>) FreeCodeCamp</li></a>
            <a href="http://teamtreehouse.com/erinmanahan"><li> Treehouse</li></a>
            <a href="https://twitter.com/sonoran_girl"><li><i className="fa fa-twitter"></i> Twitter</li></a>
          </ul>
        </p>
        
      </div><!-- End #Contact -->

    </div>

    <footer className="footer">
      <div className="container">
      </div>
    </footer>

  
    </div>)
}
export default Appu;