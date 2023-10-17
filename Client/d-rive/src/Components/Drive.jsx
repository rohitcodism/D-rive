import { Container } from "@mui/material";
import { Navbar } from "./Navbar";
import { Upload } from "./Upload";

export const GDrive = ({account, contract}) => {

    console.log(`Drive Component : Account :  ${account}, contract : ${contract}`);

    return (
        <div>
            <Navbar account={account} />
            <Upload account={account} contract={contract}/>
        </div>
    );
}