// index.ts
import app from './src/app';
import {connectMongoDb} from './src/db/mongoose'

const port = 3000;
app.listen(port, async() => {
  await connectMongoDb()
  console.log(`Server is running on http://localhost:${port}`);
});
