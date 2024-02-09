import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Achievement = ({title , subtitle , description}) => {
  return (
    <div className='mb-[15px] ml-[15px] pb-[15px] border-b-2 border-gray'>
        <Heading tagName="h4" text={title} style="text-[21px]"/>    
        <Paragraph text={subtitle} style="text-[16px] mt-[5px]" />
        <Paragraph text={description} style="text-[16px] mt-[8px] text-[#6C757D]"/>
    </div>
  )
}

export default Achievement