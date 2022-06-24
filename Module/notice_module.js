const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema(
  {
    notice: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("notice", noticeSchema);
