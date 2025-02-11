import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { MainButton, useWebApp } from '@vkruglikov/react-telegram-web-app';
import config from '../config';

function Cart() {
  const webApp = useWebApp();
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Товар 1', price: 1000, quantity: 1 },
  ]);

  const totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Отправляем данные заказа боту
    fetch(`${config.API_URL}/bot${config.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: webApp?.initDataUnsafe?.user?.id,
        text: `Новый заказ!\n\nТовары:\n${cartItems.map(item => 
          `${item.name} - ${item.price}₽ x ${item.quantity}`
        ).join('\n')}\n\nИтого: ${totalSum}₽\n\nВремя заказа: ${new Date().toLocaleString()}`,
        parse_mode: 'HTML'
      }),
    })
    .then(() => {
      // Очищаем корзину и закрываем приложение
      setCartItems([]);
      webApp?.close();
    })
    .catch(error => {
      console.error('Ошибка при оформлении заказа:', error);
      alert('Произошла ошибка при оформлении заказа. Попробуйте позже.');
    });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Корзина
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Корзина пуста</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondary={`${item.price} ₽ x ${item.quantity}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Итого: {totalSum} ₽
            </Typography>
            
            <MainButton text="Оформить заказ" onClick={handleCheckout} />
          </Box>
        </>
      )}
    </Container>
  );
}

export default Cart; 