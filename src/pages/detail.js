import React,{useState, useEffect} from 'react'
import DetailCard from '../components/detail'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
    const [data,setData] = useState()
    const {id} = useParams()
    useEffect(() => {
        // mengambil data dari API
        const fetchData = async () => {
          try {
            const results = await axios(
              'https://6388a9fda4bb27a7f78e0b06.mockapi.io/food-course/'+id
            );
            setData(results.data);
          } catch (err) {
            console.log(err)
          }
        };
        fetchData();
      }, [id]);
     
  return (
    <div><DetailCard data = {data}/></div>
  )
}
