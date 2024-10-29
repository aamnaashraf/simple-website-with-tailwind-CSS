import Link from "next/link";


export function Footer(){
    return(
        <footer className="pt-20 mt-20 bg-slate-700">
<main className="flex flex-col md:flex-row gap-10 justify-around">
    <div>
        <div className="text:lg text-white">Next-Tour</div>
        <p className="text-slate-400 max-w-sm">Discover amazing places at exclusive deals. Eat, shop, visit interesting places around the world.</p>
    </div>
    <div>
        <div className="text:lg text-white">
            Contact  
        </div>
        <p className="text-slate-400">Mobile No:03342570180</p>
        <Link className=" text-slate-400 underline" href="emailto:next-tour@gmail.com">
        Email: netx-tour@gmail.com
        </Link>
    </div>
</main>
<p className="text-center text-sm text-slate-500 pt-20 pb-4"> Copyright@2024.All rights reserved.</p>
        </footer>
    );
}