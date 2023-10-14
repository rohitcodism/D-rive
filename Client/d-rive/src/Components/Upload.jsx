// 1. handle image : upload image to ipfs
// 2. Retrieve file



import { Button, Container } from "@mui/material";
import { UploadCloudIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import "../Styles/Swal.css"

export const Upload = ({ account, contract, provider }) => {

    const uploadRef = useRef(null);
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)

    const handleUpload = async (event) => {
        event.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: "8ef085ddd1e4817de4f1",
                        pinata_secret_api_key: "d4acbdca707a1a9d8128736962801737f00d04d9b248eacc7e2a0c70974d584e",
                        "Content-Type":"multipart/form-data",
                    },
                });
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                console.log(ImgHash); // hash of the uploaded image
                Swal.fire({
                    customClass : {
                        popup : "custom-done",
                        confirmButton : "button-noError"
                    },
                    background : "#242424",
                    icon: 'success',
                    title: "Yep !!",
                    text : "Uploaded successfully",
                    confirmButtonText: "Cool",
                    showCloseButton: "true",
                })
            } catch (error) {
                Swal.fire({
                    customClass : {
                        popup : "custom-error",
                        confirmButton : "button-error"
                    },
                    background : "#242424",
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonText :"Okay",
                    showCloseButton :true,
                })
            }
        }
    }

    const retrieveFile = (event) => {
        const data = event.target.files[0];
        console.log(data);
        const reader = new window.FileReader();
        if (data) {
            reader.readAsArrayBuffer(data);
            console.log('data read')
            reader.onloadend = () => {
                console.log('internal function called')
                setFile(event.target.files[0]) ? console.log("data set") : console.log(`not set`);
                console.log(`Set file : ${file}`);
            }
            console.log(event.target.files[0].name);
            setFileName(event.target.files[0].name);
            event.preventDefault();
        }
    }

    const handleClick = () => {
        uploadRef.current.click();
    }

    return (
        <Container sx={{ marginTop: "10rem", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
            <form className="form" onSubmit={handleUpload} style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%"}}>
                <Button variant="contained" LinkComponent="label" endIcon={<Paperclip />} onClick={handleClick} sx={{ backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2", cursor: "pointer", borderRadius: "15px", width: "150px", height: "60px", fontFamily: "Rubik, sans-serif", fontWeight: "bold", "&:hover": { backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2" } }}>Choose file<input type="file" ref={uploadRef} hidden onChange={retrieveFile} /></Button>
                <Button type="submit" variant="contained" LinkComponent="label" endIcon={<UploadCloudIcon />} sx={{ backgroundColor: "#00DFA2", cursor: "pointer", borderRadius: "15px", width: "120px", height: "40px", fontFamily: "Rubik, sans-serif", fontWeight: "bold", "&:hover": { backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2" } }}>Upload</Button>
            </form>
        </Container>
    );
}