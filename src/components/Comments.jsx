import { useEffect, useState } from "react";
import { getReviews } from "../helpers/getReviews";
import { Review } from "./Review";

export const Comments = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        (async () => {
            const reviews = await getReviews("user@gmail.com");
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