import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { useMediaQuery } from 'react-responsive'
import About_bracket from './components/About_bracket'

function about() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' })
  const [bigScreen, setBigScreen] = useState(false)
  useEffect(() => {
    isTabletOrMobile ? setBigScreen(false) : setBigScreen(true)
  }, [isTabletOrMobile])

  const listForLargeDevice = [
    {
      name: 'Erica Dhawan',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/Erica_Dhawan_clip.png',
      link: 'https://ericadhawan.medium.com/',
    },
    {
      name: 'Devon price',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/DevonPrice_1DevonPrice.png',
      link: 'https://devonprice.medium.com/',
    },

    {
      name: 'GEN',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-03_1tri-col-item-03.png',
      link: 'https://gen.medium.com/',
    },
    {
      name: 'Scott Galloway',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-04_1tri-col-item-04.png',
      link: 'https://scottgalloway.medium.com/',
    },
    {
      name: 'Kaki okumura',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/KakiOkumura_1KakiOkumura.png',
      link: 'https://kakiokumura.medium.com/',
    },
    {
      name: 'Hal H. Harris',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/Hal_Harris_clip.png',
      link: 'https://est1865.medium.com/',
    },
    {
      name: 'OneZero',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-07_1tri-col-item-07.png',
      link: 'https://onezero.medium.com/',
    },
    {
      name: 'Carvell Wallace',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/CarvellWallace_1CarvellWallace.png',
      link: 'https://carvellwallace.medium.com/',
    },
    {
      name: 'Elemental',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-09_1tri-col-item-09.png',
      link: 'https://elemental.medium.com/',
    },
    { name: '', image: '', link: '' },
    { name: '', image: '', link: '' },
    { name: '', image: '', link: '' },
  ]
  const listForSmallDevice = [
    {
      name: 'Erica Dhawan',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/Erica_Dhawan_clip.png',
      link: 'https://ericadhawan.medium.com/',
    },
    {
      name: 'Devon price',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/DevonPrice_1DevonPrice.png',
      link: 'https://devonprice.medium.com/',
    },

    {
      name: 'GEN',
      image:
        'https://cdn-static-1.medium.com/sites/medium.com/about/images/tri-col-item-03_1tri-col-item-03.png',
      link: 'https://gen.medium.com/',
    },
    {
      name: '',
      image: '',
      link: '',
    },
  ]

  return (
    <div className="w-min lg:w-full">
      {/* header */}
      <Header />
      {/* about banner */}
      <div className="mx-auto mt-10  flex flex-col justify-center border-x-0 border-t-4  text-center align-middle lg:flex-row lg:border-b-4">
        <p className=" pt-7 pb-5 font-serif text-7xl lg:pb-7 ">
          Every idea needs a
        </p>
        <div className="image-container flex  justify-center  pb-10 lg:ml-5 lg:pb-0 lg:align-middle">
          <Image
            src="https://cdn-static-1.medium.com/sites/medium.com/about/images/wordmark.svg"
            alt="alt"
            width={250}
            height={250}
          />
        </div>
      </div>
      {/* body content top  */}

      {/* left side */}
      {bigScreen ? (
        <>
          <div className="flex">
            <div className=" flex flex-col border-r-4 border-b-4 align-middle">
              <div className="p-10">
                The best ideas can change who we are. Medium is where those
                ideas take shape, take off, and spark powerful conversations.
                We’re an open platform where over 100 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Our purpose is to spread these
                ideas and deepen understanding of the world.
                <br />
                <br /> We’re creating a new model for digital publishing. One
                that supports nuance, complexity, and vital storytelling without
                giving in to the incentives of advertising. It’s an environment
                that’s open to everyone but promotes substance and authenticity.
                And it’s where deeper connections forged between readers and
                writers can lead to discovery and growth. Together with millions
                of collaborators, we’re building a trusted and vibrant ecosystem
                fueled by important ideas and the people who think about them.
              </div>
            </div>
            <div className="my-auto flex min-w-[50%] justify-center border-b-4 align-middle">
              <iframe
                height="420px"
                width="420px"
                src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div className=" flex flex-col justify-center align-middle">
              <iframe
                height="420px"
                width="420px"
                src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
            <div className=" mx-auto flex flex-col justify-center  border-t-2 border-black align-middle">
              <div className="p-10">
                The best ideas can change who we are. Medium is where those
                ideas take shape, take off, and spark powerful conversations.
                We’re an open platform where over 100 million readers come to
                find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface. Our purpose is to spread these
                ideas and deepen understanding of the world.
                <br />
                <br /> We’re creating a new model for digital publishing. One
                that supports nuance, complexity, and vital storytelling without
                giving in to the incentives of advertising. It’s an environment
                that’s open to everyone but promotes substance and authenticity.
                And it’s where deeper connections forged between readers and
                writers can lead to discovery and growth. Together with millions
                of collaborators, we’re building a trusted and vibrant ecosystem
                fueled by important ideas and the people who think about them.
              </div>
            </div>
          </div>
        </>
      )}

      {/* Body content middle section */}
      <div className="  bg-[#ffd1b9] p-12 text-center  font-serif">
        <div className="mx-a mx-auto flex flex-col justify-center lg:w-[800px]">
          <h1 className="mb-8 text-7xl font-[500]">
            A living network of curious minds.
          </h1>
          <p>
            Anyone can write on Medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You’ll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
        {bigScreen ? (
          <div className="mt-16 grid grid-flow-row grid-cols-3">
            {listForLargeDevice.map((item) => (
              <About_bracket
                name={item.name}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 grid grid-flow-col grid-rows-4">
            {listForSmallDevice.map((item) => (
              <About_bracket
                name={item.name}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        )}
      </div>

      {/* footer for about */}
      <div className="bg-black text-white font-serif flex justify-center align-middle mx-auto flex-col text-center p-12">
        <h2 className="text-7xl px-24 py-14">
          Create the space for your thinking to take off.
        </h2>
        <p className="font-serif px-52">
          A blank page is also a door. At Medium you can walk through it. It's
          easy and free to share your thinking on any topic, connect with an
          audience, express yourself with a range of publishing tools, and even
          earn money for your work.
        </p>
        <button className="rounded-full text-green-600 border-2 border-green-500 max-w-max p-4 mx-auto my-6">
          Write on Medium
        </button>
      </div>
    </div>
  )
}

export default about
