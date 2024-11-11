import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

                <Image 
                    src="https://images.pexels.com/photos/2814832/pexels-photo-2814832.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                <Image 
                    src="https://images.pexels.com/photos/3633850/pexels-photo-3633850.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">AED 120</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

                <Image 
                    src="https://images.pexels.com/photos/13964074/pexels-photo-13964074.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                <Image 
                    src="https://images.pexels.com/photos/26838653/pexels-photo-26838653/free-photo-of-perfume-in-glass-bottle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">AED 180</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

                <Image 
                    src="https://images.pexels.com/photos/14490634/pexels-photo-14490634.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                <Image 
                    src="https://images.pexels.com/photos/14490688/pexels-photo-14490688.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">AED 134</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">

                <Image 
                    src="https://images.pexels.com/photos/13875780/pexels-photo-13875780.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                <Image 
                    src="https://images.pexels.com/photos/13875786/pexels-photo-13875786.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="" 
                    fill 
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">AED 127</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList