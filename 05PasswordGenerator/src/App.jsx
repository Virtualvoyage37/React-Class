import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const CopyInput = useRef();

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const chr = "!@#$%^&*-_+=[]{}~`";
    const num = "0123456789";
    if (numberAllow) str += num;
    if (charAllow) str += chr;
    for (let i = 1; i <= length; i++) {
      const newpass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(newpass + 1);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllow, charAllow]);

  const CopyPassword = () => {
    window.navigator.clipboard.writeText(Password);

    CopyInput.current.focus();
    CopyInput.current.select();
    // CopyInput.current.style.backgroundColor ="red";

  };

  return (
    <div className="flex justify-center items-center h-screen   ">
      <div className="flex w-full justify-center items-center bg-gray-600 text-white max-w-[850px] m-auto rounded-xl max-h-[500px] h-full p-5 flex-col gap-5 ">
        <h1 className="text-3xl font-bold ">Password Generator</h1>
        <div>
          <input ref={CopyInput} type="text" className={`input `} value={Password} readOnly />
          <button className="btn h-[40px]" onClick={() => CopyPassword()}>
            Copy
          </button>
        </div>

        <div className="flex-center gap-4">
          <input
            type="range"
            min={0}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="">Length: {length}</label>
        </div>
        <div className="flex-center gap-4">
          <input
            type="checkbox"
            value={numberAllow}
            checked={numberAllow}
            onClick={(e) => setNumberAllow(e.target.checked)}
          />
          <label className="">Number</label>
        </div>
        <div className="flex-center items-start gap-4">
          <input
            type="checkbox"
            value={charAllow}
            checked={charAllow}
            onClick={(e) => setCharAllow(e.target.checked)}
          />
          <label className="">Char</label>
        </div>
      </div>
    </div>
  );
}

export default App;
