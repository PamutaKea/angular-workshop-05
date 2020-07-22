export class Product {
  public available: boolean;
  public imageUrl: string;

  constructor(
    public code: string,
    public name: string,
    public price: number,
    public rating: number
  ) {}
}
