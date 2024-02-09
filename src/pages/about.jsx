import { Link } from "react-router-dom";
import grass from "../icons/grass.png";
import card from "../icons/shop.png"

function About() {
    
  return (
    <div className="p-4 w-full container mx-auto">
        <div className="pb-4 font-bold">
            <h1 className="text-3xl text-center ">
            Welcome to REED-MEDIA – Crafting Digital Excellence
            </h1>
            <p className=" py-3 px-4">
            At REED-MEDIA, we don't just build websites; we create digital experiences that leave a lasting impression. As a leading web development agency, we specialize in transforming your ideas into stunning, functional, and user-friendly online solutions.
            </p>
            <p className=" py-3 px-4">
            Our team of skilled developers, designers, and strategists collaborate seamlessly to bring your vision to life. From sleek corporate websites to robust e-commerce platforms, we tailor our services to meet your unique goals. Embrace innovation with cutting-edge technologies, responsive design, and scalable solutions that stand the test of time.   
            </p>
           <div className="flex justify-center ">
           <img src={grass} alt=""  className="rounded-lg dark:shadow-green-600 shadow-md lg:h-auto lg:w-[60vw]"/>
           </div>
        </div>
        <h1 className="py-6 text-4xl text-center">
        Why choose REED-MEDIA?
        </h1>
        <div className="lg:grid lg:grid-cols-2 gap-4 pb-4">
        <div className="p-4">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            01
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-3xl pb-6">
          Expertise:
          </h2>
          <p >
          Benefit from our team's extensive expertise in web development, ensuring top-notch solutions tailored to your needs.
          </p>
          </div>
         </div>
        
         <div className="p-4">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            02
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-3xl pb-6">
          Collaboration:
          </h2>
          <p >
          Benefit from our team's extensive expertise in web development, ensuring top-notch solutions tailored to your needs.
          </p>
          </div>
         </div>

         <div className="p-4">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            03
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-3xl pb-6">
          Innovation:
          </h2>
          <p >
          Benefit from our team's extensive expertise in web development, ensuring top-notch solutions tailored to your needs.
          </p>
          </div>
         </div>

         <div className="p-4">
         <h1 className="text-8xl absolute dark:text-gray-700 text-violet-400 font-bold z-1" >
            04
          </h1>
          <div className="pl-12 pt-14 relative">
          <h2 className="font-bold text-3xl pb-6">
          Results:
          </h2>
          <p >
          Benefit from our team's extensive expertise in web development, ensuring top-notch solutions tailored to your needs.
          </p>
          </div>
         </div>
         
        </div>
        <h2 className="px-4">
        Explore our portfolio and see the transformative impact we've had on businesses like yours. Ready to elevate your online presence? Contact REED-MEDIA today and let's embark on a journey to digital excellence together.
        </h2>
        <div className="p-4">
            <img src={card} alt="" className="rounded-lg dark:shadow-slate-200 shadow-md shadow-black animate-pulse hover:animate-none" />
        </div>

        <div className="flex justify-center animate-bounce">
      <button className="py-2 hover:animate-pulse bg-slate-500 p-3 mt-6 rounded-2xl text-center w-fit">
            <Link to="/contact">Lets build something!</Link>
      </button>
      </div>
    </div>
  )
}

export default About;