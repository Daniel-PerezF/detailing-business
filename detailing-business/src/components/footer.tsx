export default function Footer() {
  return (
    <footer className="py-3 mt-16 flex flex-col font-light">
      <div className="flex justify-center gap-3 items-center font-extrabold text-3xl tracking-tighter pb-4">
        <div>LOGO</div>
      </div>
      <ul className="flex-col sm:flex-row flex w-full text-center sm:justify-around  underline underline-offset-2 px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="w-full flex justify-center">
        <div className="w-min">
          <a
            className="flex justify-center underline underline-offset-2 py-6"
            href="mailto:example@email.com"
          >
            example@email.com
          </a>
        </div>
      </div>

      <h2 className="flex justify-center pb-4">company all rights reserved.</h2>
    </footer>
  );
}
