import image from "../icons/icon.png";
import cons from "../icons/cons.png";
import brand from "../icons/brand.png"

function Home() {
  return (
    <div className="gap-2 w-[100%] mt-[70px] ">
      <div className="p-6 border-gray-500 place-content-center grid gap-8 lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 ">
        <div className="lg:h-[80vh] flex items-center justify-center">          
        <img src={image} alt="brand" />
        </div>
        <div className="lg:pt-24 lg:pl-8">
          <h1 className="text-4xl font-bold">
          Branding & website design agency
          </h1>
          <p className="py-6">
          We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className="py-4 bg-slate-500 p-3 rounded-2xl">
            Read More
          </button>
        </div>
      </div>
      <div className="p-6 place-content-center w-full grid gap-8 lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 ">
        <div className="">          
        <img src={cons} alt="brand" className="rounded-md"/>
        </div>
        <div className="lg:pt-24 lg:pl-12">
          <h1 className="text-4xl font-bold">
          <span className="text-violet-900"><b>Design</b></span> is strategic.
          </h1>
          <p className="py-6">
          "A well-crafted design strategy consistently
              produces desired outcomes and brand
              awareness. We are firm believers that success
              lies in creative collaboration with our clients."
          </p>
          <h2  className="font-bold text-lg underline py-8">
            Schedule your consultation today!
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-4 p-4">
          <div className="w-full relative">
            <img src={brand} alt="brand"  className="rounded-xl w-full"/>
          </div>
          <div className="absolute lg:mt-44 flex justify-center place-content-center items-center flex-wrap px-14">
            <h1 className=" text-center lg:text-8xl text-gray-400 md:text-8xl text-4xl font-extrabold pt-[90px] ">
            Brand naming & guidelines
            </h1>
          </div>
      </div>
      <div className="p-6 place-content-center grid gap-8 lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2">
        <div className="flex justify-center items-center font-serif uppercase ">
          <h1 className="text-violet-900 text-5xl font-sans font-extrabold">
          Our approach for
          creating a winning
          brand.
          </h1>
        </div>
        {/* This div tag will be used as the container for the animated bar */}
        <div>
         <div className="container">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            01
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-xl pb-6">
          Brand Strategy
          </h2>
          <p >
          Brand strategy is critical for long-term success.
            Outshining competitors and capturing the target
            audience are key.
          </p>
          </div>
         </div>
         <div className="container">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            02
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-xl pb-6">
          Brand Design
          </h2>
          <p >
          Keeping the brand design unique and meaningful helps
          in communicating the brand's timeless value
          effectively.
          </p>
          </div>
         </div>
         <div className="container">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            03
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-xl pb-6">
          Web Design
          </h2>
          <p >
          A beautifully crafted website is the best tool for brand
          awareness, and ultimately results in increased
          revenues.
          </p>
          </div>
         </div>
        
        
        </div>
      </div>
    </div>
    );
}

export default Home;
