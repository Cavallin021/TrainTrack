import Image from "next/image";
import appIcon from "../../../public/appIcon.svg";

export default function Login() {
  return (
    <main className="flex flex-col h-screen px-4 justify-center items-center bg-zinc-950">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
        <Image src={appIcon} alt="TrainTrack" className="w-32 drop-shadow-md" />

        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            className="w-full text-black placeholder-gray-500 px-4 py-3 bg-white rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full text-black placeholder-gray-500 px-4 py-3 bg-white rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50"
            placeholder="Senha"
          />
        </div>

        <button className="w-full font-bold bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:scale-[1.02] active:scale-95">
          ENTRAR
        </button>
      </div>
    </main>
  );
}
