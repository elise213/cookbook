const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/fetch-letterboxd-rating', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        const html = response.data;
        const startTag = '"twitter:data2" content="';
        const endTag = '" />...';
        const startTagIndex = html.indexOf(startTag);
        const endTagIndex = html.indexOf(endTag, startTagIndex);
        const rating = html.substring(startTagIndex + startTag.length, endTagIndex);
        res.json({ rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
