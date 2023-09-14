
export const getCountries = async() =>{
  try {
    const getCountries = fetch("../src/utils/dataCountries.json")
        .then((res)=> res.json())
        // .then( (resp)=> { return resp})
              
    return getCountries

  } catch (error) {
    return []
  }
}
