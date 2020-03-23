   import axios from 'axios'
   
    
    export const fetchShow = () => {
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
         console.log(res.data)
         return res
        })
    };
    


// import axios from "axios";
// import { useState, useEffect } from "react";

// import { formatSeasons } from '../utils/formatSeasons'


// export function useFetchShow(episodes) {
  
// const [show, setShow] = useState(null);
// const [seasons, setSeasons] = useState([]);

// useEffect(() => {
//   const fetchShow = () => {
//     axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
//   fetchShow();
// }, [episodes]);
// }