// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function AppUpload() {
// //   const [files, setFiles] = useState(null);
// //   const [progress, setProgress] = useState({ started: false, pc: 0 });
// //   const [msg, setMsg] = useState(null);

// //   function handleUpload() {
// //     if (!files) {
// //       setMsg("No file selected");
// //       return;
// //     }

// //     const fd = new FormData();
// //     for (let i = 0; i < files.length; i++) {
// //       fd.append(files[`${i}`], files[i]);
// //     }

// //     setMsg("Uploading...");
// //     setProgress(prevState => ({ ...prevState, started: true }));

// //     axios.post('http://httpbin.org/post', fd, {
// //       onUploadProgress: (progressEvent) => {
// //         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
// //         setProgress(prevState => ({ ...prevState, pc: percentCompleted }));
// //       },
// //       headers: {
// //         "Custom-Header": "value"
// //       }
// //     })
// //     .then(res => {
// //       setMsg("Upload successful");
// //       console.log(res.data);
// //     })
// //     .catch(err => {
// //       setMsg("Upload failed");
// //       console.error(err);
// //     });
// //   }

// //   return (
// //     <div className="App">
// //       <h1>Uploading Files in React</h1>
// //       <input onChange={(e) => setFiles(e.target.files)} type="file" multiple />
// //       <button onClick={handleUpload}>Upload</button>
// //       {progress.started && <progress max="100" value={progress.pc}></progress>}
// //       {msg && <span>{msg}</span>}
// //     </div>
// //   );
// // }

// // export default AppUpload;


// import React, { useState, useRef } from 'react';
// import axios from 'axios';

// function AppUpload() {
//   const [files, setFiles] = useState(null);
//   const [progress, setProgress] = useState({ started: false, pc: 0 });
//   const [msg, setMsg] = useState(null);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const fileInputRef = useRef(null);

//   function handleUpload() {
//     if (!files) {
//       setMsg("No file selected");
//       return;
//     }

//     const fd = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       fd.append('file' + i, files[i]);
//     }

//     setMsg("Uploading...");
//     setProgress(prevState => ({ ...prevState, started: true }));

//     axios.post('https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/employee', fd, {
//       onUploadProgress: (progressEvent) => {
//         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//         setProgress(prevState => ({ ...prevState, pc: percentCompleted }));
//       },
//       headers: {
//         "Custom-Header": "value"
//       }
//     })
//     .then(res => {
//       setMsg("Upload successful");
//       console.log(res.data);
//       const newFiles = Array.from(files).map(file => ({
//         name: file.name,
//         size: file.size,
//         type: file.type,
//         lastModified: file.lastModified,
//         url: URL.createObjectURL(file) // Create a URL for the file
//       }));
//       setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
//       setFiles(null); // Reset file input
//       fileInputRef.current.value = ""; // Clear the file input
//     })
//     .catch(err => {
//       setMsg("Upload failed");
//       console.error(err);
//     });
//   }

//   return (
//     <div className="App mt-5 container">
//       <h3>Uploading Files</h3>
//       <div className='d-flex mb-5'>
//       <input 
//         className='form-control w-25'
//         ref={fileInputRef} 
//         onChange={(e) => setFiles(e.target.files)} 
//         type="file" 
//         multiple 
//       />
//       <button className='btn btn-primary ms-4' onClick={handleUpload}>Upload</button>
//      </div>
//       {progress.started && <progress max="100" value={progress.pc}></progress>}
//       {msg && <span>{msg}</span>}

//       <table border="1" className='table table-dark'>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Size (bytes)</th>
//             <th>Type</th>
//             <th>Download</th>
//           </tr>
//         </thead>
//         <tbody>
//           {uploadedFiles.map((file, index) => (
//             <tr key={index}>
//               <td>{file.name}</td>
//               <td>{file.size}</td>
//               <td>{file.type}</td>
//               <td><a href={file.url} download={file.name}>Download</a></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AppUpload;



import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'c' && event.ctrlKey) { // Ctrl+C shortcut
      setCount(count + 1);
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      {/* Your component content here */}
      <p>Count: {count}</p>
      
    </div>
  );
}

export default MyComponent;


