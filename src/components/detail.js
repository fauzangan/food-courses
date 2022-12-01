import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DetailCard({data}) {
    const [like, setLike] = useState()
    const {id} = useParams()
    
    useEffect(() => {
        // mengambil data dari API
        const fetchData = async () => {
          try {
            const results = await axios(
              `https://6388a9fda4bb27a7f78e0b06.mockapi.io/food-course/${id}`
            );
            setLike(results.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [id]);
   
    const handleLike = async () => {
        try {
          const results = await axios.put(
            `https://6388a9fda4bb27a7f78e0b06.mockapi.io/food-course/${id}`,
            {
              like: like.like + 1,
            }
          )
          setLike(results.data);
        } catch (err) {
          console.log(err);
        }
      }

  return (
<article class="group max-w-5xl m-auto py-8 bg-gray-100 rounded-2xl h-[509px]">
  <img
    alt="Lava"
    src={data?.image}
    class="h-80 w-80 m-auto rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div class="p-4">
    <h3 class="text-lg font-medium text-gray-900">
     {data?.title}
    </h3>

    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      {data?.description}
    </p>
  </div>
  <div className='flex flex-row px-4 items-center'>
  <div className="cursor-pointer " onClick={handleLike}>
    
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </div>
    <div>
        <p className='ml-2'>{like?.like} Likes</p>
    </div> 
  </div>
</article>

  )
}
