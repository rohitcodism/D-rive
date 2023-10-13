import { Box, Typography } from "@mui/material";
import {Navbar} from "./Navbar"

export const Documents = () => {
    return(
        <Box>
            <Navbar />
            <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", paddingBottom : "2rem", paddingTop: "4rem"}} gutterBottom>Documents</Typography>
        </Box>
    );
}