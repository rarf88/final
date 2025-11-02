import { Schema, model } from 'mongoose';

const TrainingSchema = new Schema({
  title: { type:String, required:true },
  date:  { type:Date, required:true },
  mode:  { type:String, enum:['Presencial','Virtual'], required:true },
  owner: { type:String, required:true },
  materialUrl: { type:String },
  status: { type:String, enum:['Programada','Realizada','Cancelada'], default:'Programada' }
}, { timestamps:true });

export default model('Training', TrainingSchema);
