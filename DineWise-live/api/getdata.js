export default async function handler(req, res) {
  const { type } = req.query;

  let url = "";

  try {
    if (type === "api1") {
      url = `AIzaSyC0expaSFFwYhDNOS7CvoHuL9FsSHI-a28{process.env.API_KEY_1}`;
    } 
    else if (type === "api2") {
      url = `AIzaSyBuYXwgxVqSDjoRntySKJ9jjh-5fZOcrPM{process.env.API_KEY_2}`;
    } 
    else if (type === "api3") {
      url = `4c70c703ff8755fdc5a8d4c743bae9a30fad2bc22f8a42d1518fd41ded5a2f00{process.env.API_KEY_3}`;
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