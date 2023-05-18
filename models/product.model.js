import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
        },

        brand: {
            type: String,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        issueDate: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

export default mongoose.model("Product", productSchema);
