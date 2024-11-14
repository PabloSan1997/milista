

export const productStorage = {
    read():Product[]{
        if(!localStorage.products){
            localStorage.products=JSON.stringify([]);
        }
        return JSON.parse(localStorage.products);
    },
    save(listProducts:Product[]):void{
        localStorage.products = JSON.stringify(listProducts);
    }
}