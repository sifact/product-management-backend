import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);

        await newProduct.save();

        res.status(201).send("Product has been created...");
    } catch (error) {
        next(error);
    }
};
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).send({ data: products });
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).send("product has been deleted...");
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        // await Product.findByIdAndDelete(req.params.id);
        const id = req.params.id;
        const updateData = req.body;
        await Product.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated object
            runValidators: true, // Run Mongoose validation on the updateData
        });
        res.status(200).send("product has been updated...");
    } catch (error) {
        next(error);
    }
};
