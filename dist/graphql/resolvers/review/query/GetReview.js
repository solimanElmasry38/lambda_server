"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_review = void 0;
const prisma_1 = require("../../../../conf/prisma");
const get_review = async ({ input }, _contx) => {
    const { Product_id } = input;
    try {
        const reviews = await prisma_1.prisma.productReview.findMany({
            where: {
                product_id: Product_id,
            },
        });
        if (reviews.length === 0) {
            throw new Error("No reviews found for the specified product");
        }
        let totalScore = 0;
        let validReviewCount = 0;
        reviews.forEach((el) => {
            if (el.review > 5 || el.review < 0) {
                throw new Error("Review must be in the range 0 to 5");
            }
            else {
                totalScore += el.review;
                validReviewCount++;
            }
        });
        if (validReviewCount === 0) {
            throw new Error("No valid reviews found");
        }
        const averageScore = Math.ceil(totalScore / validReviewCount);
        console.log(averageScore);
        return { review: averageScore }; // Return the average score as an array
    }
    catch (error) {
        console.error("Error fetching reviews:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
exports.get_review = get_review;
