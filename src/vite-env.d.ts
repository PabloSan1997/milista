/// <reference types="vite/client" />


interface HeaderProps{
    total:number;
    selects:number;
    totalPrice:number;
}

interface ProductComponent extends Product{
    deleteProduct(id:stirng):void;
    changeState(id:string):void
}

interface SaveProduct{
    name:string;
    price:number;
    total:number;
    state:boolean;
}

interface Product extends SaveProduct{
    id:string;
}