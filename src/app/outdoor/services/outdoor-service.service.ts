import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutdoorServiceService {
  outdoorproducts = [
    {
    id : 1,
    productName: "Bali Bamboo 2 Seater Sofa",
    price: "15,400.00", afterDiscount: "12,320.00",
    description:"Bali two seater is meant to be nature's hug with a U-shape like design and all natural bamboo. Our bamboo collection is curated by handwoven bamboo techniques.",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Bali2seater_540x.jpg?v=1668598587",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-13_acb3564d-2bf2-4ee5-835a-22653a1a8229_540x.jpg?v=1668598579",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Bali2seater2_540x.jpg?v=1668598579",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/2_540x.jpg?v=1668598579" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1_d75a43b7-6cc6-4bfc-b1b9-02fca926b71d_540x.jpg?v=1668598579"

    },

    {
    id : 2,
    productName: "Beverly Collection-3 Sofa",
    price: "34,538.00", afterDiscount: "27,630.00",
    description:"Beverly, our sleek and durable aluminum electrostatic coated outdoor sofa, perfect for your patio, deck, or garden. Whether you're looking for a comfortable spot.",
    forntImageUrl:"https://ariika.com/cdn/shop/files/2copy_a4f45ecf-e69d-45b9-a57d-a91ddb93fe17_540x.jpg?v=1719496012",
    BackImageUrl:"https://ariika.com/cdn/shop/files/MSR50404_540x.jpg?v=1718194493",
    thirdImageUrl:"https://ariika.com/cdn/shop/files/MSR50151_540x.jpg?v=1718194593",
    fourthImageUrl:"https://ariika.com/cdn/shop/files/1copy_dbfb30a4-c473-4ac1-9f59-b71d9e06f948_540x.jpg?v=1718195167" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/files/3copy_ae8a49e3-f071-4d89-840b-5271dbe4fd90_540x.jpg?v=1719496012"
    },

    {
    id : 3,
    productName: "Bali Bamboo Chair",
    price: "9,940.00", afterDiscount: "7,952.00",
    description:"Elegant and organic Bali bamboo chair crafted from natural bamboo.The collection is curated by handwoven bamboo techniques that create pattern, texture, and more importantly",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Bali_540x.jpg?v=1664875900",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-14_a68d609e-4995-4c5f-a53f-17db705a5972_540x.jpg?v=1668599329",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Bali2_540x.jpg?v=1668599326",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-15_a3428379-315e-418c-a37b-b4dfecee15ce_540x.jpg?v=1668599326" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/Bali-chair_540x.jpg?v=1668599329"
    },

    {
    id: 4,
    productName: "Malacca Lounge Chairt",
    price: "5,500.00", afterDiscount: "4,400.00",
    description:"Relax in style with our Malacca lounging armchairs. These chairs feature a comfortable and supportive electrostatic coated seat that is perfect for lounging in your outdoor.",
    forntImageUrl:"https://ariika.com/cdn/shop/files/MGL6031copy_540x.jpg?v=1684915896",
    BackImageUrl:"https://ariika.com/cdn/shop/files/MGL6030copy_540x.jpg?v=1684916603",
    thirdImageUrl:"https://ariika.com/cdn/shop/files/Ariika-Esorus-51_540x.jpg?v=1684915923",
    fourthImageUrl:"https://ariika.com/cdn/shop/files/Ariika-Esorus-56_540x.jpg?v=1684916603" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/files/MGL6033copy_540x.jpg?v=1684916603"
    },

    {
    id: 5,
    productName: "Phuket Bamboo Middle Table",
    price: "5,500.00 ", afterDiscount: "4,400.00",
    description:"Phuket middle table is here to give you a natural and statement piece in one. The collection is curated by handwoven bamboo techniques that create texture.",
    forntImageUrl:"https://ariika.com/cdn/shop/products/Sep_0695copy_540x.jpg?v=1663582839",
    BackImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-12_d2c796f0-fdd8-4436-92b0-9925a7b1d36c_540x.jpg?v=1665653060",
    thirdImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-09_4db0bbb5-e25d-4341-94ce-87c3ebaa0f0f_540x.jpg?v=1665653060",
    fourthImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-10_48e9b548-6943-4046-89f0-79ea4478b0a2_540x.jpg?v=1665653060" ,
    fifthImageUrl:"https://ariika.com/cdn/shop/products/Untitled-1-11_f9f9d76b-342c-40f0-ba24-3159bab75965_540x.jpg?v=1665653060"
    },

    {
      id: 6,
      productName: "Matrix Dining Table",
      price: "16,100.00", afterDiscount: "12,895.00",
      description:"Matrix Dining Table, our sleek and durable aluminum electrostatic coated outdoor Table, perfect for your patio, deck, or garden.",
      forntImageUrl:"https://ariika.com/cdn/shop/files/matrix_f2e71ee6-e900-41ab-95e1-bfff947d4fea_540x.jpg?v=1719133020",
      BackImageUrl:"https://ariika.com/cdn/shop/files/MSR50430_540x.jpg?v=1718196669",
      thirdImageUrl:"https://ariika.com/cdn/shop/files/MSR50237_540x.jpg?v=1718196710",
      fourthImageUrl:"https://ariika.com/cdn/shop/files/MSR50216_540x.jpg?v=1718196745" ,
      fifthImageUrl:"https://ariika.com/cdn/shop/files/MSR50222_540x.jpg?v=1718196819"
      },
  ]

  getOutDoorProducts(){
    return this.outdoorproducts}


    searchOutDoorProducts(id: string){
      return this.outdoorproducts.find(outdoorproduct=> outdoorproduct.id === Number(id))
    }

}
