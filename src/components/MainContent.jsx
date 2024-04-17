import moisesImage from '../img/Moises.png';

function MainContent() {
    return (
      <div className="contenedor dos-columnas">
            <article className="entrada-blog">
                <h3 className="no-margin">Hello,It's me!</h3>
                <h2 className="no-margin">Moises Alarcon</h2>
                <h3 className="no-margin"> And I'm a  <span className="web-developer">Web developer</span></h3>
                <p className="no-margin">👋 Hi, I’m Moises Abrahan Alarcon Hazin I'm a front-end developer. who start a live
                     as programmer in mechatronic area with C#.But I choose to be web programmer.I really like everything about web development
                      🌱, I'm also looking to develop myself as backend developer to get full-stack roles. I am a fast learner,.. Reach out to learn more about me!</p>
                
                <div className="iconos-perfil">
                 <a href="https://github.com/abrahanalarcon" target="_blank" id="profile-link"
                 className="profile-links"><i className="fab fa-github"></i>
                </a>
                
                <a href="https://www.freecodecamp.org/" target="_blank"
                className="profile-links"><i className="fab fa-free-code-camp"></i>
                </a>
                
                <a href="https://codepen.io/abrahanalarcon/pens/public" target="_blank"
                className="profile-links"><i className="fab fa-codepen"></i>
                </a>


                <a href="https://www.linkedin.com/in/moises-abrahan-alarcon-hazim-6b614a217/"
                target="_blank"
                className="button-1">View Resume</a>
                </div>
            </article>


            <img className="imagen-con-sombra" src={moisesImage} alt="imagen portafolio"/>

      </div>
    );
  }
  
  export default MainContent;