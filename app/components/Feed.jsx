var React = require('react');
var openWeatherMap = require('openWeatherMap');
var Scape = require('Scape');

var Feed = React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  handleSearch : function(location){
    var that = this;
    this.setState({
      isLoading:true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function(e){
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps : function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render : function(){
    var {isLoading,temp,location,errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <Scape image="https://lh3.googleusercontent.com/FeCwJZtxAT11d2HxpqYVfWHjyDG4697UCitdknn30ECKDIvKJiX0ptnaxq16ybeTeXlbQBd1WZokDVyS2IHELrLwxycZET_t7YHc1_bFCxVpwYFR4dKUf9PqjeGsFsnP8draJMgCYCZC9BofJ0SHszqGn80mhM-sBs1dGXpTu_nkKQRvOnQJobu1belLDEWJ8yjR_37MlP-tofErZbUXaf3Lj67kd_8-Ilz_X1GoayhnmUj_DUlq-s5M7_9XHiV3vfUJHEGBaEi4Jk0IYGCUUzYC1gunqZOvJNr-M5rSaAxltH39_1jhiykIaexHLH9lkG0UxzlhmnDo6z7zJKgX7eVdZWmuuWOaGCIxYe_1VV9VFL7Td7Gou83SllM8i-5sLoHqNQUodkoWRKSV8aIMfrfeHOoq9eOtaXdcd2VPAX5uNJI_DVjMUJAUqHt6GTzkKm6NAPcagfC2EpiRO-G088N8wv5Qt2cwJsqTcfXidUEKEFakp9RUCW0ryAMkdT3_26uKfVSvlU9lZtzA-cOEmIhpwb75EaUjHm6X3iG5HiIyeQjOjJUx-h0UeErdz4cBRbQ4KuypUh8bRKvcbLsGFK7CEraVNgSoeqI_Fv7cZDKPuYXM=w561-h421-no"/>
        <Scape image="https://lh3.googleusercontent.com/ls7kSgqkR5QOHwhiyrc50OcbFltXHdfAtElIE6pGL4yIL0u3bq8oowyy0s1BHmhLuEph5QfkW24gsCWF4fxn6PxlHVP8kpELLIBnNQZPT-wEAp716TaT-EzNYwZGb2plJB0Sai8SubjIIDlzcICFG8NZFkhJR0M8LqR1uySurDXhkqBdDzq6m6oI3MQGN-9GsHIXqumXhSViFn5gX_XTZmE-Z7PcqbYYaqjsizxD6GIy7BH9FFwoa5tL7jwGLHeFPTPcIZW-_5eoWggBkGJyfzfL1G23RGP3VJE0UrJDoTEc9hF-R3QvEIeoyVc57unqFbrUX69B8zJEcZ90Z1IVh2PwrEURpDnY7EdmsE-sWhv-yfDkILr9_umE3RBqITXRgWYVHWSyT8eSPz9xX6jMd6Suakx8e8Fc_z5DfGuIsS2-pYG8z5_SAjVpePWnipMpEJT3synMBvWpOY3LrLtfg1GzsVNAYHsXI6EfDRLwgVI-y_zYxhspqztu5PBF34zPYVDsYwhJjkW1aWnwtQorgyXF22b9kssCCa66Pl0PSFMWJbClw-h4r3aOrtfXbJQsX9ASfZUA-rCbWbXqCDlgQTOw3tTxcHihgvImln0MVWGz5O3e=w1089-h817-no"/>
        <Scape image="https://lh3.googleusercontent.com/NyLZdLU-_tzQGROiYqtIfJOOAziDlD_-TCZrgpx5wnYdJ_hXkocBSs5YfxKCqgY8gWnxQHL6-X92wA4aNbdybVo_m7dXySEV4al7rng729LCYQkkTYmW8UWt45OViqBwJn901erRMMZpwfAWFS0rVPgkLywjdXNX1vUPgv_VC_R_VTTWesnCGKjyKKXkLLGmTC4izNnSKJ4RLv987YlMntFxAznWcHIN13Iu9BrTzSYYGRuYRAD24cq5nKS0s-VWaDkjCsqhpMRZ4YxBJeB5P0hpii7Vs_hqMAofhIL6sqYCi6Z2sXMdosEX17Hz_iEODQD4MvCMbYrKdA3iGQ18SlhZP71rpmNuP-m_oA1T-K-Vk45bmNPIwZSSFnG5x_AYo1kWfTq8Pq0J6fiEzl8ZtZBmBs3HxVqvLSdeiNmBWPp9pPqmS-uru6C3n4loc5GB8WK54_fQ5qdw-WlRZkJvXjB1JDgDKsfEcocpZQu8MlX3csCBiQEI1BF1w-dKjzF318yGhG4w9TEblH2ktkmXiueTuDHqZ-l8rZdaKIhMUuhWynZX--vizYpFfzxw-JEV_3DCE_3Wz_sg4nX30THBucbPjHyyd6qrUmfdlsE5KCI3foxm=w561-h420-no"/>
        <Scape image="https://lh3.googleusercontent.com/g9MRKoHXwr9rYyiccVYB2-NOKYTSZ7vse4x6Udn97yKSZzpSV2BCHLnaMNdodPkEulJuH_B-6c3UKdVUIZawxseIHSDrQ0NreHnBrWS0uSta4bYKN1wVO8FU2nhiTYwPu9f5FJIN8h5yiMZ14YIkaesRqa3QSF7gBpBlw5r5FVcMC5PXlCVW_QjdEoMDifOr33BOwIzbUmS2XD5slvv8nWC4kqETsV2AQqFrcnOyOp7q_nGgWhf1t_Uv6576ma9e-7_Fg8B-NdMH-rx0avs_IuOW-raf3NGuhWjZgtwWSxYn7nSH2WSooCHC_uNYM4udOBkargBUGbDbxaNTVPI_K-5K87Dqqi0ebpz2SoCOUDbZMSiRUsuxkSgvKy591fo5rFomR1uBy_ZOTOni_QAcPF2KkdLa6tgPz4Zi07IbpVUphqsLkAFwRZbfRTh5MqwFbgY7VsA4BvFfho3uI8oPp0_srbh5LQsMknTBwY3HqqFP_7lpRzOmUOhl1Qm1FSb4GqWhyKrWZs97LRgYko1v_o2sz1ivGjoypgm5pPXgBFsai5rQc-9wZh574syXW76L8a74LXy1cB3uNrbMJA-AE-TlFtzHdkDoAMBLrHjASYKVC_T0=w288-h216-no"/>
        <Scape image="https://lh3.googleusercontent.com/cXi9oUU01FoQZJ-_E7GPOCyvos6C8euP4Er6Sn44Be6JXZbQraiAx0PO7DMHDwoFHCxj9IFa5QfSqGRbdSj2Lyvb9hOXFD4l90UQwtfF2T0zyYKxj0urRj7lcDjeZuTB1oaIHu7sfCrKiJ04kFWhragaTSqFnLw4tBXgnNLSg6G1dn5rzPpf2oMeGb6hzvk5usxSnnLHHE9-KxngrI5M4CwnnKjyP50uSiolZbI5MOsv6k2h2BofAtguwddLnB5i0X3XjqDBkapEBd1KarH2cjHl2PUbVn7F6j9M9BaYIg08bV4SAyGjWvhOUM_M6iKLmp5mQmAwPukFyIWut_YT88YpMVoKI1MMzGH5ChtJ4gB4I2FrKerpF15pok0TFbaUxKHRhvNaxnT3hPazSsd-Oq_OtyFMVKKhkfbULmjx9Q6WE_d5RQcnGVKz4Aiz4_ZlakQ8sfNrd63PxBEDanvolNZEiZUga7TmfnD_jHuA61TiQ7MtjVxS9cSQ-IMiRLXawoFE5tWtBN11ScKylrxuD9aChp1gyghAEbUoMJZiXBSf0YWs1xOgDD-dRA5gg4RmWMt0iGDyFCtax3gzhz3vQuxqud6W8S8urZlyDWp9m69UWpUr=w561-h421-no"/>
      </div>
    )
  }
});

module.exports = Feed;
