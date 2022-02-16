import { ref, uploadBytesResumable } from "@firebase/storage";
import { useState } from "react";
import { storage } from "./firebase";


function App() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot) * 100);

        setProgress(prog);
    }, (err) => console.log(err),
       () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}> 
        <input type="file" className="input"/>
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h3> Uploaded {progress} % </h3>
    </div>
  );
}
export default App;
