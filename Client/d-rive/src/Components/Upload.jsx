// 1. handle image : upload image to ipfs
// 2. Retrieve file



import { Button, Container } from "@mui/material";
import { UploadCloudIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";

export const Upload = ({account, contract, provider}) => {

    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)

    const retrieveFile = (event) => {
        const data = event.target.files[0];
        const reader = window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onLoadEnd = () => {
            setFile(event.target.files[0])
        }
        setFileName(event.target.file[0].name);
        event.preventDefault();
    }



    const uploadRef = useRef(null);

    const handleClick = (event) => {
        const data = event.target.files[0];
        const reader = window.FileReader();
        reader.readAsArrayBuffer(data);

    }

    return(
        <Container sx={{marginTop: "10rem", display: "flex", flexDirection :"row", justifyContent: "space-evenly", alignItems: "center"}}>
        <Button variant="contained" LinkComponent="label" endIcon={<Paperclip />} onClick={handleClick} sx={{backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2", cursor: "pointer", borderRadius : "15px", width: "150px", height: "60px", fontFamily: "Rubik, sans-serif", fontWeight: "bold", "&:hover":{backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2"}}}>Choose file<input type="file" ref={uploadRef} hidden onChange={retrieveFile} /></Button>
            <Button variant="contained" LinkComponent="label" endIcon={<UploadCloudIcon />} onClick={handleClick} sx={{backgroundColor: "#00DFA2", cursor: "pointer", borderRadius : "15px", width: "120px", height: "40px", fontFamily: "Rubik, sans-serif", fontWeight: "bold", "&:hover":{backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2"}}}>Upload</Button>

        </Container>
    );
}

/* <Paperclip /> */