import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

const Categories = () => {
  const categories = ['Electronics', 'Fashion', 'Home Appliances', 'Beauty', 'Sports'];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://via.placeholder.com/150?text=${category}`}
                alt={category}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;

