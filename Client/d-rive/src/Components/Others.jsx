import { Box, Typography } from "@mui/material";
import { Navbar } from "./Navbar";

export const Others = () => {
    return(
        <Box>
            <Navbar />
            <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", paddingBottom : "2rem", paddingTop: "4rem"}} gutterBottom>Other files</Typography>
        </Box>
    );
}