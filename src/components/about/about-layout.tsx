'use client'
import { FlexibleLayout, LayoutFooter, LayoutHeader, LayoutMain, LayoutSidebarLeft, LayoutSidebarRight,Text } from 'retro-react'
import Image from 'next/image'
import AboutDescription from './about-description'
const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."

export default function AboutLayout() {
  return (
    <FlexibleLayout
    sx={{
      '& .flexible-layout-child-cell': {
        border: '1px solid black'
      }
    }}
    className='text-black w-full'
  >
    <LayoutFooter>
        <div className="flex items-center space-x-3">
    <Image src="https://i.postimg.cc/rpnTNgmm/3cfa39cd-30d5-472a-97fc-6695ef338058-fotor-20240908221239.jpg" alt="90s Nostalgia Zone Logo"  width={250} height={200}
        className='rounded-md ' />
    {/* <Image src='https://i.postimg.cc/BbMZRsZT/Untitled-design-1.jpg'  alt="90s Nostalgia Zone Logo" width={300} height={200} className='rounded-md w-full' /> */}
       <Image src='/code.gif'  alt="90s Nostalgia Zone Logo" width={300} height={200}  unoptimized  className='rounded-md w-full' />
        </div>
      <Text variant="paragraph">
        © 1999 - 90s Nostalgia Zone
      </Text>
    </LayoutFooter>
    <LayoutMain>
    <AboutDescription />

    </LayoutMain>
  </FlexibleLayout>
  )
}
