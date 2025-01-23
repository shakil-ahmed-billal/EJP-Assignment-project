import Link from "next/link"
import { Button } from "../ui/button"

const Banner = () => {
    return (
        <div>
            <div className="my-20">
                <h1 className="text-4xl md:text-6xl w-8/12 mx-auto font-bold text-center ">Craft <span className="bg-[#E4E4FA]">Unique</span> Magazines & Blogs with Revision</h1>
                <div className="flex justify-center items-center my-5">
                   <Link href={'/blog'}> <Button>See All Blog</Button></Link>
                </div>
            </div>

        </div>
    )
}

export default Banner