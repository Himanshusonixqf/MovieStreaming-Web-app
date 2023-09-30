 import styles from '@/app/styles/common.module.css'
   import Image from "next/image";
 import Link from "next/link";


import React from 'react'



const MovieCard = (curElem) => {

    const {score, show}= curElem;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                <Image src={show.image.medium} alt={show.image.medium} width={60} height={20} />

                </div>
                <div className={styles.card_data}>
                   <h1>{score}</h1>
                  
                   <h2>{show.id}</h2>
                    <p>
                        {`${show.name} ...`}
                    </p>
                    <p>
                        {`${show.summary} `}
                    </p>
                

                    <Link href={show.url}>
                        <button>
                            go to the  More
                        </button>
                    </Link>  

                    {/* <Link href={`/movie/${show.id}`}>
                        <button>
                            Read More
                        </button>
                    </Link> */}
                </div>
            </div>

        </>
    );
};

export default MovieCard;