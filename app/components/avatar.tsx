import { socialLinks } from 'app/config'
import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt={name}
          className="mx-auto mb-10 mt-0 block rounded-full bg-gray-100 grayscale hover:grayscale-0 sm:float-right sm:mb-5 sm:ml-5 lg:mb-5 lg:mt-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      {/* <div className="flex items-center">
        <img src={picture} className="mr-4 h-12 w-12 rounded-full" alt={name} />
        <div className="text-xl font-bold">{name}</div>
      </div> */}
    </>
  )
}

export default Avatar
