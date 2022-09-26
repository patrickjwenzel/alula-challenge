# alula-challenge
For the coding challenge I performed Exercise 1 where I needed to make a request to the NASA NeoWS API to get information about asteroids expected to pass near the earth during the specified range.

**Note:** The exercise did say to use https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY for the link but I found that link only returns 20 at a time (out of 23.7k) so to get all the asteroids and filter them it would take almost 2 hours. Instead, since we are using a date range, I used this link from the NASA Open APIs' site: https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY which automatically filters the dates and returns all the results so from there I just had to filter by distance.

Languages Used:
- Node.js
- React.js
- TypeScript
## How to Run:
### For One Command (On Windows Git Bash):
`git clone https://github.com/patrickjwenzel/alula-challenge.git && cd alula-challenge && npm install && cd client && npm install && npm run start`

### Step by Step (On Windows Git Bash):
- Clone the repository: `git clone https://github.com/patrickjwenzel/alula-challenge.git`
- Move into the project's directory: `cd alula-challenge`
- Install root directory packages: `npm install`
- Move to client folder: `cd client`
- Install client packages: `npm install`
- Run the application: `npm start`

## Extra Packages Used:
- concurrently: Allows me to run the server and the client from one terminal rather than two.
- nodemon: Running the server with nodemon over node mintors changes to the files and restarts the page.
