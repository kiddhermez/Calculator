import MenuIcon from "@/Components/Icons/MenuIcon"
import LightIcon from "@/Components/Icons/LightIcon"

const Navbar = () => {
  return (
    <header className="flex w-screen p-5 bg-white items-center z-20">
        <button className="absolute">
          <MenuIcon width={'2rem'}/>
        </button>
        <div className="flex-grow text-center">Calculator</div>
        <button>
          <LightIcon width={'2rem'}/>
        </button>
    </header>
  )
}

export default Navbar