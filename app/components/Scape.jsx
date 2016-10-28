var React = require('react');

var Scape = ({image}) =>{
  return(
    <div>
      <div className="scape">
        <div className="scapeHeader">
          <img className="scapeProfileImage" src={'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14519821_10153837134245952_3854936125472397001_n.jpg?oh=b00518032d1c1ba0f7ed9959cbad93ee&oe=5899B507'}/><div className="ScapeText">Daniel Pape<a className="ScapeDate">10.23 22-OCT-2016</a></div>
        </div>
        <div>
          <img className="scapeImage" src={image}/>
        </div>
        <div className="scapeFooter">
          <div className="ScapeText">Sunrise 07.52 Sunset 17.40<a className="ScapeDate">9&deg;C</a></div>
        </div>
        <div className="scapeMeta">
          <div className="ScapeText">
            <p>Liked by Daniel Pape</p>
            <p><strong>Daniel Pape</strong> Great shot!</p>
          </div>
          <div className="ScapeText">+ Add Comment<a className="ScapeDate">Like</a></div>
        </div>
      </div>
    </div>
  )
};

module.exports = Scape;
