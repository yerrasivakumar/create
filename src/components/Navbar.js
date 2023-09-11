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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            APTIWAY
          </Typography>
          <Button color="inherit" onClick={()=>(navigate("/Login"))}>Login</Button>
          
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -3 }}
          >

            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div sx={{
        display: 'flex',
        justifyContent: 'center',
        AlignItems: 'center',
      }}> 
        <h3 style={{textAlign:'center',marginTop:'1rem',fontSize:'2rem'}}> welcome to dashboard </h3>
      </div>
    </Box>
  );
}
