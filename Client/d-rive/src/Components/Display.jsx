import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import { useState } from "react";

export const Display = ({ account, contract }) => {

    const [data, setData] = useState(null);

    const getData = async () => {
        let dataList;
        account && contract ? console.log(`Display : ${account}, ${contract.address}`) : "error";
        try {
            dataList = await contract.display(account);
            data ? console.log(`Data List : ${dataList}`) : console.log(`didn't get data`);
        } catch (error) {
            console.error(error);
        }

        const isEmpty = Object.keys(dataList).length == 0;

        if(!isEmpty){
            const images = dataList.map((item, i) =>{
                return(
                    <a href={item} key={`a-${i}`} target="_blank" rel="noopener noreferrer">
                        <img src={item} alt={`img-${i}`} key={`Image-${i}`} className="image-List" style={{height: "200px", width : "160px"}}/>
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
                <div style={{height : "450px", width : "80%"}}>{data}</div>
            </Box>
        </Box>
    );
}

/* {
    "type": "a",
    "key": "a-2",
    "ref": null,
    "props": {
        "href": "https://gateway.pinata.cloud/ipfs/QmX6cfPU2kVVbp2ybQc9tfePPDRayeVAiqqyt1NcXwjqv4",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "children": {
            "type": "img",
            "key": "Image-2",
            "ref": null,
            "props": {
                "src": "https://gateway.pinata.cloud/ipfs/QmX6cfPU2kVVbp2ybQc9tfePPDRayeVAiqqyt1NcXwjqv4",
                "alt": "img-2",
                "className": "image-List"
            },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
} */