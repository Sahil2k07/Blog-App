function Quote() {
  return (
    <div className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold text-gray-200">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-md mt-8 text-xl font-bold text-left text-[#ece5fb]">
            Julies Winfield
          </div>
          <div className="max-w-md text-sm font-semibold text-[#daccf8]">
            CEO | Acme corp
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
