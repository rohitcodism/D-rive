import { Box, ImageList, Typography } from "@mui/material";
import { Navbar } from "./Navbar";

export const Display = () => {
    return(
        <Box sx={{display: "flex", flexDirection : "column"}}>
            <Navbar />
            <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", paddingBottom : "2rem", paddingTop: "4rem"}} gutterBottom>Images</Typography>
            <Box sx={{ height: "450px", width: "100%", overflowY: "scroll" }}>
                <ImageList
                    variant="masonry"
                    cols={6}
                    gap={8}
                >

                </ImageList>
            </Box>
        </Box>
    );
}