import { Bookmark01Icon, Location01Icon, Share01Icon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface headerInfoProps {
    title: string
    rating: number
    countRivew: number
    location: string
}

const HeaderInformation: React.FC<headerInfoProps> =({title, rating, countRivew, location}) => {
    return (
        <article className="w-full py-2 px-4">
            <div className="flex items-center justify-between">
                <h1 className="lg:text-4xl md:text-3xl text-xl font-medium">{title}</h1>
                <div className="flex items-center gap-2 pl-6">
                    <button className="p-2 rounded-full cursor-pointer border border-neutral-200">
                      <HugeiconsIcon icon={Bookmark01Icon} className="w-4 h-4 text-blue-700"/>
                    </button>
                    <button className="p-2 rounded-full cursor-pointer border border-neutral-200">
                      <HugeiconsIcon icon={Share01Icon} className="w-4 h-4 text-blue-700"/>
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <div className="lg:flex grid grid-cols-1 items-center space-x-1.5 gap-y-2">
                    <div className="flex items-center space-x-1  ">
                    <HugeiconsIcon      
                    icon={StarIcon}
                    className="text-blue-500 w-4 h-4"
                    style={{ fill: "currentColor" }}
                    />
                    <span className="text-xs font-semibold">{rating}</span>
                    <span className="text-xs text-gray-400 mr-2">({countRivew} Reviews)</span>
                    </div>
                    <div className="flex lg:items-center items-start space-x-1">
                        <HugeiconsIcon icon={Location01Icon} 
                        className="w-4 h-4 text-gray-600"
                        />
                        <span className="text-xs text-gray-400">{location}</span>

                    </div>
                </div>
            </div>
        </article>
    )
}
export default HeaderInformation;