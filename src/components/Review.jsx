import StarsRating from './StarsRating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { updateReview } from '../helpers/updateReview';


export const Review = (props) => {
    const publishReview = () => {
        updateReview(props._id, "published");
    };

    const unpublishedReview = () => {
        updateReview(props._id, "unpublished");
    };

    return <tr className="border-b border-gray-200">
        <td className="pl-2.5">
            <StarsRating
                initialValue={props.rating}
                editable={false}
                starSize={"sm"}
                starMargin="mx-0.5"
            />
        </td>
        <td className="">
            <p className="text-xs px-2 py-3">
                {props.text}
            </p>
        </td>
        <td className="pl-2">
            <button
                className="mx-2 bg-green-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-green-600 duration-100"
                type="button"
            >
                <FontAwesomeIcon icon={faCheck} size="lg" onClick={publishReview}/>
            </button>
            <button
                className="mx-2 bg-red-500 w-5 h-5 lg:w-8 lg:h-8 rounded-md hover:bg-red-600 duration-100"
                type="button"
            >
                <FontAwesomeIcon icon={faXmark} size="lg" onClick={unpublishedReview}/>
            </button>
        </td>
    </tr>
};