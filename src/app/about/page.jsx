import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <div className="relative">
      <Image src="/about.png" alt="" fill/></div>
    </div>
  );
}

export default AboutPage