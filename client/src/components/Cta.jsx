
import room1 from "../assets/room1.png"
const Cta = () => {
  return (
    <div className="flex mt-7 h-[30rem]">
      <div className="w-1/2">
        <img
          src={room1}
          alt="Living room with couch and coffee table"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 p-8 bg-[#F3F5F7] flex flex-col justify-center  ">
        <h2 className="text-lg font-bold mb-2 text-blue-500">
          SALE UP TO 35% OFF
        </h2>
        <h1 className="text-4xl font-medium mb-4">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="text-lg text-slate-950 mb-6">
          It's more affordable than ever to give every room in your home a stylish
          makeover
        </p>
        <h1 className=" text-slate-900 font-semibold  underline">
          Shop Now →
        </h1>
      </div>
    </div>
  )
}

export default Cta