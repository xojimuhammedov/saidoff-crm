import Link from 'next/link'
import React from 'react'
function NatificationView() {
  const data = [
    {
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },{
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },{
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },{
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },{
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },{
        title: "Lorem ipsum dolor",
        descriptions: "Lorem ipsum dolor sit amet consectetur. Augue ipsum blandit nullam justo gravida vitae vulputate nisi condimentum. Diam ultrices est ac nunc facilisis lectus malesuada nec. "
    },
]


return (
<div className='container mx-auto'>
    <div className='mt-6 flex items-center justify-between'>
            <div><h4 className='text-3xl text-[#002B48] leading-[39px]'>Xabarlar</h4></div>
    </div>
    <div className='grid grid-cols-3 gap-5 mb-12 '>
        {data.map((item, index) => (
            <div key={index} className='mt-10 container mx-auto  cursor-pointer'>
            <div>
                <Link href={"/natification/1"}><div className='bg-[#D9D9D9] w-full h-[200px] rounded-[16px]'></div></Link>
            </div>
            <h4 className='text-xl leading-[30px] mt-5'>{item.title}</h4>
            <p className='text-base leading-[24px] w-full mt-3'>{item.descriptions}</p>
        </div>
        ))}
    </div>
</div>
)
}

export default NatificationView