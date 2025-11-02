import Training from '../models/training.model.js';

export async function listTrainings(){
  return await Training.find().sort({ date:1 });
}

export function _validateTrainingDate(date){
  if(new Date(date) < new Date()){
    const err = new Error('La fecha debe ser futura'); err.status=400; throw err;
  }
}

export async function createTraining(data){
  _validateTrainingDate(data.date);
  return await Training.create(data);
}

export async function updateTraining(id, data){
  return await Training.findByIdAndUpdate(id, data, { new:true });
}
