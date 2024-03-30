import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-12 items-center justify-center h-vh-minus-nav bg-home on-primary-text">
        <h1 className="text-8xl font-bold">Petito shop</h1>
        <p className="text-2xl">Nơi chủ shop test cái web và nghĩ tác phẩm tốt nghiệp.</p>
        <div className="flex gap-5">
          <button className="button tertiary on-tertiary-text">Tìm hiểu thêm</button>
          <button className="button primary on-primary-text">Liên hệ</button>
        </div>
      </div>
      {/* <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" fill />
      </div> */}
    </div>
  );
};

export default Home;
