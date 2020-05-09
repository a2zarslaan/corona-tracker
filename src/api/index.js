import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    // destructuring
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return {
      // values and keys have the same name, so we don't need to explicitly define them while destructuring
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};
