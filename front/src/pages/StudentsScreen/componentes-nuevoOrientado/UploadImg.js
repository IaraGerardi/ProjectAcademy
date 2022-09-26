import React from 'react'
import { useRef, useState, useEffect } from "react";
import './upload.css'
import img from '../img/orientadoDefault-removebg-preview.png'

export const UploadImg = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(image);
        } else {
          setPreview(null);
        }
      }, [image]);
    

  return (
    <div>
        {preview ? (
          <img
          className="imgProfile"
            src={preview}
            style={{ objectFit: "cover" }}
            onClick={() => {
              setImage(null)
            }}
            alt='default'
          />
        ) : (
          <button
          className="btnUpload"
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
           <img src={img} alt='profile' />
          </button>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          name="photoProfile"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
    </div>
  )
}
