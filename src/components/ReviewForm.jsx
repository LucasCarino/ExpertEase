import React, {useState} from "react";
import StarsRating from "./StarsRating";
import { postReview } from "../helpers/postReview";

import Toast from "./Toast";

export const ReviewForm = ({ serviceId }) => {
  const [toast, setToast] = useState(null);
  const onSubmitReviewForm = (e) => {
    e.preventDefault();
  
    (async () => {
      const name = e.currentTarget.elements.name.value;
      const comment = e.currentTarget.elements.comment.value;
      const rating = e.currentTarget.elements.rating.value;
      const response = await postReview(name, comment, rating, serviceId);

      if(!name || !comment || !rating) {
        setToast({
          message:
          "Debes completar todos los campos.",
          success: false,
        });
        return;
      }

      if (response) {
        setToast({
          message:
          "¡Comentario enviado! Para poder ver tu mensaje el creador del servicio debe aprobarlo primero.",
          success: true,
        });
      } else {
        setToast({
          message:
          "Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo.",
          success: false,
        });
      }
    })();
    e.target.reset()
  };

  const closeToast = () => {
    setToast(null);
  }




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
          {toast && <Toast message={toast.message} success={toast.success} onClose={closeToast} />}
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
