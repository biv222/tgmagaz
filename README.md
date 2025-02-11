# Telegram Mini App Shop

Магазин на базе Telegram Mini Apps.

## Установка

```bash
npm install
```

## Запуск для разработки

```bash
npm start
```

## Сборка и запуск для продакшена

1. Соберите приложение:
```bash
npm run build
```

2. Запустите собранное приложение:
```bash
npm run serve
```

Приложение будет доступно по адресу http://localhost:3000

## Настройка бота

1. Откройте @BotFather в Telegram
2. Отправьте команду /mybots
3. Выберите вашего бота (@paykeyrodrop_bot)
4. Перейдите в Bot Settings > Menu Button
5. Нажмите "Configure Menu Button"
6. Введите URL вашего веб-приложения (например, http://ваш-домен/tg-shop)

## Переменные окружения

Создайте файл .env в корне проекта:

```env
REACT_APP_BOT_TOKEN=7777090582:AAE34MQ_Ar0m2uN1xgFskmG3j7Qqj-_fMlQ
REACT_APP_BOT_NAME=@paykeyrodrop_bot
```

## Размещение на хостинге

1. Загрузите содержимое папки `build` на ваш хостинг
2. Настройте ваш веб-сервер (Apache/Nginx) для обработки всех запросов через index.html
3. Обновите URL в настройках бота через @BotFather

### Пример конфигурации Nginx:

```nginx
server {
    listen 80;
    server_name ваш-домен;

    root /путь/к/папке/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Технологии

- React
- Material-UI
- Telegram Web App API 