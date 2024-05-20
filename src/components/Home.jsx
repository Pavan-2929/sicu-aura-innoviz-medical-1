import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          At our medical center, we are dedicated to providing you with the
          highest quality care. Our team of experienced healthcare professionals
          is here to support your health journey with personalized treatment
          plans and advanced medical services. From preventative care to
          specialized treatments, we are committed to helping you achieve
          optimal health and well-being.
        </p>

      </div>
    </div>
  );
};

export default Home;
