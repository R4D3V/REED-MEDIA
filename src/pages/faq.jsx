import { Link } from "react-router-dom";
import grass from "../icons/bill1.png";

function faq() {
  return (
    <div className="container mx-auto px-6 py-4w-full">
        <h1 className="text-2xl font-semibold  lg:text-3xl">Frequently asked questions.</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    1. What services does REED-MEDIA provide?
                    </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    REED-MEDIA offers a comprehensive suite of web development services, including custom website design, responsive development, e-commerce solutions, content management systems, and more. Explore our services page for a detailed overview.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    2. How does the web development process work at REED-MEDIA?
                    </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    Our process involves initial consultation, project planning, design and development, client feedback, and deployment. We prioritize collaboration, ensuring your vision aligns seamlessly with the final product. Learn more about our development process on our About Us page.
                      We follow a mobile-first design approach, starting with building for smartphones and progressively enhancing our designs for tablets and desktops.
                    </p>
                </div>
            </div>
           
            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    3. What technologies does REED-MEDIA specialize in?
                    </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    REED-MEDIA is proficient in a wide range of technologies, including but not limited to HTML, CSS, JavaScript, and various content management systems (CMS) such as WordPress and Drupal. We stay updated with the latest industry trends to provide cutting-edge solutions.
                    </p>
                </div>
            </div>
            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    4. How long does it typically take to complete a web development project?
                    </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    Project timelines vary based on complexity and scope. We work closely with clients to establish realistic timelines during the initial consultation. Factors such as features, design intricacy, and client responsiveness contribute to the overall duration.
                     </p>
                </div>
            </div>
            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    5. Can REED-MEDIA redesign an existing website?
                     </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    Absolutely! We specialize in website redesigns, aiming to enhance functionality, improve user experience, and align your online presence with evolving business goals. Reach out for a consultation, and let's discuss how we can revitalize your website.
                    </p>
                </div>
            </div>
            <div>
                <div className="inline-block p-3  bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    6. What sets REED-MEDIA apart from other web development agencies?
                    </h1>

                    <p className="mt-2 text-sm  dark:text-gray-300">
                    REED-MEDIA distinguishes itself through a blend of expertise, innovation, and client-centric collaboration. Our team is dedicated to delivering tailored solutions that not only meet but exceed client expectations. Explore our testimonials to hear about the experiences of our satisfied clients.
                    </p>
                </div>
            </div>
        </div>
        <div  className="mt-8 font-mono">
            <h1 className="text-right 
  first-letter:text-4xl first-letter:font-bold 
  first-letter:float-left first-letter:font-serif relative ">
            REED-MEDIA distinguishes itself through a blend of expertise, innovation, and client-centric collaboration. Our team is dedicated to delivering tailored solutions that not only meet but exceed client expectations. Explore our testimonials to hear about the experiences of our satisfied clients.
            </h1>
            <h2 className="text-left py-4">
            Have more questions or need clarification? Feel free to contact REED-MEDIA directly on the about page. We're here to assist you on your digital journey.

            </h2>
        </div>
        <div className="flex justify-center p-4">
           <img src={grass} alt=""  className="rounded-lg dark:shadow-green-600 shadow-md lg:h-auto lg:w-[40vw] md:w-[40vw] sm:w-[30vw] xs:w-[20vw]"/>
           </div>
        <div className="flex pt-4 justify-center animate-bounce">
      <button className="py-2 hover:animate-pulse bg-slate-500 p-2 rounded-2xl text-center w-fit">
            <Link to="/contact">Lets build something!</Link>
      </button>
      </div>
    </div>
  )
}

export default faq