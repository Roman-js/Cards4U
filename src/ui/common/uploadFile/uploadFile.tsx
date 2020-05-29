import React, {ChangeEvent, useRef, useState} from "react";
import Input from "../Input";
import Button from "../Button";
import {filesApi} from "../../../dal/api";



const UploadFile = () => {

    const inRef = useRef<HTMLInputElement>(null);

    const [code, setCode] = useState(true);
    const [text, setText] = useState('');
    const [file, setFile] = useState();
    const [fileURL, setFileURL] = useState();
    const [fileData, setFileData] = useState();
    const [file64, setFile64] = useState();
    const [base64, setBase64] = useState(true);

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const newFile = e.target.files && e.target.files[0];


        const reader = new FileReader();
        const formData = new FormData();


        if(newFile){
            setFile(newFile);
            setFileURL(window.URL.createObjectURL(newFile));
            formData.append('myFile', newFile, newFile.name);
            setFileData(formData);

            if (code) {
                debugger
                reader.onloadend = () => {
                    setFile64(reader.result);

                };

                if (base64) {
                    debugger
                    reader.readAsDataURL(newFile);
                }
                else reader.readAsText(newFile)
            }
        }
    };

    const send = () =>{
        filesApi.postFile(fileData)
    };
    return (
        <div>
           {/* <div>
                reader
                <Input type={"checkbox"}
                       checked={code}
                onChange={e => setCode(e.currentTarget.checked)}/>
            </div>
            <div>
                base64
                <Input type={"checkbox"}
                       checked={base64}
                       onChange={e=> setBase64(e.currentTarget.checked)}/>
            </div>*/}
            <img src={file64} alt={'file'} width={'300px'}/>
            <div>name: {file && file.name}</div>
            <div>last Modified: {file && file.lastModified}</div>
            <div>size: {file && file.size}</div>
            <div>type: {file && file.type}</div>
            <input type={'file'}
                   accept='.jpg, .jpeg, .png, .gif'
                   ref={inRef}
                   onChange={upload}
                   style={{display: 'none'}}/>
            <Button typeOfButton={"button"}
                    actionOfButton={() => inRef && inRef.current && inRef.current.click()}
                    nameOfButton='add'/>
            <div>
                <textarea value={text} onChange={e => setText(e.currentTarget.value)}/>
            </div>

            <Button typeOfButton={'button'}
                    actionOfButton={() =>{} //writeFile('Text.txt', text + `\r\n` + file64)
                    }
                    nameOfButton='save'/>{' '}
            <Button typeOfButton={'button'}
                    actionOfButton={send} nameOfButton='send'/>{' '}
            <Button typeOfButton={'button'}
                    actionOfButton={() =>{filesApi.getFile()} //getFile(baseURL + 'file', 'newFile.jpg')
                    }
                    nameOfButton='get'/>

            {/*<input type="file" accept=".jpg, .jpeg, .png" multiple/>*/}
        </div>

    )
};


export default UploadFile;