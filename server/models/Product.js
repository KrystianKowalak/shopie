const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        // This is the name of the product
        productName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        // This is the description of the product
        productDescription: {
            type: String,
            required: true,
            trim: true,
        },
        // This is the price of the product
        productPrice: {
            type: Number,
            required: true,
            trim: true,
        },
        // This is the category of the product
        productCategory: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        // This is a boolean to determine if the product is on sale or not
        onSale: {
            type: Boolean,
            default: false,
        },
        // This is multiplied by the productPrice to get the salePrice
        saleFactor: {
            type: Number,
            default: 1,
        },
        // This will be the filename of the uploaded image, the virtual below will return the path
        imageSrc: {
            type: String,
            required: true,
        },
        // This is the quantity of the product in stock
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    // These are the options for the schema
    // The toJSON option will allow us to include virtual properties when we use the .toJSON() method
    // The timestamps option will automatically create a createdAt and updatedAt field for us
    // The virtuals option will allow us to include virtual properties when we use the .toObject() method
    // The getters option will allow us to use getters to transform the data
    {
        toJSON: {},
        timestamps: false,
        virtuals: true,
        getters: true,
    }
);
// This virtual will return the sale price of the product if it is on sale or the regular price if it is not
productSchema.virtual("salePrice").get(function () {
    if (!this.onSale) {
        return this.productPrice;
    } else {
        return this.productPrice * this.saleFactor;
    }
});
// This virtual will return the path to the image of the product
productSchema.virtual("imagePath").get(function () {
    return `./src/assets/images/${this.productCategory.categoryName}/${this.imageSrc}`;
});
// This virtual will return a boolean to determine if the product is in stock or not
productSchema.virtual("inStock").get(function () {
    if (this.quantity > 0) {
        return true;
    } else {
        return false;
    }
});

const Product = model("Product", productSchema);

module.exports = Product;
