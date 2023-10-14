import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { Container } from '@mui/material';
import {Link} from 'react-router-dom';
import "../Styles/Animation.css"
export const Navbar = ({account}) =>{ 
    return(
        <Container sx={{width : "100vw", marginTop : "10px" , height : "40px", padding : 0, paddingBottom : "3rem"}}>
            <Container sx={{display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%", alignItems: "center"}}>
                <Link to={"/"} style={{textDecoration: "none"}}><Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", alignSelf : "flex-start"}}>D-rive</Typography></Link>
                <div style={{display: "flex", flexDirection :"row", justifyContent: "space-between", alignItems :"center", paddingLeft: "5rem"}}>
                    <Link to={"/documents"} style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem","&:hover":{color: "#80B3FF", scale: 1.5, transition :"transform 0.2s ease-in-out"} }}>Documents</Typography></Link>
                    <Link to={"/images"} style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem","&:hover":{color: "#80B3FF"} }}>Images</Typography></Link>
                    <Link to={"/others"} style={{ textDecoration: "none" }}><Typography variant="button" color="initial" sx={{ fontFamily: "Rubik, sans-serif", fontWeight: "regular", paddingRight: "5rem","&:hover":{color: "#80B3FF"}}}>Other files</Typography></Link>
                </div>
                <Button variant="contained" id='buttonShare'>Share</Button>
            </Container>
        </Container>
    );
}