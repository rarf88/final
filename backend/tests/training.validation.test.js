import { _validateTrainingDate } from '../src/services/training.service.js';

describe('Training date validation', ()=>{
  test('rechaza fecha pasada', ()=>{
    const past = new Date(Date.now()-86400000).toISOString();
    expect(()=> _validateTrainingDate(past)).toThrow(/futura/);
  });
  test('acepta fecha futura', ()=>{
    const future = new Date(Date.now()+86400000).toISOString();
    expect(()=> _validateTrainingDate(future)).not.toThrow();
  });
});
