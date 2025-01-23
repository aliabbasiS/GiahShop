const PlantShowCard=(imgurl:string,title:string)=>{
    return(<><div className="relative rounded-lg w-1/4">
        <div className="absolute inset-0 z-20 px-5 py-3 flex items-end text-white rounded-lg">
          <span>{title}</span>
          <button className=""></button>
        </div>
      
        <div className="relative w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 z-10 w-full h-full opacity-40 bonsaye rounded-lg"></div>
          <img src={imgurl} alt="bonsaye" className="w-full h-full object-cover rounded-lg" />
        
        </div>
      </div></>)
}
export default PlantShowCard