import Image from 'next/image';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

const Home = () => {
  return (
    <div>
      <img src="../public/mujer_recruiter.png" alt="placeholder-mujer" />
      <div></div>
    </div>
  );
};

export default Home;
