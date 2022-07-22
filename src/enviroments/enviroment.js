export const enviroment = {
    apiUrl: 'https://api-football-v1.p.rapidapi.com/v3/',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
}
