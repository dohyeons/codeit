export default function ReviewCard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-3xl bg-white p-6 shadow-md shadow-gray-900/5">
			{children}
		</div>
	);
}

function Star() {
	return <div>{/* 별점 **/}⭐️⭐️⭐️⭐️⭐️</div>;
}

function Title({ children }: { children: React.ReactNode }) {
	return (
		<p className="mt-4 text-lg font-semibold leading-6">
			{/* 제목 **/}
			{children}
		</p>
	);
}
function Body({ children }: { children: React.ReactNode }) {
	return <p className="mt-3 leading-7">{children}</p>;
}

function Nickname({ children }: { children: React.ReactNode }) {
	return <div className="mt-3 text-sm text-gray-600">{children}</div>;
}

ReviewCard.Star = Star;
ReviewCard.Title = Title;
ReviewCard.Body = Body;
ReviewCard.Nickname = Nickname;
