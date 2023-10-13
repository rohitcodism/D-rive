import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { Container } from '@mui/material';
import {Link} from 'react-router-dom'
export const Navbar = () =>{ 
    return(
        <Container sx={{width : "100vw", marginTop : "10px" , height : "40px", padding : 0, paddingBottom : "3rem"}}>
            <Container sx={{display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%", alignItems: "center"}}>
                <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", alignSelf : "flex-start"}}>D-rive</Typography>
                <div style={{display: "flex", flexDirection :"row", justifyContent: "space-between", alignItems :"center", paddingLeft: "5rem"}}>
                    <Link style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem" }}>Documents</Typography></Link>
                    <Link style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem" }}>Images</Typography></Link>
                    <Link style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem" }}>Other files</Typography></Link>
                </div>
                <Button variant="contained" sx={{backgroundColor: "#F4D03F",backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)", fontFamily : "Rubik, sans-serif", fontWeight : "medium", width : "100px", borderRadius : "10px", alignSelf : "flex-end", "&:hover":{border:"2px solid linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", color:"linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", backgroundColor: "#242424"}}}>Upload</Button>
                <Button variant="contained" sx={{backgroundColor: "#00DBDE",backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", fontFamily : "Rubik, sans-serif", fontWeight : "medium", width : "100px", borderRadius : "10px", alignSelf : "flex-end", "&:hover":{border:"2px solid linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", color:"linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", backgroundColor: "#242424"}}}>Share</Button>
            </Container>
        </Container>
    );
}