export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    typ?: string;
    brand: string;
    quantityInStock?: number;//?:optional
}