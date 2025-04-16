import chefIcon from "../assets/Vector.svg"

function Header(){
  return(
    <header className="p-6 flex justify-center items-center gap-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">
      <img className="w-8 h-8" src={chefIcon} alt="Chef Claude Logo"/>
      <h1 className="text-[32px]">Chef Claude</h1>
    </header>
  )
}

export default Header