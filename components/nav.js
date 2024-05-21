export default function Nav() {
  return (
    <ul className="flex flex-row">
      <li className="p-3 flex justify-center">
        <a className="align-middle self-center transition-all nav-items py-1 px-3" href="#about">
          About
        </a>
      </li>
      <li className="p-3 flex justify-center">
        <a className="align-middle self-center transition-all nav-items py-1 px-3" href="#experience">
          Experience
        </a>
      </li>
      <li className="p-3 flex justify-center">
        <a className="align-middle self-center transition-all nav-items py-1 px-3" href="#work">
          Work
        </a>
      </li>
      <li className="p-3 flex justify-center">
        <a className="align-middle self-center transition-all nav-items py-1 px-3" href="#contact">
          Contact
        </a>
      </li>
      <li className="p-3 flex justify-center">
        <a
          className="align-middle self-center py-1 px-3 w-full h-fit text-sky-500 border border-solid border-sky-500 transition relative rounded-lg bg-black raise " id="resume"
          href="/resume.pdf" target="norelopener_"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
