import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setEror] = useState(null);

  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if(selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setEror('');
    } else {
      setFile(null);
      setEror('Please select an image file (png, jpeg, jpg, gif');
    }
  }

  return (
    <form>
      <label>
        <input type='file' onChange={changeHandler}/>
        <span>+</span>
      </label>
      <div className='output'>
        { error && <div className='error'>{ error }</div> }
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile}/> }
      </div>
    </form>
  )
}

export default UploadForm