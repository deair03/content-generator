function Cards({icon, name, description}) {
  return (
    <>
      <div className="p-5 shadow-md rounded-md border bg-white  flex flex-col gap-3 cursor-pointer h-full hover:scale-105 transition-all">
        
          <img className=" w-12 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
            src={icon}
            alt="card-image"
          />
    
       
          <h5 className="font-medium text-lg">
           {name}
          </h5>
          <p className="text-gray-500 line-clamp-3">
           {description}
          </p>
  
      </div>
    </>
  );
}

export default Cards;
