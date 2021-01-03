import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";
import DrawContainer from "./components/draw-image-component";

function App() {
  return (
  
    <div className="container">
	<h1>1.Upload Image</h1>
      <div className="my-2">
        <h3>Extra Marks</h3>
        <h4>React upload multiple Files</h4>
      </div>
		
      <UploadFiles />
	  <h1>2.Draw Image</h1>
	  <DrawContainer />
    </div>
	

  );
}

export default App;