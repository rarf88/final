import { z } from 'zod';

export function validateBody(schema){
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if(!result.success){
      const issues = result.error.issues.map(i => `${i.path.join('.')} ${i.message}`);
      return res.status(400).json({ ok:false, message: 'Datos inválidos', errors: issues });
    }
    req.body = result.data;
    next();
  };
}

export const registerSchema = z.object({
  name: z.string().min(2, 'muy corto'),
  email: z.string().email('correo inválido'),
  password: z.string().min(6, 'mínimo 6 caracteres')
});

export const loginSchema = z.object({
  email: z.string().email('correo inválido'),
  password: z.string().min(6, 'mínimo 6 caracteres')
});

export const trainingCreateSchema = z.object({
  title: z.string().min(3, 'muy corto'),
  date: z.string().or(z.date()),
  mode: z.enum(['Presencial','Virtual']),
  owner: z.string().min(2),
  materialUrl: z.string().url().optional(),
  status: z.enum(['Programada','Realizada','Cancelada']).optional()
});

export const trainingPatchSchema = z.object({
  title: z.string().min(3).optional(),
  date: z.string().or(z.date()).optional(),
  mode: z.enum(['Presencial','Virtual']).optional(),
  owner: z.string().min(2).optional(),
  materialUrl: z.string().url().optional(),
  status: z.enum(['Programada','Realizada','Cancelada']).optional()
});
