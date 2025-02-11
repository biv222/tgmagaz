import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// Демо-данные для примера
const products = [
  {
    id: 1,
    name: 'Товар 1',
    price: 1000,
    image: 'https://via.placeholder.com/200',
    description: 'Описание товара 1'
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 2000,
    image: 'https://via.placeholder.com/200',
    description: 'Описание товара 2'
  },
];

function ProductList() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  {product.price} ₽
                </Typography>
              </CardContent>
              <Button
                size="large"
                variant="contained"
                fullWidth
                onClick={() => navigate(`/product/${product.id}`)}
                sx={{ m: 1 }}
              >
                Подробнее
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList; 