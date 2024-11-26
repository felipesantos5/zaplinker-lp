import logoWhite from "../../assets/zaplinker-white.png"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 860);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    setExpanded(false);
  };

  // const scroll = new SmoothScroll('a[href*="#"]', {
  //   speed: 800,
  //   speedAsDuration: true
  // });


  return (
    <motion.header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex flex-col">
        <motion.div
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 2 }}
          className="p-[03px] flex justify-center items-center text-[17px] bg-[#3c3d3c80] shadow-lg rounded-full mt-6 "
        >
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            className="bg-zinc-900/90 h-9 w-24 px-2 rounded-full font-bold flex justify-center items-center"
            href="/"
          >
            <img src={logoWhite} alt={"logo Zapfy teste"} width={30} className={"mx-6"} />
          </motion.a>

          {isMobile ? (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, duration: 0.5 }} className={`flex flex-col`}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, duration: 0.5 }}
                className="h-9 w-28 hover:bg-[#484849]/40 transition-colors duration-500 rounded-full cursor-pointer font-medium flex justify-center items-center text-white"
                onClick={() => {
                  if (isMobile) {
                    toggleExpanded();
                  }
                }}
              >
                <button>Menu</button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="flex xlg:flex">
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, duration: 1, delay: 1.0 }}
                className="h-9 w-28 hover:bg-[#484849]/40 transition-colors duration-500 rounded-full cursor-pointer font-medium flex justify-center items-center text-white"
              // href="#sobre-nos"

              >
                Planos
              </motion.button>
              <motion.a
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, duration: 1, delay: 0.8 }}
                className="h-9 w-28 rounded-full cursor-pointer flex justify-center items-center bg-white  transition-colors duration-500 text-black font-semibold xlg:w-full"
                href="https://app.zaplinker.com/"
              // onClick={() => scrollToSection('planos')}
              >
                Acessar
              </motion.a>
            </div>
          )}
        </motion.div>

        {expanded && (
          <div className="text-white flex flex-col justify-center gap-4 items-center bg-[#3c3d3c80]/35 backdrop-blur-[5px] shadow-lg rounded-xl mt-1 py-4">
            {" "}
            <motion.a
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, duration: 1, delay: 0.4 }}
              className="h-11 w-36 hover:bg-[#484849]/40 transition-colors duration-500 rounded-full cursor-pointer font-semibold flex justify-center items-center text-white"
              href="#sobre-nos"
              onClick={closeModal}
            >
              Planos
            </motion.a>
            <motion.a
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, duration: 1, delay: 0.2 }}
              className="h-9 w-28 rounded-full cursor-pointer flex justify-center items-center  font-semibold bg-white text-black "
              href="#planos"
              onClick={closeModal}
            >
              Acessar App
            </motion.a>
          </div>
        )}

      </div>
    </motion.header>
  );
};