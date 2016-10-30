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
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                <svg width="48px" height="32px" viewBox="0 0 60 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="60" height="40" rx="4"></rect>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard">
                            <g id="Group">
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1"></use>
                                </mask>
                                <use id="Rectangle" fill="#CFD8DC" xlinkHref="#path-1"></use>
                                <path d="M-1.04199219,18.1474609 C-1.04199219,18.1474609 2.41650391,16.6015625 3.31445312,16.7265625 C4.21240234,16.8515625 5.72607422,15.8925781 6.99462891,15.3974609 C8.26318359,14.9023438 8.75830078,13.6054687 10.2724609,15.1196289 C11.7866211,16.6337891 12.4628906,16.8515625 14.5366211,16.6337891 C16.6103516,16.4160156 20.7998047,16.8237305 21.6103516,15.7680664 C22.4208984,14.7124023 26.5551758,13.7495117 26.6801758,14.4624023 C26.8051758,15.175293 29.1196289,14.8974609 30.8789063,15.7631836 C32.6381836,16.6289062 37.1704102,17.7446289 38.5639648,17.4946289 C39.9575195,17.2446289 42.6425781,16.4389648 43.7539062,15.7910156 C44.8652344,15.1430664 43.9394531,16.347168 45.730957,16.5644531 C47.5224609,16.7817383 47.4902344,14.7397461 48.9160156,15.3881836 C50.3417969,16.0366211 52.5039062,16.9018555 54.1103516,16.6845703 C55.7167969,16.4672852 57.2626953,15.3554688 58.0361328,15.5410156 C58.8095703,15.7265625 60.8232422,16.1289062 60.8232422,16.1289062 L61.5639648,41.8466797 L-3.25488281,41.2958984 L-1.04199219,18.1474609 Z" id="Path-4" fill="#90A4AE" mask="url(#mask-2)"></path>
                                <path d="M-2.68798828,26.6845703 C-2.68798828,26.6845703 -0.59765625,23.1572266 1.99462891,22.105957 C4.58691406,21.0546875 8.19824219,21.453125 10.2075195,21.578125 C12.2167969,21.703125 16.328125,22.6616211 18.6474609,22.4760742 C20.9667969,22.2905273 24.2026367,18.2539062 31.8696289,18.2260742 C39.5366211,18.1982422 40.2763672,21.203125 43.8969727,21.3789062 C47.5175781,21.5546875 49.6704102,23.9116211 52.0175781,23.2631836 C52.2136227,23.2090236 54.2384418,22.0448885 54.5175781,21.9672852 C57.5804366,21.1157729 63.346298,20.1480513 64.0546875,21.2260742 C64.8276367,22.4023437 59.2211914,21.453125 60.8876953,20.4946289 C62.5541992,19.5361328 61.3720703,21.9624023 62.112793,21.3745117 C62.8535156,20.7866211 63.6264648,43.7495117 63.6264648,43.7495117 L-9.64648438,45.7866211 L-2.68798828,26.6845703 Z" id="Path-3" fill="#455A64" mask="url(#mask-2)"></path>
                                <path d="M-0.178710937,29.0317383 C-0.178710937,29.0317383 1.02001953,28.0732422 8.09423828,30.3881836 C15.168457,32.703125 19.6723633,34.1523438 27.6079102,34.1523438 C35.543457,34.1523438 43.1962891,32.578125 47.1499023,29.3652344 C51.1035156,26.1523438 55.7329102,22.9711914 59.3764648,22.6010742 C63.0200195,22.230957 64.2236328,24.9487305 64.2236328,24.9487305 L62.4970703,44.300293 C62.4970703,44.300293 -7.56787109,46.0600586 -6.88720703,45.4116211 C-6.20654297,44.7631836 -5.37304688,32.2631836 -5.37304688,32.2631836 L-0.178710937,29.0317383 Z" id="Path-2" fill="#263238" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </g>
                </svg></IndexLink>
            </li>
            <li>
              <Link to="/profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><svg width="48px" height="32px" viewBox="0 0 48 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                      <rect id="path-1" x="0" y="0" width="48" height="32" rx="4"></rect>
                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy">
                          <g id="Group">
                              <mask id="mask-2" fill="white">
                                  <use xlinkHref="#path-1"></use>
                              </mask>
                              <use id="Rectangle" fill="#90A4AE" xlinkHref="#path-1"></use>
                          </g>
                          <path d="M15.0209961,29.9875488 C15.0209961,29.9875488 14.9121094,24.2177941 15.0209961,20.1073101 C15.1298828,15.9968262 20.0742188,16.1193848 20.0742188,16.1193848 L28.0974121,16.0568848 C28.0974121,16.0568848 33.0256348,16.0429687 33.0256348,20.1054688 C33.0256348,24.1679688 33.0556641,30.0986328 33.0556641,30.0986328 L15.0209961,29.9875488 Z" id="Path-5" fill="#FFFFFF"></path>
                          <circle id="Oval" fill="#FFFFFF" cx="24.0461426" cy="9.71742442" r="6"></circle>
                      </g>
                  </g>
              </svg></Link>
            </li>
            <li>
              <Link to="/upload" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><svg width="48px" height="32px" viewBox="0 0 48 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                      <rect id="path-1" x="0" y="0" width="48" height="32" rx="4"></rect>
                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy-2">
                          <g id="Group">
                              <mask id="mask-2" fill="white">
                                  <use xlinkHref="#path-1"></use>
                              </mask>
                              <use id="Rectangle" fill="#90A4AE" xlinkHref="#path-1"></use>
                          </g>
                          <rect id="Rectangle-2" fill="#FFFFFF" x="23" y="6.05053711" width="3" height="20.8989258"></rect>
                          <rect id="Rectangle-2-Copy" fill="#FFFFFF" transform="translate(24.500000, 16.500000) rotate(90.000000) translate(-24.500000, -16.500000) " x="23" y="5.97558594" width="3" height="21.0488281"></rect>
                      </g>
                  </g>
              </svg></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
