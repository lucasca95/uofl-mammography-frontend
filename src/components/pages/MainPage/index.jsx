import React, { useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import { ImageService } from "../../../services/ImageService";

function MainPage(){
    const [img, setImg] = useState(null);

    const updateImg = (image) => {
      setImg(image);
      // console.log("Imagen fue cargada");
      // console.log(image);
      ImageService.sendImgPOST(image)
      .then((data)=>{
        if (data.status !== 200){
          console.warn(data);
        }
      })
      .catch((e)=>{
        // alert("An error has occurred");
        console.warn(e);
      })
      .then(()=>{
        alert("success");
      });
    }

    useEffect(()=>{
    }, []);
    return (
        <MainTemplate img={img} updateImg={updateImg}/>
    );
  }

export default MainPage;