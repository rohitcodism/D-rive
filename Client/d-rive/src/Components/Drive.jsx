import { Container } from "@mui/material";
import { Navbar } from "./Navbar";
import { Upload } from "./Upload";

export const Drive = ({account}) => {
    return (
        <div>
            <Navbar account={account} />
            <Upload />
        </div>
    );
}