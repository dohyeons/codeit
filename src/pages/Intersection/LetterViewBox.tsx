import { useInView } from "react-intersection-observer";

export default function LetterViewBox({ title }: { title: string }) {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	return (
		<section
			ref={ref}
			className="border border-black flex items-center justify-center h-screen"
		>
			<h2
				className={`text-[4vw] opacity-0 ${
					inView ? "animate-scroll-fadeIn opacity-100" : ""
				}`}
			>
				{title}
			</h2>
		</section>
	);
}
