import Training from '../models/training.model.js';

export async function listTrainings(){
  return await Training.find().sort({ date:1 });
}

export async function createTraining(data){
  if(new Date(data.date) < new Date()) throw Object.assign(new Error('La fecha debe ser futura'), { status:400 });
  return await Training.create(data);
}

export async function updateTraining(id, data){
  return await Training.findByIdAndUpdate(id, data, { new:true });
}
