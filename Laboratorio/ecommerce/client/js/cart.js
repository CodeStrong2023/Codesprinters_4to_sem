const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";
  const modalHeader = document.createElement("div");

  const modalClose = document.createElement("div");
  modalClose.innerText = "❌";
  modalClose.className = "modal-close";
  modalHeader.append(modalClose);

  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Carrito";
  modalTitle.className = "modal-title";
  modalHeader.append(modalTitle);

  modalContainer.append(modalHeader);

  if (cart.length > 0) {
    cart.forEach((product) => {
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h3>${product.productName}</h3>
                </div>
            <div class="quantity">
                <span class="quantity-btn-decrese">-</span>
                <span class="quantity-input"> ${product.quanty} </span>
                <span class="quantity-btn-increse">+</span>
            <div class="result-container">
                <div class="price">${product.price * product.quanty}  $</div>
                <div class="delete-product">❌</div>
        </div>`;
      modalContainer.append(modalBody);

      const decrese = modalBody.querySelector(".quantity-btn-decrese");
      decrese.addEventListener("click", () => {
        if (product.quanty !== 1) {
          product.quanty--;
          displayCart();
          displayCartCounter();
        }
      });
      const increse = modalBody.querySelector(".quantity-btn-increse");
      increse.addEventListener("click", () => {
        product.quanty++;
        displayCart();
        displayCartCounter();
      });

      const deleteProduct = modalBody.querySelector(".delete-product");
      deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
    <div class="total-price">Total: $${total} </div>
    <button class="buy-btn" id="checkout-btn">Comprar</button>
    <div id="wallet_container"></div>
    `;

    modalContainer.append(modalFooter);
    console.log(MercadoPago);
    const mp = new MercadoPago("APP_USR-017737a0-12b7-4d1e-b066-dc97b7b7b8ca", {
      locale: "es-AR",
    });
    const bricksBuilder = mp.bricks();
    const createCheckoutButton = (preferenceId) => {
      console.log("SOY PREFECENTE");
      console.log(preferenceId);
      const renderComponent = async () => {
        await mp.bricks().create("wallet", "wallet_container", {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error) => console.log(error),
            onReady: () => console.log("ready"),
          },
          customization: {
            texts: {
              valueProp: "smart_option",
            },
          },
        });
      };
      window.checkoutButton = renderComponent(bricksBuilder);
    };
    const checkoutButton = document.getElementById("checkout-btn");

    checkoutButton.addEventListener("click", () => {
      checkoutButton.remove();
      const orderData = {
        quantity: 1,

        price: total,
      };
      fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then((response) => {
          return response.json();
        })
        .then((preference) => {
          createCheckoutButton(preference.id);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } else {
    const modalText = document.createElement("h2");
    modalClose.className = "modal-body";
    modalText.innerText = "your cart is empty";
    modalContainer.append(modalText);
  }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element) => element.id === id);
  cart.splice(foundId, 1);
  displayCart();
  displayCartCounter();
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
