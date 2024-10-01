import { Badge, BottomNavigation, BottomNavigationAction, Paper,Box,Container,Typography } from '@mui/material';
import React, { useState } from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Footer() {
    const [value, setValue] =useState(0);
    const [recentscount ,setRecentsCount]=useState(0)
    const [favoritecount , setFavoriteCount] =useState(0)
    const [location , setLocation] =useState({lat:null , lng:null})
    const [locationcount , setLocationCount] =useState(0)

    const fetchUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ lat: latitude, lng: longitude });
              console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
              setLocationCount(prevCount => prevCount + 1);
            },
            (error) => {
              console.error("Error retrieving location: ", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }

}
    const handleNavigationChange= (event,newValue)=>{
        setValue(newValue)
        if (newValue === 1){
            console.log("Recents Icon clicked")
            setRecentsCount(prevCount => prevCount + 1)
        }
        else if(newValue ===2){
            console.log("Favorite Icon Called")
            setFavoriteCount(prevCount => prevCount +1)
        }
        else if(newValue ===3){
            console.log("locathion called")
            fetchUserLocation();
        }

    }
  return (
    <div>
        <h1>footer</h1>
        <div>
        <Box sx={{ bgcolor: 'primary.main', p: 3, mt: 4, textAlign: 'center' }}>
      <Container>
        <Typography variant="body1" color="white">
          &copy; 2024 Daraz - All Rights Reserved
        </Typography>
      </Container>
    </Box>
        </div>

    <div>
    <Paper sx={{position:'fixed', bottom:0,left:0 , right:0}}>
        <BottomNavigation
        value={value}
        onChange={handleNavigationChange

        }
        >
            Show Labels
            <BottomNavigationAction label='Recents'icon={<Badge color="primary" badgeContent={recentscount}><RestoreIcon/></Badge>}></BottomNavigationAction>
            <BottomNavigationAction label="Favourit" icon={<Badge color='secondary' badgeContent={favoritecount}><FavoriteIcon/></Badge>}></BottomNavigationAction>
            <BottomNavigationAction label="Location" icon={<Badge badgeContent={locationcount}><LocationOnIcon/></Badge>}></BottomNavigationAction>
        </BottomNavigation>
      </Paper>
      {location.lat && location.lng && (
        <div>
          <h2>Current Location:</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}

    </div>
    </div>
  )
}

export default Footer
