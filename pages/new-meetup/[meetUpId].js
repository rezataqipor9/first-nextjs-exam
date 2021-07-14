import React, { Component } from 'react';
import { useRouter } from 'next/router'
const NewsId = () => {
    const router = useRouter()
    const  {newsId}  = router.query
    console.log(newsId)
    return (  <h1>Detailes{newsId}</h1>);
}
 
export default NewsId;