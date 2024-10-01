import React, { useState } from 'react';
import {
  Drawer, Typography, Badge, AppBar, Toolbar, Button, List, ListItem, ListItemText, IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

function CartItem() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Sample products
  const sampleProducts = [
    { id: 1, name: "Product 1", price: "10$" },
    { id: 2, name: 'Product 2', price: '200$' },
  ];

  // Toggle Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Add item to cart
  const handleCartItem = (item) => {
    const exists = cartItems.some(cartItem => cartItem.id === item.id);
    if (!exists) {
      setCartItems((prevItems) => [...prevItems, item]);
    } else {
      alert("Item already exists in the cart");
    }
  };

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Submit cart items
  const handleSubmitCart = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const data = { items: cartItems.map(item => ({ id: item.id })) };

    axios.post('http://127.0.0.1:8000/api/submit_cart/', data)
      .then((response) => {
        alert("Cart submitted successfully!");
        setCartItems([]); // Clear cart after successful submission
      })
      .catch((error) => {
        console.error('Error submitting cart:', error);
      });
  };

  return (
    <div>
      {/* App Bar with Shopping Cart Icon */}
      <AppBar position='static'>
        <Toolbar>
          <IconButton color='inherit' onClick={toggleDrawer(true)}>
            <Badge color="secondary" badgeContent={cartItems.length}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Add sample products to cart */}
      <div style={{ padding: 16 }}>
        {sampleProducts.map((product) => (
          <Button
            key={product.id}
            style={{ marginRight: 8 }}
            variant="contained"
            color="primary"
            onClick={() => handleCartItem(product)}
          >
            Add {product.name} to Cart
          </Button>
        ))}
      </div>

      {/* Drawer for Cart Items */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: 300, padding: 16 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <List>
            {cartItems.length === 0 ? (
              <Typography variant="body1">Cart is empty.</Typography>
            ) : (
              cartItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} secondary={item.price} />
                  <Button color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                </ListItem>
              ))
            )}
          </List>

          {/* Submit Cart Button */}
          {cartItems.length > 0 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitCart}
              style={{ marginTop: 16 }}
            >
              Submit Cart
            </Button>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default CartItem;
