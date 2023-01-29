const express = require('express');
const cors = require('cors')
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/translate", (req, res) => {
    const query = req.body.query;
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: query,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((response) => {
        res.status(200).json(response.data.choices[0].text)
    }).catch((err) => {
        console.log(err)
        res.status(404).json(err)
    })
})

app.listen(3001, () => {
    console.log("Server started on port 3001") 
})