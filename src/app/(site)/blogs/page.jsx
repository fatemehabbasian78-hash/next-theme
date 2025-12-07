import Link from "next/link";

export default function Blog() {
    return <>
        <div className="flex justify-center gap-3.5 mt-5 w-11/12 mx-auto">
            <div className="border rounded-md p-4 bg-pink-300 shadow-emerald-400 shadow-md hover:bg-green-200">
                <h2>first blog</h2>
                <hr />
                <p className="mt-3 line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quibusdam reiciendis blanditiis error explicabo quis veniam magni iure rerum sequi voluptatibus pariatur ex accusamus nesciunt accusantium eius praesentium asperiores recusandae.</p>
                <Link href="/blogs/2">more ...</Link>
            </div>
            <div className="border rounded-md p-4 bg-pink-300 shadow-emerald-400 shadow-md hover:bg-green-200">
                <h2>second blog</h2>
                <hr />
                <p className="mt-3 line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quibusdam reiciendis blanditiis error explicabo quis veniam magni iure rerum sequi voluptatibus pariatur ex accusamus nesciunt accusantium eius praesentium asperiores recusandae.</p>
                <Link href="/blogs/1" className="bg-transparent mt-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">more ...</Link>
            </div>

        </div>
    </>
}