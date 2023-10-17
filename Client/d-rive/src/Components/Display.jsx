import { Box, ImageList, Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import { useState } from "react";

export const Display = ({ account, contract }) => {

    const [data, setData] = useState(null);

    const getData = async () => {
        let dataList;
        account && contract ? console.log(`Display : ${account}, ${contract.address}`) : "error";
        try {
            dataList = await contract.display(account);
            console.log(`Data List : ${dataList}`)
        } catch (error) {
            console.error(error);
        }

        const isEmpty = Object.keys(dataList).length == 0;

        if(!isEmpty){
            const images = dataList.map((item, i) =>{
                return(
                    <a href={item} key={`a-${i}`} target="_blank" rel="noopener noreferrer">
                        <img src={item} alt={`img-${i}`} key={`Image-${i}`} className="image-List"/>
                    </a>
                );
            })
            if(!data)
                setData(images);
        }
    }

    getData();

    console.log(data);


    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Typography variant="h4" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "bold", paddingBottom: "2rem", paddingTop: "4rem" }} gutterBottom>Images</Typography>
            <Box sx={{ height: "450px", width: "100%", overflowY: "scroll" }}>
                {/* <ImageList
                    variant="masonry"
                    cols={6}
                    gap={8}
                >
                    {data}
                </ImageList> */}
                <div className="img-list">{data}</div>
            </Box>
        </Box>
    );
}