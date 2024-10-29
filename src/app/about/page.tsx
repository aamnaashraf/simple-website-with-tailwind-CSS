
export default function About() {
  return (
    <div className="bg-slate-500 min-h-screen flex flex-col items-center text-center p-6 text-white">
      <h1 className="text-6xl font-bold mt-10 ">About Us</h1>
      <p className="mt-4 text-lg max-w-2xl">
        Welcome to our travel destination website. We specialize in offering you unforgettable experiences at the most sought-after locations around the world. Whether you are looking for a serene beach escape, adventurous mountain expeditions, or vibrant city tours, we have got you covered.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-4xl">
        <div className="bg-teal-500 p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            We aim to make your travel experience memorable and hassle-free by
            providing top-rated destinations and personalized travel
            itineraries.
          </p>
        </div>

        <div className="bg-teal-500 p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            To be the most trusted platform for discovering, planning, and
            booking your perfect travel destinations.
          </p>
        </div>

        <div className="bg-teal-500 p-6 rounded-lg shadow-lg max-w-xs">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <p>
            With a dedicated team of travel experts, we bring you the best
            options and support for an incredible journey, every step of the
            way.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-lg">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2">
          Have any questions or need assistance? Reach out to our support team
          for prompt help and guidance.
        </p>
      </div>
    </div>
  );
}
