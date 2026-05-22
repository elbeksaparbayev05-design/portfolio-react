import { useState } from "react";
import logo   from "./assets/image.png"
// import SkillBar from "./main.jsx";

// src/components/SkillBar.jsx



function App() {
  const[active, setActive] = useState("bosh")

  return(
      <div  className="w-full h-screen flex flex-col items-center justify-start gap-10 scroll-smooth">
        <nav  className="flex flex-col gap-5 items-center justify-center h-25 mt-3 ">
          <div  className="flex items-center justify-center gap-35 font-normal text-sm border border-gray-300 h-15  rounded-lg w-full max-w-4xl fixed top-5 z-10 bg-white  ">
          <h1 className="font-serif text-2xl">Elbek <span className="text-yellow-600">.</span></h1>
          <div className="flex items-center justify-center gap-10 ">
          <a href="#about" className="cursor-pointer hover:text-yellow-600 transition-all duration-400">BOSH SAHIFA</a>
          <a href="#projects" className="cursor-pointer hover:text-yellow-600 transition-all duration-400">ASARLAR</a>
          <a href="#skills" className="cursor-pointer hover:text-yellow-600 transition-all duration-400">KO'NIKMALAR</a>
          <a href="#feedback" className="cursor-pointer hover:text-yellow-600 transition-all duration-400">BOG'LANISH</a>
          </div>
          <a className="bg-black text-white py-1 px-4 rounded hover:bg-yellow-600 transition-all duration-400" target="blank" href="https://t.me/+eYkQ3z7dXAswOWYy">YOZISH</a>
          </div>
        </nav>

        <main  id="about" calassName="flex items-center justify-center gap-2 w-full ">
          <div className="flex flex-row items-start justify-center gap-20 mt-20">
            <div className="flex flex-col items-start justify-center gap-3">
              <h1 className="font-serif text-4xl">Full-Stack Developer</h1>
              <h1 className="font-serif text-4xl text-amber-800">SAPARBOYEV ELBEK</h1>
              <h3 className="font-serif text-sm w-50 h-40 flex justify-center">Zamonaviy web ilovalar yaratishga qiziqadigan Full-Stack dasturchi. Toza UI va samarali backend tizimlari ustida ishlashni yoqtiraman.</h3>
              <div className="flex gap-10">
                <button className="border border-black-300 bg-black text-white py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-400">ASARLARIM</button>
                <button className="border border-black-300 bg-white text-black py-2 px-4 rounded hover:text-white hover:bg-black transition-all duration-400">REZYUME</button>
               </div>
               <div className="flex gap-10">
               <div className="font-serif text-2xl flex flex-col items-center">25<h2 className="font-serif text-sm">LOYIHA</h2></div>
               <div className="font-serif text-2xl flex flex-col items-center">2<h2 className="font-serif text-sm">YIL TAJRIBA</h2></div>
               <div className="font-serif text-2xl flex flex-col items-center">15+<h2 className="font-serif text-sm">MIJOZ</h2></div>
               </div>
            </div>
            <div  className="flex flex-col items-center">
            <img className="w-80 h-80 object-cover rounded-2xl" src={logo} alt="" />
            <a className="border border-black-300 relative left-20 bottom-5 bg-yellow-600 text-black py-2 px-4 rounded hover:text-white hover:bg-black border-none transition-all duration-400" target="blank" href="https://t.me/+eYkQ3z7dXAswOWYy">OCHIQ ISH QIDIRYAPMAN +</a>
            </div>
          </div> 
             <hr id="projects" className="text-white"/>

            <hr className="border border-gray-300 my-10 "/>

            <div  className="flex items-center justify-between w-full max-w-4xl">
               <h2 className="font-serif text-3xl mb-5">Mening Ishlarim</h2>
               <div className="font-serif text-sm text-yellow-600 mx-5 mt-3 cursor-pointer">BARCHASINI KO'RISH <span className="">→</span></div>
               </div>

            <div className=" grid grid-cols-2 gap-4">
              <div className="flex flex-col w-90 h-100 mb-10 border-2 border-gray-300 rounded-2xl items-center hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer">
                <h1 className="w-80 h-40 bg-linear-to-br from-gray-700 to-purple-600 flex items-center justify-center text-4xl mt-5 rounded-2xl">🛒</h1>
                <h2 className="font-serif text-xl mt-5">ShopFlow Platform</h2>
                <h4 className="font-serif text-sm text-gray-600 mx-5 mt-3">To'liq qayta ishlab chiqilgan savdo platformasi. Konversiya 38% ga oshdi.</h4>
                <div className="flex flex-end gap-35 mt-5">
                  <div className="flex gap-5  mt-5  ">
                  <h2 className="border border-gray-300 p-1 rounded">FIGMA</h2>
                  <h2 className="border border-gray-300 p-1 rounded">REACT</h2>
                  </div>
                  <h2 className="text-2xl mt-5">→</h2>
                </div>
              </div>

              <div className="flex flex-col w-90 h-100 mb-10 border-2 border-gray-300 rounded-2xl items-center hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer">
                <h1 className="w-80 h-40 bg-linear-to-br from-gray-700 to-green-600 flex items-center justify-center text-4xl mt-5 rounded-2xl">📅</h1>
                <h2 className="font-serif text-xl mt-5">To-Do List</h2>
                <h4 className="font-serif text-sm text-gray-600 mx-5 mt-3">To'liq qayta ishlab chiqilgan rejalashtirish platformasi. Konversiya 32% ga oshdi.</h4>
                <div className="flex flex-end gap-35 mt-5">
                  <div className="flex gap-5  mt-5  ">
                  <h2 className="border border-gray-300 p-1 rounded">FIGMA</h2>
                  <h2 className="border border-gray-300 p-1 rounded">REACT</h2>
                  </div>
                  <h2 className="text-2xl mt-5">→</h2>
                </div>
              </div>

              <div className="flex flex-col w-90 h-100 mb-10 border-2 border-gray-300 rounded-2xl items-center hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer">
                <h1 className="w-80 h-40 bg-linear-to-br from-gray-700 to-yellow-600 flex items-center justify-center text-4xl mt-5 rounded-2xl">🏥</h1>
                <h2 className="font-serif text-xl mt-5">Medical App</h2>
                <h4 className="font-serif text-sm text-gray-600 mx-5 mt-3">To'liq qayta ishlab chiqilgan shifoxona platformasi. Konversiya 25% ga oshdi.</h4>
                <div className="flex flex-end gap-35 mt-5">
                  <div className="flex gap-5  mt-5  ">
                  <h2 className="border border-gray-300 p-1 rounded">FIGMA</h2>
                  <h2 className="border border-gray-300 p-1 rounded">REACT</h2>
                  </div>
                  <h2 className="text-2xl mt-5">→</h2>
                </div>
              </div>

              <div className="flex flex-col w-90 h-100 mb-10 border-2 border-gray-300 rounded-2xl items-center hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer">
                <h1 className="w-80 h-40 bg-linear-to-br from-gray-700 to-blue-600 flex items-center justify-center text-4xl mt-5 rounded-2xl">🎓</h1>
                <h2 className="font-serif text-xl mt-5">LorningPath LMS</h2>
                <h4 className="font-serif text-sm text-gray-600 mx-5 mt-3">To'liq qayta ishlab chiqilgan savdo platformasi. Konversiya 38% ga oshdi.</h4>
                <div className="flex flex-end gap-35 mt-5">
                  <div className="flex gap-5  mt-5  ">
                  <h2 className="border border-gray-300 p-1 rounded">FIGMA</h2>
                  <h2 className="border border-gray-300 p-1 rounded">REACT</h2>
                  </div>
                  <h2 className="text-2xl mt-5">→</h2>
                </div>
              </div>

            </div>
            <hr id="skills" className="text-white"/>

            <hr className="border border-gray-300 my-10 "/>


               <h2 className="font-serif text-3xl mb-5">Ko'nikmalar</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">🎨</h1>
                <h4 className="text-black font-serif">UI Dizayn</h4>
                <h5 className="text-gray-600 font-serif  ">Figma, Adobe XD, Sketch bilan professional interfeys yaratish</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${65}%` }} />
                 </div>
              </div>

              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">👤</h1>
                <h4 className="text-black font-serif">UX Research</h4>
                <h5 className="text-gray-600 font-serif  ">Foydalanuvchi tadqiqoti, prototiplash, usability testing</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${55}%` }} />
                 </div>
              </div>

              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">⚡</h1>
                <h4 className="text-black font-serif">Frontend Dev</h4>
                <h5 className="text-gray-600 font-serif mt-6 ">React, Vue, HTML/CSS/JS bilan ishlanma</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${65}%` }} />
                 </div>
              </div>

              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">📱</h1>
                <h4 className="text-black font-serif">Mobile Design</h4>
                <h5 className="text-gray-600 font-serif mt-6 ">iOS va Android uchun native tajriba dizayni</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${45}%` }} />
                 </div>
              </div>

              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">🔷</h1>
                <h4 className="text-black font-serif">Design System</h4>
                <h5 className="text-gray-600 font-serif mt-6 ">Katta loyihalar uchun komponent kutubxonasi</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${40}%` }} />
                 </div>
              </div>

              <div className="flex flex-col w-60 h-60 mb-10 border-1 border-gray-300 rounded-2xl items-center p-5 hover:bg-yellow-50 hover:border-yellow-500 transition-colors duration-300 cursor-pointer ">
                <h1 className="text-4xl">📊</h1>
                <h4 className="text-black font-serif">Data Viz</h4>
                <h5 className="text-gray-600 font-serif mt-6 ">Murakkab ma'lumotlarni vizual ifodalash</h5>
                 <div className="w-50 h-0.5 bg-gray-300 mt-2">
                  <div className="h-0.5 bg-yellow-600 transition-all duration-1000 ease-out" style={{ width: `${25}%` }} />
                 </div>
              </div>
            </div>
            <hr id="feedback" className="text-white"/>

        <hr className="border border-gray-300 my-10 "/>

        <h2 className="font-serif text-3xl mb-5">Mijozlar fikri</h2>
        <div className="flex gap-6">
        <div className="flex flex-col w-90 h-50 mb-10 border-2 border-gray-300 rounded-2xl items-center p-5  gap-7">
          <div className="flex items-center gap-5 ">
            <h2 className="text-sm font-serif mt-5">Amir loyihani vaqtida va kutganimdan yuqori sifatda yakunladi. Dizayn jarayoni juda professional tarzda olib borildi.</h2>
            <h1 className="text-4xl font-serif text-yellow-200 relative bottom-5 ">"</h1>
          </div>
          <div className="flex gap-3 relative right-12">
          <div className="bg-blue-800 rounded-4xl w-10 h-10 flex items-center justify-center font-bold text-white">
            EH
          </div>
          <div className="flex flex-col ">
            <div className="text-sm">Erkayev Hamrobek</div>
            <div className="text-sm">IELTS, Xarezm</div>
          </div>
          </div>
        </div>

        <div className="flex flex-col w-90 h-50 mb-10 border-2 border-gray-300 rounded-2xl items-center p-5  gap-7">
          <div className="flex items-center gap-5 ">
            <h2 className="text-sm font-serif mt-5">Foydalanuvchilarimiz yangi interfeys haqida juda ijobiy fikrlar bildirdi. Konversiya 40% oshdi — bu ajoyib natija.</h2>
            <h1 className="text-4xl font-serif text-yellow-200 relative bottom-5 ">"</h1>
          </div>
          <div className="flex gap-3 relative right-12">
          <div className="bg-green-800 rounded-4xl w-10 h-10 flex items-center justify-center font-bold text-white">
            QD
          </div>
          <div className="flex flex-col ">
            <div className="text-sm">Quranboyeva Dilnafis</div>
            <div className="text-sm">Product Manager, Sirius</div>
          </div>
          </div>
        </div>
        </div>
        <hr className="border border-gray-300 my-10 "/>
        </main>
        <footer className="flex gap-20 items-center pb-20">
        <div className="w-90 h-50 flex flex-col gap-5 justify-center  ">
        <h2 className="font-serif text-3xl mb-5 font-bold">Birga Ishlaylik</h2>
        <h4 className="font-serif text-gray-500">Yangi loyiha, hamkorlik yoki shunchaki suhbat — men doim ochiqman. Xabar qoldiring!</h4>
        <h5 className="font-serif text-black">Email: <span className="text-gray-500">elbkesaparboyev05@gmail.com</span></h5>
        <h5 className="font-serif text-black">Tel: <span className="text-gray-500">+998 90 649 24 23</span></h5>
        <h5 className="font-serif text-black">Joylashuv: <span className="text-gray-500">Toshkent, O'zbekiston</span></h5>
        </div>
        <div className="flex flex-col gap-5 ">
          <input className=" w-80 border  border-gray-300 rounded-md p-2 focus:border-amber-800 outline-none" type="text" placeholder="Ismingiz" />
          <input className=" w-80 border border-gray-300 rounded-md p-2 focus:border-amber-800 outline-none" type="text" placeholder="Email manzilingiz" />
          <input className=" w-80 border border-gray-300 rounded-md p-2 focus:border-amber-800 outline-none" type="text" placeholder="Loyiha mavzusi" />
          <input className=" w-80 h-30 border border-gray-300 rounded-md pb-18 pl-2 focus:border-amber-800 outline-none " type="text" placeholder="Xabaringiz..." />
          <button className=" w-80 border border-gray-300 rounded-md p-2 bg-black text-white hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">XABAR YUBORISH</button>
        </div>
        </footer>
      </div>
      
    )
    
}

export default App



