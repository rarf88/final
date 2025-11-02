import Attendance from '../models/attendance.model.js';

export async function addAttendance(data){
  return await Attendance.create(data);
}
