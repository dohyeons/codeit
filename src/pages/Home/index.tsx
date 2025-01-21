import MainContent from "@/pages/Home/components/MainContent";
import style from "./button.module.css";

export default function Page() {
	return (
		<div className="mx-auto py-6 px-3 md:px-9 max-w-[674px] border-x border-slate-200 w-full">
			<MainContent />
			<button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg py-2 px-4 text-white">
				Save Changes
			</button>
			<button className={style.custom_button}>Save Changes</button>
		</div>
	);
}
