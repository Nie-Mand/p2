import { useState } from 'react'
const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="backdrop-blur-xl bg-black/80 w-full z-30 fixed text-white px-4 md:px-20 py-6 flex items-center justify-between">
        <h1 className="font-black">NIEMAND</h1>

        <div className="hidden md:flex font-medium text-xs  items-center gap-x-4 ">
          <a href="#">WHO AM I</a>
          <a href="#">WORK</a>
          <a href="#">NON TECH ME</a>
          <a href="#">CONTACT</a>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          <img src="/icons/github.svg" alt="GitHub" className="h-5" />
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5" />
          <img src="/icons/twitter.svg" alt="Twitter" className="h-5" />
        </div>

        <button className="block md:hidden" onClick={() => setOpen(!open)}>
          <img src="/icons/x.svg" alt="Menu" />
        </button>
      </nav>
      {open && (
        <menu className="backdrop-blur-xl bg-black/80 fixed inset-0 z-20 grid  font-medium text-xs  items-center gap-x-4 text-white">
          TODO
        </menu>
      )}
    </>
  )
}

export default Nav
