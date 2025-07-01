'use client'

import Image from 'next/image'
import images from '@/app/assets/data-image'
import GaleriDestinationTabsList from './tabs-list'
import GaleriDestinationTabsContent from './galeri-tabs-content'

type Props = {
  showTabsContent?: boolean
  showTabsList?: boolean
}

const GaleriDestination = ({ showTabsContent, showTabsList }: Props) => {
  return (
    <figure className="w-full lg:px-0 px-4">
      <div className="block lg:hidden">
        <div className="w-full ">
          {showTabsContent && <GaleriDestinationTabsContent />}
          {showTabsList && <GaleriDestinationTabsList />}
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="relative h-[480px] rounded-md overflow-hidden">
            <Image
              src={images.galeri1}
              alt="galeri1"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="col-span-1 gap-2 grid grid-cols-2">
          {[images.galeri2, images.galeri3, images.galeri3, images.galeri1].map((img, index) => (
            <div
              key={index}
              className="h-auto w-full  rounded-md relative overflow-hidden"
            >
              <Image
                src={img}
                alt={`galeri${index + 2}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}

export default GaleriDestination
