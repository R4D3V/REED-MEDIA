import whatsapp from "../icons/whatsapp.png";
import name from "../icons/name.png";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
function contact() {
  return (
    <div className="container px-6 py-8 mx-auto w-full">
        <div className="flex justify-center w-full ">
            <img src={name} alt="" className="rounded-lg lg:w-[40vw] md:w-[30vw]" />
        </div>
        <div className="pt-4">
            <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:grid-cols-2 place-content-center just p-6">
                <div>
                    <span className="inline-block p-3 animate-bounce text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        
                        <a href="mailto:raymonjohns@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </a>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400"><a href="mailto:raymonjohns@gmail.com">raymonjohns@gmail.com</a></p>
                </div>

                <div>
                    <span className="inline-block animate-bounce p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                  </span>
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                    <a href="https://maps.app.goo.gl/b16NN8czvGW3CgN18" target="_blank" rel="noopener noreferrer">26°15'28.2"N 50°37'07.5"E
7J59+4GQ, Muharraq.</a>
                    </p>

                </div>

                <div>
                    <span className="inline-block animate-bounce p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        
                        <a href="tel:+973 37559735">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        </a>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400"><a href="tel:+973 37559735">+973 37559735</a></p>
                </div>

                <div>
                    <span className="   rounded-full  ">
                    <a href="https://wa.me/message/EMSUIOYUA5SDI1">
                    <img src={whatsapp} alt=""  className="w-12 p-1 h-12 animate-bounce  flex-shrink-0" />
                    </a>
                    </span>
                    
                    <h2 className="mt-3 text-base font-medium text-gray-800 dark:text-white">Whatsapp</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400"><a href="https://wa.me/message/EMSUIOYUA5SDI1"> +973 37559735 </a></p>
                </div>

                <div>
                    <span className="  rounded-full  ">
                    <a href="https://www.instagram.com/r4d3v/">
                    <img src={instagram} alt=""  className="w-12 p-1 h-12 animate-bounce  flex-shrink-0" />
                    </a>
                    </span>
                    
                    <h2 className="mt-3 text-base font-medium text-gray-800 dark:text-white">Instagram</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400"><a href="https://www.instagram.com/r4d3v/">R4D3V</a></p>
                </div>

                <div>
                    <span className="  rounded-full  ">
                    <a href="https://t.me/patrolfx">
                    <img src={telegram} alt=""  className="w-12 p-1 h-12 animate-bounce  flex-shrink-0" />
                    </a>
                    </span>
                    
                    <h2 className="mt-3 text-base font-medium text-gray-800 dark:text-white">Telegram</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400"><a href="https://t.me/patrolfx">PATROLFX</a></p>
                </div>
            </div>
    </div>
  )
}

export default contact