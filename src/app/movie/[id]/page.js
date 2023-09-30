// import React from 'react';
// import styles from "@/app/styles/common.module.css"
// import Image from "next/image";


// const Page = async ({params}) => {
//     const id = params.id;



//     const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://netflix54.p.rapidapi.com/search/',
//   params: {
//     query: 'stranger',
//     offset: '0',
//     limit_titles: '50',
//     limit_suggestions: '20',
//     lang: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': '8a7a5feaaamshe335504ab82eddap15cfdfjsnc1231bda6c9c',
//     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

//     // const url = process.env.RAPID_KEY;
//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         'X-RapidAPI-Key': '8a7a5feaaamshe335504ab82eddap15cfdfjsnc1231bda6c9c',
//     //         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
//     //       }
//     // };


//     // const res = await fetch(url, options);
//     // const data = await res.json();
//     // console.log(data);
//     // const main_data = data[0].details;

   

// // const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
// // const options = {
// //   method: 'GET',
// //   headers: {
// //     'X-RapidAPI-Key': '8a7a5feaaamshe335504ab82eddap15cfdfjsnc1231bda6c9c',
// //     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
// //   }
// // };

// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }

//     return (

//         <>
//             {/* // <div className={styles.container}>
//             //     <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
//             //     <div className={styles.card_section}>
//             //         <div>
//             //             <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
//             //         </div>
//             //         <div>
//             //             <h1>{main_data.title}</h1>
//             //             <p>{main_data.synopsis}</p>
//             //         </div>
//             //     </div>
//             // </div> */}


//             </>
//     );
// };

// export default Page;