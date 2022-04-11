import React, { useContext, useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import { ImageService } from "../../../services/ImageService";
import TestService from "../../../services/TestService";

function MainPage(){
  const [img, setImg] = useState(null);
  const [messageInfo, setMessageInfo] = useState({code:0, text: ''});

    const updateImg = (image) => {
      setImg(image);
      ImageService.sendImgPOST(image)
      .then((data)=>{
        if (data.status !== 200){
          console.warn(data);
          setMessageInfo({code:2, text: 'Something went wrong'});
          alert('Something went wrong');
        }else{
          setMessageInfo({code:1, text: 'Success'});
          alert('Image has been uploaded successfully');
        }
      })
      .catch((e)=>{
        console.log(e);
        alert("An error has occurred in ImageService");
      });
    }

    const checkBackend = () =>{
      TestService.testGET()
      .then((data)=>{
        (data.status===200) && console.log("Successful connection with backend");        
      })
      .catch((e)=>{
        alert("An error has occured when checking backend");
      });
    };

    useEffect(()=>{
      checkBackend();
    }, []);
    return (
        <MainTemplate 
          messageInfo={messageInfo}
          img={img}
          updateImg={updateImg}/>
    );
  }

export default MainPage;