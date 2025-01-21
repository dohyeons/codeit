import LetterViewBox from "@/pages/Intersection/LetterViewBox";

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

export default function Intersection() {
	return (
		<div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 overflow-wrap lg:px-8 bg-[#fafafa]">
			{PAGE_TITLES.map(title => (
				<LetterViewBox title={title} />
			))}
		</div>
	);
}
