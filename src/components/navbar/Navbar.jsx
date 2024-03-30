import Links from "./links/Links";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-0 flex justify-between items-center text-white ">
        <div className="text-lg font-bold">Logo</div>

          <Links />

      </div>
    </nav>
  );
};

export default Navbar;
