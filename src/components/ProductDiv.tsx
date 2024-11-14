

import React from "react";

export  function ProductDiv({name, price, total, id, state,deleteProduct, changeState}:ProductComponent) {
    const deleteOneProduct = () => {
        if(confirm('Seguro?')){
            deleteProduct(id);
        }
    }
    const color = state?'bg-green-400':'bg-slate-100';
  return(
    <div className={`flex mb-4 w-full py-1 ${color} px-1 box-border`}>
        <button 
        className="my-auto w-[1rem] text-[0.8rem] border border-stone-950 rounded-lg hover:bg-slate-300 h-fit" 
        onClick={() => changeState(id)}
        >C</button>
        <p className="w-[9rem] m-auto text-center">{name}</p>
        <p className="w-[5rem] m-auto text-center">{total}</p>
        <p className="w-[5rem] m-auto text-center">${price}</p>
        <button className="my-auto w-[1rem] text-[0.8rem] border border-stone-950 rounded-lg hover:bg-slate-300 h-fit" onClick={deleteOneProduct}>X</button>
    </div>
  );
}
