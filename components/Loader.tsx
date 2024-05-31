import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center flex-col h-screen w-full gap-5">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
      <span className='flex text-3xl font-bold justify-center items-center text-center text-white flex-row gap-1'>
      <Image
        src="/icons/flux-logo.svg"
        alt="Loading..."
        width={40}
        height={40}
      />
      FLUX</span>
      <p className='flex text-xl justify-center items-center text-center text-white'>Enjoy the seamless flow of communication !</p>
    </div>
  );
};

export default Loader;