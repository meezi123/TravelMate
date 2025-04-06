import { useEffect, useState } from "react";
import { IoIosArrowBack, IoMdPaper } from "react-icons/io";
import gsap from 'gsap'

const image1 = "src/assets/1.jpg"
const image2 = "src/assets/2.jpg";
const image3 = "src/assets/3.jpg";
const image4 = "src/assets/4.jpg";
const image5 = "src/assets/5.jpg";
const image6 = "src/assets/6.jpg";

const imageArray = [image1, image2, image3, image4, image5, image6];

function ImageSlider() {

  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1)
      setRightImage(1);
    }
    else if (midImage === imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    }
    else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const Increment = () => {
    setMidImage((midImage + 1) % imageArray.length);
    animateSlider();
  }

  const Decrement = () => {
    setMidImage(midImage === 0 ? imageArray.length - 1 : midImage - 1);
    animateSlider();
  }

  const animateSlider = () => {
    gsap.fromTo('.middleImage', { x: -200, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 });
    gsap.fromTo('.rightImage', { x: 600, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 });
    gsap.fromTo('.leftImage', { x: -500, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="flex justify-center items-center w-full gap-10 mb-8">
        <img src={imageArray[leftImage]} className="leftImage h-[230px] w-[150px] rounded-[10px] transform -translate-x-10 -z-10 blur-[1px] " />
        <div className="relative w-[275px] h-[400px] rounded-[25px] overflow-hidden shadow-lg">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(360deg, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.5) 35%, rgba(255, 255, 255, 0) 100%)`,
              mixBlendMode: 'multiply',
            }}
          />

          {/* Image */}
          <img
            src={imageArray[midImage]}
            className="h-full w-full object-cover"
          />

          {/* Heading */}
          <h2 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl font-medium z-20">
            Kashmir
          </h2>
        </div>


        <img src={imageArray[rightImage]} className="rightImage h-[230px] w-[150px] rounded-[10px] transform translate-x-10 -z-10 blur-[1px] " />
      </div>

      <div className="flex gap-6 mb-4">
        <button className="leftButton p-3 border-2 border-[#48e2d7] rounded-full flex justify-center items-center cursor-pointer" onClick={Decrement}>
          <IoIosArrowBack color="#48e2d7" />
        </button>
        <button className="rightButton p-3 border-2 border-[#48e2d7] rounded-full flex justify-center items-center cursor-pointer transform scale-x-[-1]" onClick={Increment}>
          <IoIosArrowBack color="#48e2d7" />
        </button>
      </div>

      <div className="flex gap-2">
        {imageArray.map((_, index) => (
          <div key={index} className={`dots h-[5px] w-[5px] rounded-full ${index === midImage ? 'bg-[#48e2d7]' : 'border border-[#f0f8ff]'}`}></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
