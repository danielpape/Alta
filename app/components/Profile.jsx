var React = require('react');
var Feed = require('Feed');
var {Link} = require('react-router');

var Profile = (props) =>{
  return(
    <div>
      <h1 className="text-center page-title">Profile</h1>
      <Feed/>
    </div>
  )
};

module.exports = Profile;
