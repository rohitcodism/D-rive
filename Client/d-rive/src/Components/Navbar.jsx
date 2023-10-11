import Typography from '@mui/material'
import Button from '@mui/material'
import { Container } from '@mui/material';
export const Navbar = () =>{ 
    return(
        <div style={{marginTop : "10px", height : "100vh"}}>
            <Container style={{display : "flex", flexDirection : "row", justifyContent : "space-between", alignItems : "center"}}>
                <Typography variant="h4" color="initial" sx={{fontFamily : "Rubik, sans-serif", fontWeight : "bold", alignSelf : "flex-start"}}>D-rive</Typography>
                <Button variant="contained" sx={{backgroundColor: "#00DBDE",backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)", fontFamily : "Rubik, sans-serif", fontWeight : "medium", width : "100px", borderRadius : "10px"}}>Share</Button>
            </Container>
        </div>
    );
}