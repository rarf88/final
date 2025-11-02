import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { log } from './utils/logger.js';

async function main(){
  await connectDB(env.MONGODB_URI);
  app.listen(env.PORT, ()=> log(`Servidor en http://localhost:${env.PORT}`));
}
main().catch(err=>{
  console.error(err);
  process.exit(1);
});
