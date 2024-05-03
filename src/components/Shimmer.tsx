function Shimmer() {
  return (
    <div role="status" className="bg-white animate-pulse">
      <div className="w-screen max-w-screen-md p-4 pb-4 border-b cursor-pointer border-slate-200">
        <div className="flex">
          <div className="w-4 h-4 mb-4 bg-gray-200 rounded-full"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

          <div className="flex flex-col justify-center pl-2">
            <div className="w-1 h-1 rounded-full bg-slate-500"></div>
          </div>

          <div className="flex flex-col justify-center pl-2 text-sm font-thin text-slate-500">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>

        <div className="pt-2 text-xl font-semibold">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div className="font-thin text-md">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>

        <div className="pt-4 text-sm font-thin text-slate-500">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
