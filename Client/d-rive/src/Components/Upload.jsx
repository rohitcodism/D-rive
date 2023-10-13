import { Button, Container } from "@mui/material";
import { UploadCloudIcon } from "lucide-react";

export const Upload = () => {
    return(
        <Container sx={{marginTop: "10rem"}}>
            <Button variant="contained" LinkComponent="label" endIcon={<UploadCloudIcon />} sx={{backgroundColor: "#00DFA2", cursor: "pointer", borderRadius : "15px", width: "120px", height: "40px", fontFamily: "Rubik, sans-serif", fontWeight: "bold", "&:hover":{backgroundColor: "#242424", border: "2px solid #00DFA2", color: "#00DFA2"}}}>Upload</Button>
        </Container>
    );
}