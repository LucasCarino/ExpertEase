import React from "react";
import StarsRating from "./StarsRating";
import { postReview } from "../helpers/postReview";

export const ReviewForm = ({ serviceId }) => {
  const onSubmitReviewForm = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const comment = e.currentTarget.elements.comment.value;
    const rating = e.currentTarget.elements.rating.value;
    (async () => {
      const response = await postReview(name, comment, rating, serviceId);
      if (response) {
        alert('Comentario enviado! Para poder ver tu mensaje el creador del servicio debe aprobarlo primero.')
      }
    e.target.reset()
    })();
  };
  return (
    <form
      className="w-full"
      action="#"
      id="secondForm"
      method="post"
      onSubmit={onSubmitReviewForm}
    >
      <div className="mb-2">
        <div className="px-0">
          <div className="flex justify-between">
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2  mt-1 w-1/2"
              placeholder="Nombre"
            ></input>
            <StarsRating editable={true} starSize={"md"} />
          </div>
          <textarea
            id="comment"
            name="comment"
            placeholder="Este experto me parece..."
            className="w-full mb-2 bg-gray-100 text-sm rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-base focus:outline-none focus:bg-white"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="px-6 py-2 rounded  text-white text-sm bg-charcoal-500 hover:bg-charcoal-700 duration-200 ease-in-out"
            // onClick={onCommentConfirm}
          >
            Comentar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
