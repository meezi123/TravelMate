import React from "react";
import bg from "../assets/bg2.jpg";
import Button from "../Components/Button";
import ImageSlider from "../Components/ImageSlider";
import { Link } from "react-router-dom";
import { useAuth } from "../Store/Auth";
const Home = () => {
  const { isLoggedIn } = useAuth();
  const handleAuthentication = () => {
    alert("login");
  };


  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Beach sunset background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Content goes here */}

      {/* Main Content */}
      <main className="w-full asolute top-0 left-0 h-screen flex flex-row items-center justify-center z-10 px-[150px]  space-x-4">
        <div className="content w-[40%] space-y-5 ">
          <p className="text-white opacity-90  pt-2 relative  ">
            <span className="absolute top-0 left-0 w-[15%] border-t-1 border-white opacity-90"></span>
            Embark On The Journey Of A Lifetime
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48e2d7] leading-tight">
            NEVER STOP
            <br />
            EXPLORING THE
            <br />
            WORLD.
          </h1>
          <p className="text-white/80 max-w-md">
            Discover beautiful destinations, book incredible tours, and plan
            your perfect trip all in one place
          </p>
          <div className='gap-x-2 flex'>
            {isLoggedIn ? (
              <Link to='/tour'>
                <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
                  Get Started
                </Button>
              </Link>

            ) : (
              <Link to='/signup'>
                <Button bgColor='bg-[#48e2d7]' color='text-[#f0f8ff]'  >
                  Get Started
                </Button>
              </Link>

            )}

          </div>
        </div>

        <div className="w-[60%]">
          <ImageSlider />
        </div>
      </main>
      <section>

      </section>
    </div>
  );
};

export default Home;
