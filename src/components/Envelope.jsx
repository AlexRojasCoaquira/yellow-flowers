export function Envelope({ open = false }) {
  return (
    <>
      <div className="relative bg-[#e5e1ce] w-full h-50">
        <div className="absolute z-10 w-0 h-0 left-0 bottom-0 border-t-[100px] border-l-[200px] border-b-[100px] border-t-transparent border-b-transparent border-l-[#FAB8DC] "></div>
        <div className="absolute z-10 w-0 h-0 right-0 bottom-0 border-t-[100px] border-r-[200px] border-b-[100px]  border-t-transparent border-b-transparent border-r-[#FAB8DC]"></div>
        <div
          className="absolute z-10 bottom-0 w-0 h-0
            border-l-[190px] border-r-[190px] border-b-[100px]
            border-l-transparent border-r-transparent border-b-[#FEEEAE]"
        ></div>
        <div
          className={`absolute top-0 w-0 h-0 z-1
            border-l-[190px] border-r-[190px] border-t-[100px]
            border-l-transparent border-r-transparent border-t-[#F05EA8]
            transform transition-transform duration-700 origin-top
          ${open ? ' rotate-x-180 ' : 'rotate-x-0'}`}
        ></div>
        <div className="absolute flex items-center justify-center z-15 w-50 h-15 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-yellow-300">
          <span className="text-3xl rounded-full p-2 bg-white">🌻</span>
        </div>
      </div>
    </>
  )
}
