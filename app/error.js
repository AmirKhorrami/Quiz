'use client'
import {useEffect} from 'react'
export default function Error({error, reset}){
    useEffect(()=>{
        console.log(error);
    }, [error])
    return(
        <div className='container'>
            <div className='quiz-container'>
              <h2 className='text-blue-800'>مشکلی پیش اومده</h2>
            <button onClick={()=> reset()}>دوباره تلاش کن</button>  
            </div>
            
        </div>
    )
}