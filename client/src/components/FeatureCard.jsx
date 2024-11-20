import { formatPrice } from "../utils"


const FeatureCard = ({product}) => {
    const {name,price,images} = product
  return (
    <div className=" w-64 carousel-item flex flex-col rounded-lg  hover:shadow-sm transition relative">
      <div className="absolute top-2 left-2 bg-white text-slate-600 px-3 font-semibold  text-xs rounded-sm">
        NEW
      </div>
      <div className="absolute top-7 left-2 bg-green-200 text-green-800 px-3  text-xs rounded-sm">
        -50%
      </div>
      <div className="absolute top-4 right-2  text-slate-950 bg-white flex justify-center items-center  text-2xl rounded-full shadow-md h-7 w-7">
      ♡
      </div>

      <img src={images[0]} alt="Product" className="w-full h-60 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <div className="flex items-center mb-1">
        <span className="text-slate-700">★★★★★</span>
        
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-md font-semibold"> {formatPrice(price)}</span>
        
      </div>
      
    </div>
  )
}

export default FeatureCard