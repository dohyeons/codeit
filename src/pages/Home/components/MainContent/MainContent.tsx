import Card from "@/pages/Home/components/MainContent/Card";
import { useState, useEffect } from "react";
export interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}
export default function MainContent() {
	const [data, setData] = useState<Post[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/posts"
				);
				const posts = await response.json();
				setData(posts);
			} catch (error) {
				console.log("error: ", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex flex-col gap-4 mt-8  divide-y divide-slate-300">
			{data.map(post => (
				<Card key={post.id}>
					<Card.CardImage />
					<div className="flex flex-col gap-4 w-full lg:max-w-[420px]">
						<Card.Header>{post.title}</Card.Header>
						<Card.Body>{post.body}</Card.Body>
					</div>
				</Card>
			))}
		</div>
	);
}
