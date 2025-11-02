import { addAttendance } from '../services/attendance.service.js';

export async function create(req, res, next){
  try{
    const created = await addAttendance(req.body);
    res.status(201).json({ ok:true, data: created });
  }catch(e){ next(e); }
}
