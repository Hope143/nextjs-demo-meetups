import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://dbUser:D3ZX85rFXEyyGa6T@cluster0.hdcmpjt.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    //put meetups in the link to create a "meetups" database file, if none, then the name of your db would be "test"

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    //after requesting, we need to get a response

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
