import type { IPlan } from "~/typescript/interfaces";

export const annual = [
  {
    type: "Basic",
    price: "199.99",
    options: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    type: "Professional",
    price: "249.99",
    options: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    type: "Master",
    price: "399.99",
    options: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
] as IPlan[];

export const monthly = [
  {
    type: "Basic",
    price: "19.99",
    options: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    type: "Professional",
    price: "24.99",
    options: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    type: "Master",
    price: "39.99",
    options: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
] as IPlan[];
