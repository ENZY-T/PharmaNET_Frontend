export interface medCard {
    id:number,
    price:number,
    prevPrice:number,
    name:string,
    image:string,
    ratingNumber:number,
    isSelect:boolean,
    discount:number,

  }
  export interface pharmacyCard {
    id:number,
    name:string,
    telephoneNumber:string,
    address:string,
    image:string,
    ratingNumber:number,
    isSelect:boolean,
  }
  
  export interface pharmacyCardsData {
    id:number,
    name:string,
    telephoneNumber:string,
    address:string,
    image:string,
    email:string,
    ratingNumber:number,
    isSelect:boolean,
  }