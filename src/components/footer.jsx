import { Link } from "react-router-dom";
// Date auto Copyright {new Date().getFullYear()}

export default function Footer() {
  return (
    <>
      <footer className="flex flex-wrap content-center justify-center p-3">
        <p className="mt-6 text-sm lg:mt-0">© Copyright {new Date().getFullYear()} <Link to='/'>REED~MEDIA</Link>  </p>
       
    </footer>
    </>
  );
}
