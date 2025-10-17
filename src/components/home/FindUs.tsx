"use client";

const FindUs = () => {
  return (
    <div className="bg-vsa-yellow-100 flex flex-col items-center justify-center p-20">
      <p className="text-vsa-brown font-vsa-main w-7/12 text-left text-5xl font-bold">
        Find Us!
      </p>
      <p className="text-vsa-brown font-vsa-alt w-7/12 pt-4 text-left text-2xl">
        Come meet us at tabling by the Bell Tower every Wednesday
      </p>
      <div className="mt-6 flex w-full items-center justify-center">
        <img
          src="/VSA_logo.svg"
          alt="First image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-1/5 border-2 object-contain"
        />
        <img
          src="/VSA_logo.svg"
          alt="Second image of VSA Logo"
          className="border-vsa-green-400 aspect-square w-1/5 border-2 object-contain"
        />
      </div>
    </div>
  );
};

export default FindUs;
