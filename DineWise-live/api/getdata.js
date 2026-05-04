export default async function handler(req, res) {
  const { type } = req.query;

  let url = "";

  try {
    if (type === "api1") {
      // Google Places (New API example)
      url = `https://places.googleapis.com/v1/places:searchText?key=${process.env.GOOGLE_PLACES_NEW_API_KEY}`;
    } 
    else if (type === "api2") {
      // Google Places (Classic API example)
      url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&key=${process.env.GOOGLE_PLACES_API_KEY}`;
    } 
    else if (type === "api3") {
      // SerpAPI example
      url = `https://serpapi.com/search.json?q=restaurants&api_key=${process.env.SERPAPI_API_KEY}`;
    } 
    else {
      return res.status(400).json({ error: "Invalid API type" });
    }

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "API failed",
      details: error.message
    });
  }
}