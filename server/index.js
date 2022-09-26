const express = require('express');
const axios = require('axios');

const port = 3001;
const apiKey = 'ZMnekL2oXJAkqS9Nwqifj1mNCOLsyLbuG3rAthMW';
const app = express();

app.use(express.json());

app.post('/getData', async (req, res) => {
    const kiloms = parseFloat(req.body.within.value);
    // Use this link so that all results can be returned instead of 20 at a time
    const url =`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.body.dateStart}&end_date=${req.body.dateEnd}&api_key=${apiKey}`;
    try {
        const asts = await axios({
            method: 'get',
            url: url
        });
    
        const ret = { asteroids: [] };
        const data = asts.data;

        // Loop through each of the dates that get returned
        Object.keys(data.near_earth_objects).forEach((key) => {
            const date = data.near_earth_objects[key];
            date.forEach((ast) => {
                ast.close_approach_data.forEach((cad) => {
                    // If no distance filter was provided or the miss distance is less than the one provided
                    // and the name is not already in the array, add it.
                    if ((isNaN(kiloms) || parseFloat(cad.miss_distance.kilometers) <= kiloms)
                        && !ret.asteroids.includes(ast.name)) {
                            ret.asteroids.push(ast.name);
                        }
                });
            });
        });

        res.json(ret.asteroids);
    } catch (err) {
        console.log(err.message);
        res.json({ error: true })
    };
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});