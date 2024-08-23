import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
        <h1 className="text-4xl text-white"> Hi! My name is Nicolas!</h1>
        <p className="text-center mt-2 text-white"> I'm a Software Developer </p>
      </div>
    </main>
  );
}
