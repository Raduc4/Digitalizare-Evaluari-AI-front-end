import clsx from "clsx";
import { useUploadsState } from "context/UploadImageContext";

interface IProps {
  imgSrc: string;
  id: string;
}
export const Card = ({ imgSrc, id }: IProps) => {
  const context = useUploadsState();
  const cn: string = clsx(
    "max-w-sm relative mt-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
    "ml-5"
  );
  return (
    <div className={cn}>
      <img className="rounded-lg" src={imgSrc} alt="" />
      <div className="p-5 absolute bottom-0">
        <button
          onClick={() => {
            context.removeImgFromState(id);
          }}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
