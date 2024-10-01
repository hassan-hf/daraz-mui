import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

const FeaturedProducts = () => {
  const products = [
    { name: 'Product 1', price: '$50', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$75', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$100', image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', price: '$125', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Featured Products</Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
