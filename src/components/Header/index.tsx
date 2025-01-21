import { Bell, Search } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
	return (
		<header className="h-16 fixed right-0 top-0 left-0 w-full z-50 bg-white border-b border-slate-200">
			<div className="h-full justify-between flex items-center max-w-[1200px] mx-auto px-4 md:px-16 xl:px-0">
				<div className="flex">
					<div className="lg:text-2xl text-xl font-bold mr-14">NEWNEEK</div>
					<ul className="md:flex gap-6 items-center hidden ">
						<li>
							<Link to={"/"}>홈</Link>
						</li>
						<li>
							<Link to={"/test3"}>test3</Link>
						</li>
						<li>
							<Link to={"/feature"}>feature</Link>
						</li>
						<li>
							<Link to={"/hero"}>hero</Link>
						</li>
						<li>
							<Link to={"/intersection"}>intersection</Link>
						</li>
					</ul>
				</div>
				<div className="flex md:divide-x divide-gray-300">
					<div className="md:flex items-center hidden pr-8 whitespace-nowrap">
						광고제휴
					</div>
					<div className="flex items-center gap-6 pl-8">
						<button>
							<Search />
						</button>
						<button>
							<Bell />
						</button>
						<button className="whitespace-nowrap flex h-[30px] lg:text-base text-sm lg:h-9 items-center justify-center rounded-full border border-gray-300 px-[10px] py-[6px] font-bold text-orange-500  md:px-3 md:py-2">
							로그인
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
