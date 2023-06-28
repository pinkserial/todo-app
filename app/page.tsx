import Image from "next/image";

export default function Home() {
  return (
    <div className="w-1/2 mx-auto">
      <header className="flex justify-between items-center h-32">
        <h1 className="text-3xl tracking-[0.5rem] font-bold text-white">
          TODO
        </h1>
        <button type="button" className="">
          <Image
            src="/images/icon-moon.svg"
            alt="moon icon"
            width={26}
            height={26}
          />
        </button>
      </header>
      <main className="">
        <form className="px-5 flex items-center bg-white gap-5 rounded-md">
          <button type="button" className="w-8 h-8 rounded-full border">
            <Image
              className="mx-auto"
              src="/images/icon-check.svg"
              alt="check icon"
              width={11}
              height={9}
            />
          </button>

          <input
            className="flex-auto h-16 outline-none caret-blue-500"
            name="todo"
            placeholder="Create a new todo"
          />
        </form>
        <div className="bg-white my-5 rounded-md divide-y">
          <ol className="px-5">
            <li className="h-16 flex justify-between items-center gap-5">
              <button className="w-6 h-6 rounded-full bg-gradient-to-br from-check-background-from to-check-background-to">
                <Image
                  className="mx-auto"
                  src="/images/icon-check.svg"
                  alt="check icon"
                  width={11}
                  height={9}
                />
              </button>
              <p className="flex-auto">Jog around the park 3x</p>
              <button>
                <Image
                  src="/images/icon-cross.svg"
                  alt="cross icon"
                  width={18}
                  height={18}
                />
              </button>
            </li>
          </ol>
          <div className="h-12 flex justify-between items-center px-5 text-sm">
            <p>5 items left</p>
            <div className="flex gap-3">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button>Clear Completed</button>
          </div>
        </div>
      </main>
    </div>
  );
}
