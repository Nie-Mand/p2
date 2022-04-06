const Work = () => {
  return (
    <div className="py-40 px-4 md:px-20 lg:px-40">
      <h1 className="text-2xl font-black text-center">WORK & PROJECTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        <Project
          url="https://tpbr.vercel.app"
          short="A COMPETITIVE PROGRAMMING PLATFORM"
          label="THE <br /> PROGRAMMING BATTLE ROYALE <br />"
        />
        <Project short="A WEB BASED BLOCKCHAIN IDE" label="SHIFT IDE" />

        <Fact
          number="+2"
          label="INTERNSHIPS"
          className="col-span-1 md:col-span-2 lg:col-span-1"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
        <Project
          url="https://www.npmjs.com/package/claas"
          short="A REACT LIBRARY"
          label="CLAAS"
        />
        <Project short="A REACT BOILERPLATE WITH CLI" />
        <Project short="A DEVOPS WORKFLOW FOR A MICROSERVICE BASED APP" />

        <Fact
          number="+2"
          label="FREELANCE MISSIONS"
          className="col-span-1 md:col-span-3 lg:col-span-1"
        />
      </div>
    </div>
  )
}

const Project = props => {
  const { linkLabel = 'CHECK IT OUT', url = '#', short, label } = props

  return (
    <div>
      <a
        rel="noreferrer noopener"
        href={url}
        className="text-xs py-4 flex items-center gap-x-2"
        target="_blank"
      >
        {linkLabel}
        <img src="/icons/next.svg" alt="" className="h-2" />
      </a>

      <div className="bg-black p-6 md:p-10 text-white">
        <h3 className="text-xs">{short}</h3>

        <div className="h-6"></div>

        {label && (
          <h2 className="text-2xl font-black">
            {label.split('<br />').map(line => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        )}
      </div>
    </div>
  )
}

const Fact = props => {
  const { label, number, className } = props
  return (
    <div
      className={`border border-black font-black grid place-content-center p-10 ${className}`}
    >
      <h1 className="text-8xl text-center">{number}</h1>
      <h3 className="text-xs text-center">{label}</h3>
    </div>
  )
}

export default Work
