import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Carousel({ thumbnail, title, price }) {
  return (
    <div className="relative h-80 overflow-hidden mx-2">
      <div className="absolute ml-2 bottom-[10px]   ">
        {/* <h3 className="text-accent text-[20px] lg:text-[27px] bg-gray-200 opacity-70 rounded-lg">{title}</h3> */}
        <h3 className="text-[16px] text-gray-700 ">
          <b className="text-[20px] md:text-[24px] lg:text-[30px] bg-gray-200 opacity-70 rounded-lg">
            {price}.00 $
          </b>
        </h3>
        {/* <div className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg  inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div> */}
      </div>
      <img
        className="w-full h-full rounded-xl bg-center bg-cover "
        src={thumbnail}
        alt={title}
      />
    </div>
  )
}
