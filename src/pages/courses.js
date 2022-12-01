import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import axios from 'axios'
export default function Courses() {
    const [data,setData] = useState()
    
    useEffect(() => {
        // mengambil data dari API
        const fetchData = async () => {
          try {
            const results = await axios(
              'https://6388a9fda4bb27a7f78e0b06.mockapi.io/food-course'
            );
            setData(results.data);
          } catch (err) {
            console.log(err)
          }
        };
        fetchData();
      }, []);
    console.log(data)
  return (
    <div className='max-w-5xl m-auto grid grid-cols-2 gap-4 mt-6 mb-6'>
        {data && data.map((courses) => (
            <Card data={courses} key={courses.id} />
          ))}</div>
  )
}
