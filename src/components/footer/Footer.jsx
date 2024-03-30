import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between py-8">
        <div className="w-40 h-40 relative">
          <Image src="/ava.png" alt="Petito" fill />
        </div>
        <div className="">
          <h5>Follow Us</h5>
          <ul>
            <li>Facebook</li>
            <li>Instargram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
