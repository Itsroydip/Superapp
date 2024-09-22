import React, { useState } from 'react'
import fetchNews from '../api/fetchNews'
import formatDateTime from '../utils/formatDateTime'
import { useEffect } from 'react'

const News = () => {
    const [article, setArticle] = useState();
    const[dateTime, setDateTime] = useState({});
    
    useEffect(()=>{
        fetchNews()
        .then((data) => {
            if (data.status == "ok") {
              const randomIndex = Math.floor(Math.random() * data.articles.length);
              setArticle(data.articles[randomIndex]);
            }
            console.log(data)
          });

          const {date, time} = formatDateTime();
          setDateTime({date,time});
          
    },[])

  return (
    <a href={article?.url}>
    <div className='h-4/6 bg-cover text-white flex flex-col justify-end cursor-pointer' style={{backgroundImage:`url(${article?.urlToImage})`}}>
        <div className='h-max opacity-80 bg-black p-4'>
            <p className='text-lg font-normal overflow-hidden'>{article?.title}</p>
            <p className='font-bold'>{dateTime.date}{' | '+dateTime.time}</p>
        </div>         
    </div>
    <div className='h-2/6 p-8 font-normal leading-6 text-justify bg-white'>
        <p> {article?.content} </p>
    </div>

    </a>
  )
}

export default News