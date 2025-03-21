import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-center items-center p-20 gap-10 lg:gap-[100px] sm:gap-10">
        <div className="rounded-3xl p-5 sm:shadow-[0px_0px_100px_0px_#3182ce] shadow-[0px_0px_50px_0px_#3182ce] lg:w-[360px] sm:w-[350px]">
        <div className="flex w-[300px] sm:w-[350px] h-[250px] sm:h-[300px]">
          <Image src={"/amaanii.png"} height={20} width={400} className="rounded-t-2xl lg:w-[320px] sm:w-[310px]"/>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl mt-4 whitespace-nowrap">Amaani Arora</h1>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-gray-300 text-xl">President</p>
              <p className="text-gray-300 text-xl">BCA 2<sup>nd</sup> Year</p>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/amaani-arora-65028a263/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
       
        <div className="sm:shadow-[0px_0px_100px_0px_#3182ce] shadow-[0px_0px_50px_0px_#3182ce] rounded-3xl p-5  lg:w-[360px] sm:w-[350px]">
          <div className="flex w-[300px] sm:w-[350px] h-[250px] sm:h-[300px]">
          <Image src={"/chirag.png"} height={20} width={400} className="rounded-t-2xl lg:w-[320px] sm:w-[310px]"/>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl mt-4 whitespace-nowrap">Chirag Jain</h1>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-gray-300 text-xl whitespace-nowrap">Vice President</p>
              <p className="text-gray-300 text-xl">BCA 2<sup>nd</sup> Year</p>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/chirag-jain-6574902a0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center p-10 gap-10 sm:gap-20">
        <div className=" rounded-3xl p-5 sm:shadow-[0px_0px_100px_0px_#3182ce] shadow-[0px_0px_50px_0px_#3182ce]">
        <div className="flex w-[300px] sm:w-[350px] h-[250px] sm:h-[300px]">
          <Image src={"/stuti.jpg"} height={20} width={400} className="rounded-t-2xl"/>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl mt-4 whitespace-nowrap">Stuti Sharma</h1>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-gray-300 text-xl">General Secretary</p>
              <p className="text-gray-300 text-xl">BBA 1<sup>st</sup> Year</p>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/stuti-sharma240506/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-10 mt-10 sm:mt-20">
          <h1 className="sm:text-6xl text-4xl text-white text-center">Tech Department Heads</h1>
        </div>
        <div className="flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary object-cover">
            <Image src={"/rohit.png"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Rohit</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  AI/Emerging Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 3<sup>rd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/rohit-dev005/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Pratham</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  AI/Emerging Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href=" https://www.linkedin.com/in/pratham-saluja-667460292/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/pratham.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/vikas.png"} height={20} width={300} className="rounded-r-2xl bg-cover"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Vikas</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  DSA Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/vikas-gulia-b28255298/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Ayush</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  DSA Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/ayush-jaiswal-81084a277/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/ayush.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/parnika.png"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Parnika</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Web Dev Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/parnikamathur/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Tushar</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Web Dev Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/tushar-sharma-6a037a281/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/tushar.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/bhoomi.png"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Bhoomi</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Designing Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/bhoomi-arora-45aa24292/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Harsh</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Designing Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 3<sup>rd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/harsh-gupta-22a24a286/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/harsh.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-10 mt-20">
          <h1 className="sm:text-6xl text-4xl text-white text-center mt-40">Non Tech Department Heads</h1>
        </div>
        
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/ayush kumar.jpg"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Ayush</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  PR Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BBA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/ayush-kumar-b84598257/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Priyanshu</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  PR Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BBA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/priyanshu-ghai-58121b307/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/priyanshu.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/mayank.png"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Mayank</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Publicity Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/mayank-aggarwal-27a247251/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Sakshi</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Publicity Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BBA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href=" https://www.linkedin.com/in/sakshi-sharma-69b371314/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/sakshi.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className="flex rounded-r-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-end bg-secondary">
            <Image src={"/taniya.png"} height={20} width={300} className="rounded-r-2xl"/>
          </div>
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-l-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Tanya</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Event Managemant Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BCA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/taniyagusain/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 flex justify-between gap-5 sm:gap-0 h-[150px] sm:h-[300px]">
          <div className=" flex justify-between items-start w-full sm:w-[800px] sm:py-16 py-5 px-5 sm:px-10 rounded-r-3xl sm:shadow-[0px_0px_50px_0px_#3182ce] shadow-[0px_0px_30px_0px_#3182ce]">
            <div className="">
              <h1 className="text-white text-3xl sm:text-6xl">Shaivi</h1>
              <div className="flex flex-col mt-2 sm:mt-10">
                <p className="text-gray-300 text-sm sm:text-xl">
                  Event Management Department
                </p>
                <p className="text-gray-300 text-sm sm:text-xl">BBA 2<sup>nd</sup> Year</p>
              </div>
            </div>
            <div className="flex gap-10 px-5">
              <a href="https://www.linkedin.com/in/shaivi-dhuper-3639992a3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white">
              <Linkedin className="text-white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex rounded-l-3xl w-[250px] sm:w-[450px] p-3 sm:p-5 justify-start bg-secondary">
            <Image src={"/shaivi.png"} height={20} width={300} className="rounded-l-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
