var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-12 medium-8 large-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
