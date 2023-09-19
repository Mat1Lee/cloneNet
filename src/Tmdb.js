
 export const API_KEY = 'c7cb0be3f34a33be52796001f56051a3';
export const API_BASE = 'https://api.themoviedb.org/3'

export const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
  
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Top Trending',
                items: await basicFetch(`/discover/movie?with_networks=213&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'sci-fi',
                title: 'Khoa học viễn tưởng',
                items: await basicFetch(`/discover/movie?with_genres=878&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasy',
                title: 'Tưởng tượng',
                items: await basicFetch(`/discover/movie?with_genres=14&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Hành Động',
                items: await basicFetch(`/discover/movie?with_genres=28&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Hài kịch',
                items: await basicFetch(`/discover/movie?with_genres=35&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Kinh Dị',
                items: await basicFetch(`/discover/movie?with_genres=27&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Tình Cảm',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=vi-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Phim tài liệu',
                items: await basicFetch(`/discover/movie?with_genres=99&language=vi-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getTypeMoive: async (type)=>{
        let listMovie ={};
        switch (type) {
            case 'movie':
                listMovie = await basicFetch(`/discover/movie/?language=vi-VN&api_key=${API_KEY}`)
                break;
            case 'tv':
                listMovie = await basicFetch(`/discover/tv/?language=vi-VN&api_key=${API_KEY}`)
                break;
            default:
                listMovie = null;
                break;
        }
        console.log(listMovie);
        return listMovie
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        
        if (movieId) {
            
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=vi-BR&api_key=${API_KEY}&append_to_response=videos`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=vi-BR&api_key=${API_KEY}&append_to_response=videos`)
                    break;
                default:
                    info = null;
                    break;
            }
        }
    //    console.log('getApi',info.videos.results[0].key);
        return info;
    },
   
    getRecomment: async (movieId,type)=>{
        let listRecomment={}
        if(movieId) {
            switch (type) {
                case 'movie':
                    listRecomment = await basicFetch(`/movie/${movieId}/recommendations?language=vi-BR&page=1&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    listRecomment =  await basicFetch(`/tv/${movieId}/recommendations?language=vi-BR&page=1&api_key=${API_KEY}`)
            
                default:
                    listRecomment =null
                    break;
            }
            // https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1
           
        }
       
        return listRecomment;
        
    }
}