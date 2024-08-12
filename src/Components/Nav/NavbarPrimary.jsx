import logoPic from "../../assets/logo/joyPicSM.png"

const NavbarPrimary = () => {
    return (
        <div className="text-lg font-mono font-semibold flex justify-between items-center bg-slate-100 py-4 px-10 shadow-lg  drop-shadow-2xl">
            <div className="flex items-center gap-3">
                <img className=" w-14 h-14 rounded-full border-4 border-purple-200" src={logoPic} alt="" />
                <p>ZARJIJ HASAN JOY</p>
            </div>
            <div>
                <ul className="flex items-center gap-8">
                    <li>HOME</li>
                    <li> ABOUT</li>
                    <li> CONTACT</li>
                    <li> PROJECTS</li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarPrimary;