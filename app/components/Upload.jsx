var React = require('react');
var {Link} = require('react-router');
var Dropzone = require('react-dropzone');

var Upload = React.createClass({
    onDrop: function (acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop} className="dropzone">
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
});

module.exports = Upload;
