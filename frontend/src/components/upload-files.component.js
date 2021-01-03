import React, { Component } from "react";
import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
	this.uploadFiles = this.uploadFiles.bind(this);
	
    this.state = {
      selectedFiles: undefined,
      message: [],

      fileInfos: [],
    };
  }
  selectFile(event) {
	  
    this.setState({
      selectedFiles: event.target.files,
    });
  }
  
  uploadFiles() {
    const selectedFiles = this.state.selectedFiles;

    this.setState(
      {
        message: [],
      },
      () => {
        for (let i = 0; i < selectedFiles.length; i++) {
          this.upload(i, selectedFiles[i]);
        }
      }
    );
  }
  
  upload(idx, file) {

    UploadService.upload(file).then((response) => {
        this.setState((prev) => {
          let nextMessage = [...prev.message, "Uploaded the file successfully: " + file.name];
          return {
            message: nextMessage
          };
        });

        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState((prev) => {
          let nextMessage = [...prev.message, "Could not upload the file: " + file.name];
          return {
            message: nextMessage
          };
        });
      });
  }
  
  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }
  
  render() {
	  const { selectedFiles, message, fileInfos } = this.state;
	  return (
      <div>
        <div className="row my-3">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple onChange={(event) => this.selectFile(event)}/>
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm "
              disabled={!selectedFiles}
              onClick={this.uploadFiles}
            >
              Upload
            </button>
          </div>
        </div>

        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}

        <div className="card">
          <div className="card-header">List of images</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.reverse().map((file, index) => (
                <li className="list-group-item" key={index}>
                  <img src={"http://localhost:8000"+file.images} width="50%" height="50%" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  

	  

  }
}