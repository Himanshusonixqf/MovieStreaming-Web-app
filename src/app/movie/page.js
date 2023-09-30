import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";
import jsond from './shows.json';

const Movie = async () => {

     await new Promise(resolve => setTimeout(resolve, 3000));


  const url='http://api.tvmaze.com/search/shows?q=golden%20girls';
    //const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    //const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        // 'X-RapidAPI-Key': '8a7a5feaaamshe335504ab82eddap15cfdfjsnc1231bda6c9c',
        // 'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'

        Host :'api.tvmaze.com'
       
      }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = await data[0].score;
        // const score = await result.score;
        console.log(result)
      
 
    } catch (error) {
        console.error(error);
    }

    return (
        <>

<h1>Series & Movie</h1>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                   
                    <div className={styles.card_section}>
                        {
                          jsond.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                            

                          
                            
                         
                        }



                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;