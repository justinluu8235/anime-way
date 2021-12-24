
const axios = require('axios');

// axios.get('https://api.jikan.moe/v3/top/characters')
//       .then((response) => {
//           console.log(response.data);
          
//       })
//       .catch((error) => {
//           console.log('error hitting api', error);
//       })


axios.get('http://localhost:3000/seasons')
.then((response) => {
    console.log(response.data.seasonArray);
})
.catch((err) => {
    console.log(err);
})

// {
//     seasonArray: [
//       {
//         _id: '61c4ecc17b547ae52bd4f6de',
//         url: 'https://myanimelist.net/anime/34927/Rilu_Rilu_Fairilu__Mahou_no_Kagami',
//         title: 'Rilu Rilu Fairilu: Mahou no Kagami',
//         image_url: 'https://cdn.myanimelist.net/images/anime/13/84497.jpg',
//         synopsis: 'Second Season of Rilu Rilu Fairilu: Yousei no Door.',
//         __v: 0
//       }
//     ]
//   }