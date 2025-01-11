import React from 'react'
import { frontData } from '../Data/front_data'
import Card from '../component/Cards'

const Blog = () => {
  return (
    <div className="md:py-24 py-12">
      <h1 className="md:text-5xl text-4xl font-bold text-center Heading mb-20">
        Our Latest Blogs
      </h1>
      
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {frontData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            category={data.category}
            date={data.date}/>
        ))}
      </div>
      </div>

      
  )
}

export default Blog