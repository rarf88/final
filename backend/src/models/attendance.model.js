import { Schema, model } from 'mongoose';

const AttendanceSchema = new Schema({
  userEmail: { type:String, required:true },
  trainingId: { type: Schema.Types.ObjectId, ref:'Training', required:true },
  score: { type:Number, min:1, max:5 },
  comments: { type:String }
}, { timestamps:true });

export default model('Attendance', AttendanceSchema);
