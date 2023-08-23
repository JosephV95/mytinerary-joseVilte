// import { useState, useEffect } from "react";

export const getAllCities = async (queryParams= "") => {
  try {
    const {allCities}  = await fetch("http://localhost:4000/api/cities" +queryParams)
      .then((res) => res.json())
      .then()

    return allCities
  } catch (error) {
    return [];
  }
}

export const getCity = async (id) =>{
  try {
    const city  = await fetch("http://localhost:4000/api/cities/" +id)
      .then((res) => res.json())
      .then()

      return city.oneCity;
  } catch (error) {
    return []
  }
}
