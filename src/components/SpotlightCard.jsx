const SpotlightCard = ({ image, title, description, link }) => {
  return (
    <div className="flex flex-col h-full xl:max-w-lg lg:max-w-md md:max-w-lg max-w-sm bg-slate-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* image */}
      <div className="relative">
        <div className="absolute rounded-lg bg-slate-900 inset-0 opacity-25"></div>
        <img className="rounded-t-lg" src={image} alt={title} />
      </div>

      <div className="p-5 flex flex-col h-full">
        {/* title */}
        <div className="">
          <h5 className="w-max mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>

        {/* description */}
        <div className="flex-1">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* button */}
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            See more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
