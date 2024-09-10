// src/api.js
export const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://charismatic-goat-c6c4ff.instawp.xyz/wp-json/wp/v2/tarjeta?author=2&acf_format=standard"
      );
      const result = await response.json();
      if (result.length > 0) {
        return result[0].acf; // Retorna solo los campos ACF
      }
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  