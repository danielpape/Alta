var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    var locationToSearch = this.refs.locationBoxString.value;
    var encodedLocation = encodeURIComponent(locationToSearch);

    if (locationToSearch.length > 0) {
      this.refs.locationBoxString.value = '';
      window.location.hash = '#/?location='+encodedLocation;

    }
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Alta
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><img src={'./app/img/feed.png'}/></IndexLink>
            </li>
            <li>
              <Link to="/profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Profile</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
