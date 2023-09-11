import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
    const navigate = useNavigate();
    var item_value = sessionStorage.getItem("token");
  
    const handleSubmit2 =()=>{
      sessionStorage.clear()
      // localStorage.removeItem('token')
         alert("user as a logout")
        navigate("./")
    }

    function test(){
        if(item_value == 'true'){
            return (
                <>
         <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -2 }}
            onClick={handleSubmit2}
          > <LogoutIcon /> 
            
        </IconButton>  
                </>
      )
        }else{
            return(
                <>
                <Button color="inherit" onClick={()=>(navigate("/registeration"))}>SignUp</Button>
              
              <Button color="inherit" onClick={()=>(navigate("/login"))}>Login</Button>
                </>   
            )    
        }
    }

  return (
    <Box c>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APTIWAY
          </Typography>

        {test()}
          
        </Toolbar>
      </AppBar>
      <div sx={{
        display: 'flex',
        justifyContent: 'center',
        AlignItems: 'center',
      }}> 
        <h3 style={{textAlign:'center',marginTop:'1rem',fontSize:'2rem'}}> welcome to Homepage </h3>
      </div>
    </Box>
  );
}
