const Modal = ({ message, statusMessage }) => {
  return (
    <>
      {/* Darkened Background */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 sm:w-3/4 md:w-1/2 xl:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Message Sent!</h2>
          <p className="text-gray-700 mb-6 text-center">{statusMessage}</p>
          <button
            onClick={message}
            className="block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 rounded mx-auto"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
