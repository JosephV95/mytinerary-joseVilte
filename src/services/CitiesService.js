// import { useState, useEffect } from "react";

export const CitiesService = async () => {
  try {
    const {allCities}  = await fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then()

    return allCities
  } catch (error) {
    return [];
  }
}
