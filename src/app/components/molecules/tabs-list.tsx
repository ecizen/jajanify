'use client'

import Image from 'next/image'
import images from '@/app/assets/data-image'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'

const thumbnails = [
  { id: "main", src: images.galeri1 },
  { id: "1", src: images.galeri2 },
  { id: "2", src: images.galeri3 },
  { id: "3", src: images.galeri1 },
]

const GaleriDestinationTabsList = () => {
  return (
    <TabsList className="w-full bg-white grid grid-cols-4 gap-2 mt-2 z-10 h-[120px] ">
      {thumbnails.map((thumb) => (
        <TabsTrigger
          key={thumb.id}
          value={thumb.id}
          className="w-full  relative rounded-md border data-[state=active]:ring-2 data-[state=active]:ring-blue-500 data-[state=active]:border-blue-500 p-0"
        >
          <Image src={thumb.src} alt={thumb.id} fill className="object-cover rounded-md" />
        </TabsTrigger>
      ))}
    </TabsList>
  )
}

export default GaleriDestinationTabsList
