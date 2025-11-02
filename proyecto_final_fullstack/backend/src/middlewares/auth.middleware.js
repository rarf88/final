import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export function authMiddleware(req, res, next){
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if(!token) return res.status(401).json({ ok:false, message:'No autorizado' });
  try{
    const payload = jwt.verify(token, env.JWT_SECRET);
    req.user = payload;
    next();
  }catch(e){
    return res.status(401).json({ ok:false, message:'Token invalido' });
  }
}