import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { Container } from '@mui/material';
export const Navbar = () =>{ 
    return(
        <Container sx={{width : "100vw", marginTop : "10px" , height : "40px", padding : 0, paddingBottom : "3rem"}}>
            <Container sx={{display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%"}}>
                <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", alignSelf : "flex-start"}}>D-rive</Typography>
                <Button variant="contained" sx={{backgroundColor: "#00DBDE",backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", fontFamily : "Rubik, sans-serif", fontWeight : "medium", width : "100px", borderRadius : "10px", alignSelf : "flex-end"}}>Share</Button>
            </Container>
        </Container>
    );
}