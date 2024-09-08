import {Text} from 'retro-react'
const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
export default function AboutDescription() {
  return (
    <div className="flex flex-col justify-between h-full"> 
     <Text
    className='bg-[#FFD7C4] w-[46%]'
     variant="h3"
   >
       HEY, I AM ARYAN
   </Text>
   
   <Text
 className=''
  variant="paragraph"
>
        {content}
</Text>
   </div>
  )
}
