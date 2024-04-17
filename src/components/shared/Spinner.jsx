import FadeLoader from "react-spinners/FadeLoader";
const Spinner = () => {
  return (
    <div className="flex min-h-[calc(100dvh-389px)] justify-center items-center">
      <FadeLoader className="text-gray-900/50" height={20} />
    </div>
  );
};

export default Spinner;
