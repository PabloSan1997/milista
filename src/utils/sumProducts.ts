

export function sumProducts(products:Product[]):number{
    const prices = products.map(p => p.price);
    let res = 0;
    for(let a of prices){
        res += a;
    }
    return res;
}

