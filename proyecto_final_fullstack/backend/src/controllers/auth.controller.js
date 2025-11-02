import { registerUser, loginUser } from '../services/auth.service.js';

export async function register(req, res, next){
  try{
    const result = await registerUser(req.body);
    res.status(201).json({ ok:true, data: result });
  }catch(e){ next(e); }
}

export async function login(req, res, next){
  try{
    const result = await loginUser(req.body);
    res.json({ ok:true, data: result });
  }catch(e){ next(e); }
}

export async function me(req, res){
  res.json({ ok:true, data: req.user });
}
