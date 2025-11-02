import { listTrainings, createTraining, updateTraining } from '../services/training.service.js';

export async function getAll(req, res, next){
  try{
    const list = await listTrainings();
    res.json({ ok:true, data:list });
  }catch(e){ next(e); }
}

export async function create(req, res, next){
  try{
    const created = await createTraining(req.body);
    res.status(201).json({ ok:true, data:created });
  }catch(e){ next(e); }
}

export async function patch(req, res, next){
  try{
    const updated = await updateTraining(req.params.id, req.body);
    res.json({ ok:true, data:updated });
  }catch(e){ next(e); }
}
