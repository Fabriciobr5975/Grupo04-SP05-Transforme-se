import { addresses } from "./addresses.js";
import { reviews } from "./reviews.js";

const addressesByUser = addresses.reduce((map, address) => {
  if (!map.has(address.userId)) {
    map.set(address.userId, []);
  }

  map.get(address.userId).push(address);
  return map;
}, new Map());

const reviewsByUser = reviews.reduce((map, review) => {
  if (!map.has(review.userId)) {
    map.set(review.userId, []);
  }

  map.get(review.userId).push(review);
  return map;
}, new Map());

export const users = [
  {
    userId: 1,
    firstName: "Ana",
    lastName: "Marques",
    email: "ana.marques@email.com",
    password: "senha123",
    phoneNumber: "11988887777",
    cpf: "11122233344",
    accountCreateAt: "2026-07-15T10:30:00Z",
    addresses: [],
    reviews: []
  },
  {
    userId: 2,
    firstName: "Bruno",
    lastName: "Costa",
    email: "bruno.costa@email.com",
    password: "senha123",
    phoneNumber: "11977776666",
    cpf: "22233344455",
    accountCreateAt: "2026-02-20T14:45:00Z",
    addresses: addressesByUser.get(2) || [],
    reviews: reviewsByUser.get(2) || []
  },
  {
    userId: 3,
    firstName: "Carla",
    lastName: "Souza",
    email: "carla.souza@email.com",
    password: "senha123",
    phoneNumber: "11966665555",
    cpf: "33344455566",
    accountCreateAt: "2026-03-10T09:15:00Z",
    addresses: addressesByUser.get(3) || [],
    reviews: reviewsByUser.get(3) || []
  },
  {
    userId: 4,
    firstName: "Diego",
    lastName: "Lima",
    email: "diego.lima@email.com",
    password: "senha123",
    phoneNumber: "11955554444",
    cpf: "44455566677",
    accountCreateAt: "2026-04-25T16:20:00Z",
    addresses: addressesByUser.get(4) || [],
    reviews: reviewsByUser.get(4) || []
  },
  {
    userId: 5,
    firstName: "Emília",
    lastName: "Rocha",
    email: "emilia.rocha@email.com",
    password: "senha123",
    phoneNumber: "11944443333",
    cpf: "55566677788",
    accountCreateAt: "2026-05-30T11:10:00Z",
    addresses: addressesByUser.get(5) || [],
    reviews: reviewsByUser.get(5) || []
  }
];
