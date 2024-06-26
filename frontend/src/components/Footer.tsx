const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between max-sm:px-2 items-center">
        <span className="text-xl md:text-3xl text-white font-bold tracking-tight">
          GreenHolidays.com
        </span>
        <span className="flex gap-4 text-white font-bold tracking-tight">
          <p className=" cursor-pointer">Privacy Policy</p>
          <p className=" cursor-pointer">Terms of Service </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
