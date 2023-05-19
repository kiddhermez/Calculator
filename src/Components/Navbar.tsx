import MenuIcon from "@/Components/Icons/MenuIcon"

const Navbar = () => {
  return (
    <header className="flex w-screen p-5 bg-white">
        <button className="absolute">
          <MenuIcon width={'1rem'}/>
        </button>
        <div className="flex-grow text-center">Calculator</div>
    </header>
  )
}

export default Navbar