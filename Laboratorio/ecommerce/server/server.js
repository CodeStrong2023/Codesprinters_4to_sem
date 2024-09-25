const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const { MercadoPagoConfig, Preference } = require("mercadopago");
const path = require("path");
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
// SDK de Mercado Pago
// Agrega credenciales
const client = new MercadoPagoConfig({
  accessToken:
    "APP_USR-7298770675652049-091619-356082f443cfcee1fcec4ea7af15204b-303770033",
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const preference = new Preference(client);

app.use(express.static(path.join(__dirname, "../client")));

app.use(cors());
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
});

app.post("/create_preference", (req, res) => {
  const preference = new Preference(client);

  preference
    .create({
      body: {
        items: [
          {
            title: "Compra E-commerce",
            quantity: 1,
            unit_price: req.body.price,
          },
        ],
      },
    })
    .then(function (response) {
      res.json({
        id: response.id,
      });
    })
    .catch(console.log);
});

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
