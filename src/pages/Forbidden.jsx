import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">403</h1>
      <p className="text-lg text-gray-700 mt-2">
        You do not have permission to access this page.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Go Back
      </button>
    </div>
  );
};

export default Forbidden;
