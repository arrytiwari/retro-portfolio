'use client'
import { FlexibleLayout, LayoutFooter, LayoutHeader, LayoutMain, LayoutSidebarLeft, LayoutSidebarRight,Text } from 'retro-react'

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
      <Text variant="paragraph">
        © 1999 - 90s Nostalgia Zone
      </Text>
    </LayoutFooter>
    <LayoutMain>
    <Text
 className='bg-[#FFD7C4] w-[48%] ml-2'
  variant="h3"
>
    HEY, I AM ARYAN
</Text>
    </LayoutMain>
  </FlexibleLayout>
  )
}
