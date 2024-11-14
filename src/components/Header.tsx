

export function Header({total, selects, totalPrice}:HeaderProps) {
  return (
    <header className='bg-slate-950 text-slate-50 flex h-16'>
        <h1 className='my-auto mx-5 text-3xl'>Lista</h1>
        <div className="flex flex-col m-auto ml-auto mr-5 text-[0.8rem]">
            <span>Total price: ${totalPrice}</span>
            <span>{selects}/{total}</span>
        </div>
    </header>
  );
}
