import Link from "next/link";
import Image from "next/image";

const NotFoundIllustration = "/assets/404-illustration.svg";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12 2xl:py-0">
      <div className="max-w-2xl text-center">
        <Image
          src={NotFoundIllustration}
          alt="Page not found"
          className="mx-auto w-96 mb-8"
          width={384}
          height={384}
        />

        <h1 className="text-6xl md:text-8xl font-bold text-[#225EA6] mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 text-lg md:text-xl">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#225EA6] hover:bg-[#1A4A84] text-white px-6 py-3 rounded-xl text-lg font-medium transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
