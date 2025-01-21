import background from "@/assets/background.png";

export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex gap-8 items-center py-6 flex-col lg:flex-row">
			{children}
		</div>
	);
}

function CardImage() {
	return (
		<img
			src={background}
			alt="기사이미지"
			className="rounded-3xl lg:size-[140px]"
		/>
	);
}

function Header({ children }: { children: React.ReactNode }) {
	return <h2 className="text-xl font-bold">{children}</h2>;
}

function Body({ children }: { children: React.ReactNode }) {
	return <p>{children}</p>;
}

Card.CardImage = CardImage;
Card.Header = Header;
Card.Body = Body;
