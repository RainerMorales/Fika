function Footer() {
  return (
    <footer className="w-full h-20  content-center bg-white mt-10 ">
      <div className="text-center text-green-950 text-sm">
        Copyright &copy; {new Date().getFullYear()} <span className="text-bold">Rainer Morales </span>
        All Right Reserved
      </div>
    </footer>
  );
}
export default Footer;
