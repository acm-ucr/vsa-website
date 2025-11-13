import Link from "next/link";

const NotFound = () => {
  return (
    <div className="font-vsa-main text-vsa-green-400 flex h-[80vh] w-full flex-col items-center justify-center gap-7 text-center text-lg md:text-2xl">
      <p className="text-6xl font-bold md:text-9xl">404 Error</p>
      <p className="text-2xl md:text-4xl">
        Oops! We couldn’t find the page
        <br />
        {"you’re looking for :("}
      </p>
      <p>
        You might find what you’re looking for in{" "}
        <Link href="/faq" className="text-vsa-pink-300 font-semibold underline">
          FAQ
        </Link>
      </p>
      <p className="font-bold italic">OR</p>
      <p>
        Return to{" "}
        <Link href="/" className="text-vsa-pink-300 font-semibold underline">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
