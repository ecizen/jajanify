import { ArrowLeft01Icon, ArrowTurnBackwardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const NavbarDetail = () => {
    return (
        <header className="lg:px-6 px-4 py-4 bg-white">
            <nav className="w-full flex items-center justify-between">
                <div>
                    <a href="/" className="px-2 py-2 flex items-center  space-x-2 max-w-max rounded-full border-2 border-gray-100">
                        <HugeiconsIcon icon={ArrowTurnBackwardIcon} size={20}/>
                        <span className="text-sm font-medium">Back</span>
                    </a>
                </div>
                <div>
                    <h1 className="text-xl font-medium uppercase  lg:block md:block hidden">Jalan.ify</h1>
                </div>
                  <div>
                    <a href="/" className="px-2 py-2 flex items-center  space-x-2 max-w-max rounded-full border-2 border-gray-100">
                        <span className="text-sm font-medium">Become a Partner</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default NavbarDetail;