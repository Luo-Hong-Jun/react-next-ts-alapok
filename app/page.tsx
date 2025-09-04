import Image from "next/image"; 

export default function Home() {
  return  (
    <div className="items-center flex min-h-screen justify-center">
      <Image src="globe.svg" alt="Image" width={100} height={100}></Image>
      <h1 className="text-3xl font-bold mt-4">Hello 13.A</h1>
    </div>

  );

}
