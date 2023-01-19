import { useState } from "react";
import "./styles.css";
import uploadImg from "./upload.png";

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);

    // Additional validation logic
  };

  return (
    <div className="app">
      <div className="parent">
        <div className="file-upload">
          <img src={uploadImg} alt="upload" />
          <h3> {selectedName || "Click box to upload"}</h3>
          <p>Maximun file size 10mb</p>
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
}
