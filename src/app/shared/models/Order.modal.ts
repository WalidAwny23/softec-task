import { Product } from "./Product.modal";

export interface Order {
    OrderId: number;
    OrderDate: string;
    UserId: string;
    Products: OrderProduct[];
    PaymentType: string;
}

export interface OrderProduct {
    ProductId: number;
    Quantity: number;
    Product: Product;
}