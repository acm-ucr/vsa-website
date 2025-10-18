import Link from "next/link";

const NotFound = () => {
  return (
    <div className="font-vsa-main text-vsa-green-400 flex w-full flex-col place-items-center gap-7 text-center text-xl">
      <h1 className="text-8xl font-bold">404 Error</h1>
      <h2 className="text-3xl">
        Oops! We couldn’t find the page
        <br />
        you’re looking for :(
      </h2>
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
