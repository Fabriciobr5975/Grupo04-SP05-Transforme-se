import { products } from "./products.js";
import { users } from "./users.js";

const cartProduct = (productId, quantity) => {
  const product = products.find((item) => item.productId === productId);

  if (!product) {
    return null;
  }

  return {
    productId: product.productId,
    name: product.name,
    category: product.category,
    productQuantity: product.productQuantity,
    unitPrice: product.price,
    freight: Math.floor(Math.random() * (40 - 10) + 10),
    image: product.images[0]
  };
};

export const carts = [
  {
    cartId: 1,
    user: users.find((user) => user.userId === 2),
    quantity: 3,
    products: [
      cartProduct(1, 1),
      cartProduct(5, 2)
    ].filter(Boolean),
    freight: 0,
  },
  {
    cartId: 2,
    user: users.find((user) => user.userId === 4),
    quantity: 2,
    products: [
      cartProduct(10, 1),
      cartProduct(11, 1)
    ].filter(Boolean),
    freight: 10,
  }
];
