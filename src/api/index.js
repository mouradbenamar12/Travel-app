import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {

    try{
      const options = {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'df92b9648dmsh7fff4dba491bd16p190c11jsn8b0f1369a050'
        }
      };
        const { data : {data}} = await axios.get(URL, options);
        return data;

    }catch(error){
        console.log(error);
    }
}
