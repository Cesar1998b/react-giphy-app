import { API_KEY, API_URL } from "./settings";

const fromApiResponseTrends = apiResponse => {
    const {data = []} = apiResponse
    return data
}


export default function getTrendingTerms() {
    const url =
    `${API_URL}/trending/searches?api_key=${API_KEY}`;
    
    return fetch(url)
        .then(res => res.json())
        .then(fromApiResponseTrends)
  };