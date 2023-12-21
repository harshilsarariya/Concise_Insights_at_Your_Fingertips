import client from "../api/client";

async function getSummary(topic: string): Promise<any> {
  try {
    const { data } = await client(`/getSummary?topic=${topic}`);
    const result = await data;
    console.log(data);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling code if needed
  }
}

export { getSummary };
