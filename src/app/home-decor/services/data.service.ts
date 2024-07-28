import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    {
    id : 1,
    productName: "Earthy Vases Set",
    price: "1,630.00", afterDiscount: "1,304.00",
    description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
    forntImageUrl:"https://ariika.com/cdn/shop/files/KHA_2534_540x.jpg?v=1702571032",
    BackImageUrl:"https://ariika.com/cdn/shop/files/KHA_2530_540x.jpg?v=1702571031",
    thirdImageUrl:"https://ariika.com/cdn/shop/files/KHA_2529_720x.jpg?v=1702571032",
    fourthImageUrl:"https://ariika.com/cdn/shop/files/IMG_5145_720x.jpg?v=1705412993" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/files/IMG_5166_720x.jpg?v=1705413495"

    },

    {
    id : 2,
    productName: "Petra Vases Set",
    price: "1,750.00", afterDiscount: "1,400.00",
    description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
    forntImageUrl:"https://ariika.com/cdn/shop/files/KHA_2661_540x.jpg?v=1702570633",
    BackImageUrl:"https://ariika.com/cdn/shop/files/KHA_2651_540x.jpg?v=1702570635",
    thirdImageUrl:"https://ariika.com/cdn/shop/files/KHA_2649_720x.jpg?v=1702570634",
    fourthImageUrl:"https://ariika.com/cdn/shop/files/IMG_8187_720x.jpg?v=1705413730" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/files/IMG_8204_720x.jpg?v=1705413704"
    },

    {
    id : 3,
    productName: "Grotto Table Lamp",
    price: "1,060.00", afterDiscount: "848.00",
    description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0105copy_540x.jpg?v=1661686190",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-09_500c8d37-d675-4d67-aac2-30f32a96424f_540x.jpg?v=1662646727",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0112copy_720x.jpg?v=1661686190",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0105copy-Copy_720x.jpg?v=1661686190" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0112copy-Copy_720x.jpg?v=1662646727"
    },

    {
    id: 4,
    productName: "Bungalow Pottery Lighting Unit",
    price: "250.00", afterDiscount: "200.00",
    description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0119copy_540x.jpg?v=1661432063",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1_942b6caa-fa84-48ab-88d7-a1405bae3df7_720x.jpg?v=1664271318",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-19_cb954b47-ceaf-4e95-989a-727633f90692_720x.jpg?v=1661685735",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0124copy_720x.jpg?v=1662288255" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/3_4f62d973-d5ad-4bf2-8ba2-5a470805ee93_720x.jpg?v=1669281188"
    },

    {
    id: 5,
    productName: "Crumple Plant Pot",
    price: "630.00", afterDiscount: "504.00",
    description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0134copy_540x.jpg?v=1661433543",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-07_d5396ba2-fefd-4cda-80c7-5bba571d4547_540x.jpg?v=1661685845",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0067copy_720x.jpg?v=1661685852",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0064copy_720x.jpg?v=1669034262" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0130copy_720x.jpg?v=1661683556"
    },

    {
      id: 6,
      productName: "Concrete Jungle Plant Pot",
      price: "880.00", afterDiscount: "LE 704.00",
      description:"The essence of crafty and rustic aesthetics, each piece is carefully sculpted and shaped to showcase the motif of your space.Expect some slight changes and imperfections",
      forntImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0066copy_540x.jpg?v=1661683306",
      BackImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0129copy_720x.jpg?v=1662288790",
      thirdImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-25_b11d4120-94c5-44c4-85af-3711bad60d28_540x.jpg?v=1661685852",
      fourthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0067copy_720x.jpg?v=1661685852" ,
      fifthImageUrl:"https://ariika.com/cdn/shop/products/Aug-22_0131copy_720x.jpg?v=1661683626"
      },
  ]
  getData(){
  return this.data
  }


  searchData(id: string){
    return this.data.find(product=> product.id === Number(id))
  }
}
