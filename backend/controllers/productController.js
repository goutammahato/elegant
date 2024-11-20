import { StatusCodes } from "http-status-codes";
import Product from "../models/ProductModel.js";
import { v2 as cloudinary } from "cloudinary";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      color,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      color: JSON.parse(color.replace(/'/g, '"')),
      bestseller: bestseller === "true" ? true : false,
      images: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const productCreated = await Product.create(productData);
    res.status(StatusCodes.CREATED).json({ productCreated });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const removeProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product removed successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Error removing product", error });
  }
};

export const singleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        // Find the existing product
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Initialize the images array with the existing images
        let updatedImagesUrl = [...existingProduct.images];

        // Map through each image slot and replace if a new one is provided
        const imageKeys = ['image1', 'image2', 'image3', 'image4'];
        for (let i = 0; i < imageKeys.length; i++) {
            if (req.files[imageKeys[i]]) {
                const newImage = req.files[imageKeys[i]][0];
                const result = await cloudinary.uploader.upload(newImage.path, {
                    resource_type: "image",
                });
                // Replace the image at the correct index
                updatedImagesUrl[i] = result.secure_url;
            }
        }

        // Parse color and bestseller fields from the request body
        const color = updates.color ? JSON.parse(updates.color.replace(/'/g, '"')) : existingProduct.color;
        const bestseller = updates.bestseller ? updates.bestseller === "true" : existingProduct.bestseller;

        // Prepare the updated product data
        const productData = {
            name: updates.name || existingProduct.name,
            description: updates.description || existingProduct.description,
            price: updates.price ? Number(updates.price) : existingProduct.price,
            category: updates.category || existingProduct.category,
            subCategory: updates.subCategory || existingProduct.subCategory,
            color,
            bestseller,
            images: updatedImagesUrl, // Replaced images array
            date: Date.now(),
        };

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};
