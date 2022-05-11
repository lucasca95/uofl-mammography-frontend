import React, { useContext, useEffect, useState } from "react";
import MainTemplate from "../../templates/MainTemplate";
import { ImageService } from "../../../services/ImageService";
import TestService from "../../../services/TestService";
import fileDownload from "js-file-download";
// import {saveAs} from "file-saver";

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
          setMessageInfo({code:1, text: `Success. Processing code: ${data.code}`});
          alert(`Image has been uploaded successfully.
          Processing code: #${data.code}`);
        }
      })
      .catch((e)=>{
        console.log(e);
        alert("An error has occurred in ImageService");
      });
    };

    const searchImg = (code) => { 
      ImageService.searchImgGET(code)
      .then((data)=>{
        if (data.type === 'image/png'){
          // fileDownload(data, 'file.png');
        } else {
          setMessageInfo({code:2, text: 'Something went wrong'});
        }
      })
      .catch(error=>{
        console.log(error);
        alert("An error has occurred in ImageService");
      })
    };

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
      // checkBackend();
    }, []);
    return (
        <div>
          <MainTemplate 
            messageInfo={messageInfo}
            img={img}
            searchImg={searchImg}
            updateImg={updateImg}/>
          {/* {(messageInfo.code === 0) && 
            <div >asd</div>
          } */}
        </div>
    );
  }

export default MainPage;