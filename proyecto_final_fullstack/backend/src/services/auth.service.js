import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import User from '../models/user.model.js';

export async function registerUser({ name, email, password }){
  const exists = await User.findOne({ email });
  if(exists) throw Object.assign(new Error('Ya existe un usuario con ese correo'), { status:409 });
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  return { id:user._id, name:user.name, email:user.email };
}

export async function loginUser({ email, password }){
  const user = await User.findOne({ email });
  if(!user) throw Object.assign(new Error('Credenciales inválidas'), { status:401 });
  const ok = await bcrypt.compare(password, user.password);
  if(!ok) throw Object.assign(new Error('Credenciales inválidas'), { status:401 });
  const token = jwt.sign({ id:user._id, email:user.email, name:user.name }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES });
  return { token, user: { id:user._id, email:user.email, name:user.name } };
}
