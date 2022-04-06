const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
  }

  return (
    <div className="py-40 px-4 md:px-20 lg:px-40">
      <h1 className="text-2xl font-black text-center">CONTACT ME</h1>

      <form className="grid grid-cols-2 gap-10 py-10" onSubmit={onSubmit}>
        <div className="grid gap-2 col-span-2 md:col-span-1">
          <label htmlFor="fullname" className="text-xs">
            FULLNAME
          </label>
          <input
            type="text"
            className="bg-[#F6F6F6] p-2 focus:outline-none"
            name="fullname"
            id="fullname"
            required
          />
        </div>
        <div className="grid gap-2 col-span-2 md:col-span-1">
          <label htmlFor="email" className="text-xs">
            EMAIL
          </label>
          <input
            type="email"
            className="bg-[#F6F6F6] p-2 focus:outline-none"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="grid gap-2 col-span-2">
          <label htmlFor="content" className="text-xs">
            CONTENT
          </label>
          <textarea
            className="bg-[#F6F6F6] p-2 resize-none focus:outline-none"
            name="content"
            id="content"
            required
            rows={5}
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button className="text-xs text-white   bg-black backdrop-blur-3xl w-32 py-3">
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
