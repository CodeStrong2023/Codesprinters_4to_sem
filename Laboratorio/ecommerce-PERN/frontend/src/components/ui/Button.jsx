/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary relative inline-flex items-center gap-1.5 rounded-md px-6 py-3 mx-4 my-6 text-sm font-semibold
    text-white shadow-md bg-blue-500 hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
