import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ProductDiv } from "./components/ProductDiv";
import { useProduct } from "./hooks/useProduct";
import { sumProducts } from "./utils/sumProducts";


function App() {
  const { products, changeState, addProduct, deleteProduct } = useProduct();
  const total = products.length;
  const selects = products.filter(p => p.state).length;
  const totalPrice = sumProducts(products);
  return (
    <>
      <Header total={total} selects={selects} totalPrice={totalPrice} />
      <Formulario addProduct={addProduct} />
      <div className='flex flex-col w-[95%] m-auto bg-slate-300 mb-2'>
        <div className='flex mb-4 w-full bg-slate-950 text-slate-50'>
          <p className="w-[1rem]"></p>
          <p className="w-[9rem] text-center m-auto">Nombre</p>
          <p className="w-[5rem] text-center m-auto">Total</p>
          <p className="w-[5rem] text-center m-auto">Precio</p>
          <p className="w-[1rem] text-center"></p>
        </div>
        {products.map(p => (
          <ProductDiv key={p.id} {...p} changeState={changeState} deleteProduct={deleteProduct} />
        ))}
      </div>
    </>
  );
}

export default App
