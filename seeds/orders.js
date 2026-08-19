import OrderStatusEnum from "../src/model/orders/OrderStatusEnum.js";
import { users } from "./users.js";
import { products } from "./products.js";

const formatOrderDate = (date) => new Date(date).toISOString();

const buildOrderProducts = (productIds) =>
  productIds.map(({ productId, quantity }) => {
    const product = products.find((item) => item.productId === productId);

    if (!product) {
      return null;
    }

    return {
      productId: product.productId,
      product: product.product,
      productDescription: product.description,
      quantity,
      unitPrice: product.price,
      totalPrice: Number((product.price * quantity).toFixed(2)),
      image: product.images[0]
    };
  }).filter(Boolean);

const OrderStatus = {
  PENDING: "PENDENTE",
  PROCESSING: "PROCESSANDO",
  SHIPPED: "ENVIADO",
  DELIVERED: "ENTREGUE",
  CANCELED: "CANCELADO",
};

export const orders = [
  {
    orderId: 1,
    orderData: formatOrderDate("2025-04-10T10:30:00.000Z"),
    deliveryTime: "2025-04-11T18:00:00.000Z",
    orderStatus: OrderStatusEnum.DELIVERED,
    totalOrderValue: 79.8,
    user: users.find((user) => user.userId === 2),
    deliveryAddress: "Avenida Paulista, 1578 - Bela Vista",
    addressNumber: "1578",
    addressComplement: "Condomínio Vista Paulista",
    products: buildOrderProducts([
      { productId: 1, quantity: 1 },
      { productId: 5, quantity: 2 }
    ]),
    freight: 0,
    status: OrderStatus.SHIPPED,
  },
  {
    orderId: 2,
    orderData: formatOrderDate("2025-05-05T14:00:00.000Z"),
    deliveryTime: "2025-05-06T19:30:00.000Z",
    orderStatus: OrderStatusEnum.SHIPPED,
    totalOrderValue: 109.8,
    user: users.find((user) => user.userId === 3),
    deliveryAddress: "Rua da Consolação, 889 - Consolação",
    addressNumber: "889",
    addressComplement: "Edifício Luxor",
    products: buildOrderProducts([
      { productId: 3, quantity: 1 },
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 1 }
    ]),
    freight: 0,
    status: OrderStatus.DELIVERED,
  },
  {
    orderId: 3,
    orderData: formatOrderDate("2025-05-11T12:20:00.000Z"),
    deliveryTime: "2025-05-12T20:00:00.000Z",
    orderStatus: OrderStatusEnum.PROCESSING,
    totalOrderValue: 69.9,
    user: users.find((user) => user.userId === 4),
    deliveryAddress: "Avenida Santo Amaro, 730 - Moema",
    addressNumber: "730",
    addressComplement: "Condomínio Parque Moema",
    products: buildOrderProducts([
      { productId: 10, quantity: 1 },
      { productId: 11, quantity: 1 }
    ]),
    freight: 10,
    status: OrderStatus.DELIVERED,
  },
  {
    orderId: 4,
    orderData: formatOrderDate("2025-05-18T09:50:00.000Z"),
    deliveryTime: "2025-05-19T18:20:00.000Z",
    orderStatus: OrderStatusEnum.DELIVERED,
    totalOrderValue: 84.7,
    user: users.find((user) => user.userId === 2),
    deliveryAddress: "Rua Oscar Freire, 420 - Pinheiros",
    addressNumber: "420",
    addressComplement: "Bloco B, térreo",
    products: buildOrderProducts([
      { productId: 2, quantity: 2 },
      { productId: 12, quantity: 1 }
    ]),
    freight: 10,
    status: OrderStatus.PROCESSING,
  },
  {
    orderId: 5,
    orderData: formatOrderDate("2025-06-02T11:05:00.000Z"),
    deliveryTime: "2025-06-03T17:45:00.000Z",
    orderStatus: OrderStatusEnum.PENDING,
    totalOrderValue: 63.8,
    user: users.find((user) => user.userId === 5),
    deliveryAddress: "Rua do Oratório, 123 - Tatuapé",
    addressNumber: "123",
    addressComplement: "Prédio Sol Nascente",
    products: buildOrderProducts([
      { productId: 9, quantity: 1 },
      { productId: 13, quantity: 2 }
    ]),
    freight: 0,
  },
  {
    orderId: 6,
    orderData: formatOrderDate("2025-06-12T16:15:00.000Z"),
    deliveryTime: "2025-06-13T19:10:00.000Z",
    orderStatus: OrderStatusEnum.DELIVERED,
    totalOrderValue: 122.5,
    user: users.find((user) => user.userId === 3),
    deliveryAddress: "Avenida Faria Lima, 2401 - Jardim Paulistano",
    addressNumber: "2401",
    addressComplement: "Prédio Alfa",
    products: buildOrderProducts([
      { productId: 4, quantity: 1 },
      { productId: 15, quantity: 2 }
    ]),
    freight: 20,
    status: OrderStatus.DELIVERED,
  },
  {
    orderId: 7,
    orderData: formatOrderDate("2025-06-18T08:30:00.000Z"),
    deliveryTime: "2025-06-19T20:00:00.000Z",
    orderStatus: OrderStatusEnum.CANCELED,
    totalOrderValue: 44.90,
    user: users.find((user) => user.userId === 4),
    deliveryAddress: "Rua Teodoro Sampaio, 190 - Pinheiros",
    addressNumber: "190",
    addressComplement: "Fundos",
    products: buildOrderProducts([
      { productId: 6, quantity: 1 }
    ]),
    freight: 5,
    status: OrderStatus.PENDING,
  }
];
