import { useState } from "react"
import {v4 as uuid} from 'uuid';
import { productStorage } from "../storages/productStorage";


export const useProduct=()=>{
    const [products, setProducts] = useState<Product[]>(productStorage.read());
    const addProduct = (newprodct:SaveProduct) => {
        const prod:Product = {
            id: uuid(),
            ...newprodct
        }
        const eidt = [...products, prod];
        productStorage.save(eidt)
        setProducts(eidt);
    }
    const deleteProduct = (id:string)=>{
        const view = products.filter(p => p.id !== id);
        productStorage.save(view);
        setProducts(view);
    } 
    const changeState = (id:string) =>{
        const i = products.findIndex(p => p.id === id);
        if(i>-1){
            const view = [...products];
            view[i].state = !view[i].state;
            setProducts(view);
        }
    }
    return {products, addProduct, deleteProduct, changeState};
}