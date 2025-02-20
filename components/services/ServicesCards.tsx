"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"

interface cardItems {
  num: string;
  title: string;
  description: string;
  href: string
}
interface ServicesCardsProps {
  data: cardItems[]
}

const ServicesCards = ({ data }: ServicesCardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
    >
      {data.map((s, idx) => (
        <div
          key={idx}
          className='flex-1 flex flex-col justify-center gap-6 group'
        >
          {/* top */}
          <div className='flex w-full justify-between items-center'>
            <div className='text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500'>{s.num}</div>
            <Link
              className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all flex justify-center items-center hover:-rotate-45'
              href={s.href}
            >
              <BsArrowDownRight className='text-primary text-3xl' />
            </Link>
          </div>
          {/* title */}
          <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all'>{s.title}</h2>
          {/* subtitle */}
          <p className='text-white/60'>{s.description}</p>
          {/* border */}
          <div className='border-white/20 border-b w-100' />
        </div>
      ))}
    </motion.div>
  )
}

export default ServicesCards