'use client'

import Image from 'next/image'
import images from '@/app/assets/data-image'
import { TabsContent } from '@/components/ui/tabs'

const GaleriDestinationTabsContent = () => {
  return (
    <TabsContent value="main">
      <div className="h-[350px] rounded-md overflow-hidden mb-2 relative">
        <Image src={images.galeri1} alt="main" fill className="object-cover rounded-md" />
      </div>
    </TabsContent>
  )
}

export default GaleriDestinationTabsContent
