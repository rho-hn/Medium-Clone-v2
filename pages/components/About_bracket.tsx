import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
  name?: string
  image?: string
  link?: string
}

function About_bracket({ name, image, link }: props) {
  return (
    <Link href={link ? link : ''}>
      <div className="flex max-h-[80px] max-w-[400px] border-t-2  border-black align-middle">
        <div className="rounded-full p-4">
          {image && (
            <Image
              src={image ? image : ''}
              height={50}
              width={50}
              alt="avatar"
            />
          )}
        </div>
        <h1 className="my-auto flex text-2xl">{name}</h1>
      </div>
    </Link>
  )
}

export default About_bracket
