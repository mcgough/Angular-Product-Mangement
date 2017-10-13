export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  quantity: number;
  category: string;
}

export interface IGetProduct {
  product: IProduct;
  previous: IProduct;
  next: IProduct;
}