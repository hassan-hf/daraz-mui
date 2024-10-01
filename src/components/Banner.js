import React from 'react';
import { Container, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Banner = () => {
  const items = [
    { image: 'https://via.placeholder.com/1200x400?text=Big+Sale+50%25+Off', title: 'Big Sale 50% Off' },
    { image: 'https://via.placeholder.com/1200x400?text=Latest+Smartphones', title: 'Latest Smartphones' }
  ];

  return (
    <Container maxWidth="lg">
      <Carousel>
        {items.map((item, index) => (
          <Box key={index}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;

