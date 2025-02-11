const PlantShowCard = ({ imgurl, title }:{imgurl:string,title:string}) => {
  return (
    <div className="relative rounded-lg w-1/4 h-36 min-w-40 max-w-80 min-h-36 max-h-80  lg:min-w-60 lg:max-w-96 lg:min-h-60 lg:max-h-96 lg:mx-4">
      <div className="absolute flex flex-col justify-end items-start inset-0 z-20 px-5 py-3 gap-3 text-white rounded-lg">
        <span className="lg:text-xl text-base font-semibold">{title}</span>
        <button className="w-3/4 outline outline-1 rounded py-1">خرید {title}</button>
      </div>
      
      <div className="relative w-full rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-10 w-full h-full opacity-40 bonsaye rounded-lg"></div>
        <img src={imgurl} alt={title} className="object-cover  rounded-lg" />
      </div>
    </div>
  );
};

export default PlantShowCard;
