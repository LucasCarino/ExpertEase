import { useEffect, useState } from "react";
import { Review } from "./Review";
import { getReviewsByEmail } from "../helpers/getReviewsByEmail";

export const Comments = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        (async () => {
            const reviews = await getReviewsByEmail(localStorage.getItem('usuarioCorreo'));
            const unresponseReviews = reviews ? reviews.filter(review => review.published === "undefined") : [];
            if (unresponseReviews) setReviews(unresponseReviews);
        })();
    }, []);


    return (
        <tbody>
            {
                reviews.map((review) => <Review {...review}></Review>)
            }
        </tbody>
    );
};