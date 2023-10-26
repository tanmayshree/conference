import React from 'react'

export default function Heading(props) {
    return (
        <div>
            <h2 className='justify-center md:w-auto md:justify-normal md:text-left m-6 md:px-10 font-semibold text-xl md:text-3xl label italic font-serif bg-cyan-900 text-white rounded-lg'>
                # {props.title}
            </h2>
        </div>
    )
}
