import React, { useState } from 'react'
import { Spin, Upload, message,Button } from "antd"
const UploadFile = () => {
    const [image,setImage]=useState("");

    const handleUploadChange=({image})=>{
        setImage(image)
    }
 

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: '100vh'
            
            }}>
            <Upload.Dragger multiple
                listType="picture"
                action={"http://localhost:3000/"}
                accept='.png,.jpg'
                progress={{
                    strokeWidth: 3,
                    strokeColor: {
                        "0%": "#f0f",
                        "100%": "#ff0"
                    },
                }}
                beforeUpload={(file) => {
                    const isLt2M = file.size / 1024 / 1024 < 2;
                    if (!isLt2M) {
                        message.error('Image must smaller than 2MB!');
                    }
                    return isLt2M;
                }}
                onChange={handleUploadChange}
                iconRender={()=>{
                    return <Spin></Spin>
                }}
            >
                <Button className='btn btn-success' >Upload</Button>
            </Upload.Dragger>
           
            <img src={{image}}></img>
        </div>
    )
}

export default UploadFile
