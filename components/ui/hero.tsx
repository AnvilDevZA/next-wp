import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-fixed bg-[url(/blacksmith.jpg)] bg-cover bg-top">
      <div className="hero-overlay backdrop-blur-xs backdrop-sepia"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
	  <Image src="./logo.svg" className="h-auto w-64 m-auto pb-6" width={200} height={200} alt="Anvil Development Logo" />
          <h1 className="mb-2 text-xl font-black uppercase">
            Anvil Development
          </h1>
          <p className="mb-6 text-base">Quality Application Development</p>
          <div className="flex gap-4 items-center justify-center">
            <button className="btn btn-outline uppercase">Hire Us</button>
            <button className="btn btn-outline uppercase">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
