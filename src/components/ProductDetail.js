import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  Chip,
} from '@mui/material';
import { MainButton } from '@vkruglikov/react-telegram-web-app';

// Демо-данные
const products = {
  1: {
    id: 1,
    name: 'Товар 1',
    price: 1000,
    image: 'https://via.placeholder.com/400',
    description: 'Подробное описание товара 1',
    characteristics: [
      { name: 'Характеристика 1', value: 'Значение 1' },
      { name: 'Характеристика 2', value: 'Значение 2' },
    ]
  }
};

function ProductDetail() {
  const { id } = useParams();
  const product = products[id];

  const handleAddToCart = () => {
    // Здесь будет логика добавления в корзину
    console.log('Добавление в корзину:', product);
  };

  if (!product) {
    return (
      <Container>
        <Typography variant="h5">Товар не найден</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ height: 400 }}
            />
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          
          <Typography variant="h5" color="primary" gutterBottom>
            {product.price} ₽
          </Typography>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Характеристики:
            </Typography>
            {product.characteristics.map((char, index) => (
              <Chip
                key={index}
                label={`${char.name}: ${char.value}`}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>

          <MainButton text="Добавить в корзину" onClick={handleAddToCart} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail; 