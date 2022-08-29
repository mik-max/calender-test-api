import express from 'express';
import Cors from 'cors'

import router from './src/routes/eventsRoutes.js';
const app = express()
const port = process.env.PORT || 8000


//middlewares
app.use(express.json());
app.use(Cors());

app.use('/api', router)

//API endpoints
app.get('/', (req, res) => res.status(200).send('Hello CleverProgrammers!!!!!. CELZ4 API!!!🔥🔥'))

//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
 