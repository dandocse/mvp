export default interface Models {
  Product: {
    price: number;
    title: string;
    rating: number;
    category: any;
    imgUrl: string;
    discount: number;
    id: any;
  };

  MainCarouselItem: {
    title?: string;
    description?: string;
    buttonLik?: string;
    buttonText?: string;
    imgUrl?: string;
  };
  ArrivalItem: {};
}
