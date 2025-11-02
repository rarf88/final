import { connectDB } from '../config/db.js';
import { env } from '../config/env.js';
import Training from '../models/training.model.js';

async function run(){
  await connectDB(env.MONGODB_URI);
  const now = new Date();
  const data = [
    { title:'Seguridad informática básica', date: new Date(now.getTime()+86400000*3), mode:'Virtual', owner:'Talento Humano', materialUrl:'https://ejemplo.com/seguridad' },
    { title:'Uso responsable del correo', date: new Date(now.getTime()+86400000*7), mode:'Presencial', owner:'Sistemas', materialUrl:'https://ejemplo.com/correo' }
  ];
  await Training.insertMany(data);
  console.log('Seed completo:', data.length, 'capacitaciones');
  process.exit(0);
}

run().catch(e=>{ console.error(e); process.exit(1); });
