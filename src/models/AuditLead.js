import mongoose from "mongoose";

const AuditLeadSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    email: String,
    brandName: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const AuditLead =
  mongoose.models.AuditLead ||
  mongoose.model("AuditLead", AuditLeadSchema);

export default AuditLead;