import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema(
  {
    commentId: String,
    commentWriteId: String,
    commentContent: String,
    // commentDate: String,
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study',
    },
  },
  { timestamps: true },
);
export const Comment =
  mongoose.models?.Comment || mongoose.model('Comment', commentSchema);
