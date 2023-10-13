import { Box, ImageList } from "@mui/material";

export const Display = () => {
    return(
        <Box sx={{height: "450px", width: "500px", overflowY: "scroll"}}>
            <ImageList 
                variant="masonry"
                cols={6}
                gap={8}
            >

            </ImageList>
        </Box>
    );
}