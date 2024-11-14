

import React, { FormEvent, useState } from "react";

const initialState: SaveProduct = {
    name: "",
    price: 0,
    total: 0,
    state: false
}

export function Formulario({ addProduct }: { addProduct(newProd: SaveProduct): void }) {
    const [texto, setTexto] = useState(initialState);
    const submit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProduct(texto);
        setTexto(initialState);
    }
    const labelClass = 'text-[1rem] mb-1';
    const inputClass = "border border-slate-900 p-[0.2rem] box-border mb-2 rounded-md outline-none placeholder:text-slate-600";
    return (
        <form onSubmit={submit} 
        className="w-[95%] m-auto my-5 flex flex-col p-[0.8rem] border-2 border-slate-900 box-border rounded-lg bg-slate-200"
        >
            <h2 className="text-[1.2rem] mb-1">Agregar producto</h2>
            <label htmlFor="" className={labelClass}>Nombre</label>
            <input
                type="text"
                placeholder="Escribir"
                value={texto.name}
                onChange={e => setTexto({...texto, name:e.target.value})}
                className={inputClass}
            />
            <label htmlFor="" className={labelClass}>Total</label>
            <input
                type="number"
                placeholder="Escribir"
                min={0}
                step={1}
                value={texto.total}
                onChange={e => setTexto({...texto, total:Number(e.target.value)})}
                className={inputClass}
            />
            <label htmlFor="" className={labelClass}>Precio</label>
            <input
                type="number"
                placeholder="Escribir"
                min={0}
                step={0.01}
                value={texto.price}
                onChange={e => setTexto({...texto, price:Number(e.target.value)})}
                className={inputClass}
            />
            <button type="submit" className="bg-slate-500 rounded-lg w-fit p-2 py-1 mt-2 text-slate-50">Agregar</button>
        </form>
    );
}
