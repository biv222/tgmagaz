import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

function App() {
  const [cart, setCart] = useState([]);
  const { webApp, platform } = useWebApp();
  
  useEffect(() => {
    if (webApp) {
      webApp.ready();
      webApp.expand();
      
      // Устанавливаем цвет верхней панели
      webApp.setHeaderColor('#1976d2');
      
      // Устанавливаем основной цвет
      webApp.setBackgroundColor('#ffffff');
    }
  }, [webApp]);
  
  const products = [
    {
      id: 1,
      name: 'Robux 400',
      description: '400 Robux для Roblox',
      price: 299,
      image: 'https://images.rbxcdn.com/9519f05c9daa0fc104ab55c0f7ad3750.svg'
    },
    {
      id: 2,
      name: 'Robux 800',
      description: '800 Robux для Roblox',
      price: 599,
      image: 'https://images.rbxcdn.com/9519f05c9daa0fc104ab55c0f7ad3750.svg'
    },
    {
      id: 3,
      name: 'Robux 1700',
      description: '1700 Robux для Roblox',
      price: 1199,
      image: 'https://images.rbxcdn.com/9519f05c9daa0fc104ab55c0f7ad3750.svg'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    if (webApp) {
      webApp.HapticFeedback.impactOccurred('light');
    }
  };

  // Проверяем, запущено ли приложение в Telegram
  const isTelegram = Boolean(window.Telegram?.WebApp);

  if (!isTelegram) {
    return (
      <Container>
        <Typography variant="h5" sx={{ mt: 4 }}>
          Это приложение доступно только через Telegram
        </Typography>
      </Container>
    );
  }

  return (
    <div style={{ 
      backgroundColor: webApp?.themeParams?.bg_color || '#fff',
      color: webApp?.themeParams?.text_color || '#000',
      minHeight: '100vh'
    }}>
      <AppBar position="static" sx={{ 
        backgroundColor: webApp?.themeParams?.secondary_bg_color || '#1976d2'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Магазин Robux
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: webApp?.themeParams?.secondary_bg_color || '#fff',
                color: webApp?.themeParams?.text_color || '#000'
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: webApp?.themeParams?.hint_color || 'text.secondary'
                  }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    color: webApp?.themeParams?.link_color || 'primary',
                    mt: 2 
                  }}>
                    {product.price} ₽
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      mt: 2,
                      backgroundColor: webApp?.themeParams?.button_color || 'primary.main',
                      color: webApp?.themeParams?.button_text_color || '#fff'
                    }}
                    onClick={() => addToCart(product)}
                  >
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App; 