const Hero = () => {
  return (
    <div className="bg-[url(/pics/bg1.png)]">
      <div className="h-screen bg-black/50 backdrop-blur-xl grid place-content-center p-4">
        <div className="text-center">
          <h3 className="font-black text-white">THIS IS MY</h3>

          <img
            src="/pics/happy-house.svg"
            alt="HAPPY HOUSE"
            className="hidden md:block"
          />
          <img
            src="/pics/happy-house-split.svg"
            alt="HAPPY HOUSE"
            className="block md:hidden"
          />

          <div className="h-20"></div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14 justify-center">
            <button className="text-xs text-black  bg-white/80 backdrop-blur-3xl w-32 py-3">
              MY WORK
            </button>

            <button className="text-xs text-white border-2 border-white w-32 py-2.5 box-border">
              RESUME
            </button>

            <button className="text-xs text-white border-white w-32">
              CONTACT ME
            </button>
          </div>
          <div className="h-10"></div>

          <h4 className="text-white font-extralight text-[10px]">
            OR JUST SCROLL
          </h4>
        </div>
      </div>

      <div className="min-h-screen bg-black/90 backdrop-blur-xl px-4 md:px-20 lg:px-40 grid lg:flex items-center justify-between">
        <div className="text-white ">
          <h1 className="font-black text-2xl ">WHO AM I</h1>

          <div className="h-10"></div>
          <p className="text-xs md:text-sm">
            My name is{' '}
            <span className="font-semibold">Mohammad Sofiane Barka</span>,
            <br />
            Im a <span className="italic">Full Stack Web Developer</span> and
            <span className="underline"> DevOps</span> Enthusiast.
            <br />
            Sometimes I dig a little into Blockchain Technology and
            Cybersecurity (Web Exploitation). <br />I have 2 Years of experience
            coding in Javascript / Typescript, precisely with ReactJS. <br />I
            have built `
            <span className="font-semibold">& collaborated in some</span>
            ` 4+ projects, completed 2+ Freelance missions.
            <br /> I go to the National Institute of Applied Sciences and
            Technology `Tunis`, as known as
            <span className="font-semibold"> INSAT</span>, <br />
            where I study Networking and Telecommunication Engineering. <br />I
            have been an honorable member in the Association of Computer
            Machinery
            <span className="underline"> ACM</span> <br />
            and part of other various clubs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start items-center gap-10">
          <button className="text-xs text-black  bg-white/80 backdrop-blur-3xl w-48 py-3">
            MY GITHUB PROFILE
          </button>

          <button className="text-xs text-white border-2 border-white w-48 py-2.5 box-border">
            MY LINKEDIN PROFILE
          </button>

          <button className="text-xs text-white border-white w-48">
            MY RESUME
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
