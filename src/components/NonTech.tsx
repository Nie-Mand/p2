import { useState } from 'react'
const NonTech = () => {
  const [song, setSong] = useState(randomSong())
  return (
    <div className="text-white h-screen bg-[url(/pics/bg2.png)] bg-cover px-4 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32 items-center">
      <div>
        <h3 className="font-black ">YOU DID NOT ASK FOR THIS</h3>
        <div className="h-4"></div>
        <img
          src="/pics/non-tech-me.svg"
          alt="Non Tech Me"
          className="hidden md:block"
        />
        <img
          src="/pics/non-tech-me-split.svg"
          alt="Non Tech Me"
          className="block md:hidden"
        />
      </div>

      <div className="flex flex-col  gap-5 md:gap-20 ">
        <div className="flex items-center gap-5 flex-col sm:flex-row text-center">
          <img src="/icons/spotify.svg" alt="Spotify" />

          <a
            rel="noreferrer noopener"
            className="underline"
            href={song}
            target="_blank"
            onClick={() => {
              setSong(randomSong())
            }}
          >
            Click to be check one of my top{' '}
            <span className="font-bold">10</span> favorite songs
          </a>
        </div>

        <div className="flex items-center gap-5 flex-col sm:flex-row text-center">
          <img src="/icons/hbo.svg" alt="HBO" />

          <span>Game of Thrones &gt;&gt;&gt;</span>
        </div>

        <div className="flex items-center gap-5 flex-col sm:flex-row text-center">
          <img src="/icons/game.svg" alt="Game" />

          <span>eFootball PES 2021</span>
        </div>
      </div>
    </div>
  )
}

const randomSong = () => {
  return songs[Math.floor(Math.random() * 10)]
}

const songs = [
  'https://www.youtube.com/watch?v=crkYHUGHtZY',
  'https://www.youtube.com/watch?v=ygTZZpVkmKg',
  'https://www.youtube.com/watch?v=8ex38L8xtNI',
  'https://www.youtube.com/watch?v=WILNIXZr2oc',
  'https://www.youtube.com/watch?v=TV1r4m8c9SI',
  'https://www.youtube.com/watch?v=Z-48u_uWMHY',
  'https://www.youtube.com/watch?v=qYbm8HJlwMs',
  'https://www.youtube.com/watch?v=VX4e4l7aKeo',
  'https://www.youtube.com/watch?v=JPY6lQjokYs',
  'https://www.youtube.com/watch?v=HQnj5ZwrseE',
]

export default NonTech
