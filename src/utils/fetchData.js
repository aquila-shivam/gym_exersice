export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '76506dc85amsh8706779755a300fp160c58jsn78784bffdafd',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async ( url,options) =>{
    const response= await fetch(url,options);
    const data = await response.json();
    return data;
}