import { dummy1, dummy2, dummy3 } from "@/pages/Feature/dummy";
import ReviewCard from "@/pages/Feature/ReviewCard";
import { useEffect, useState } from "react";

export default function Feature() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<div className="mx-auto max-w-[1280px] px-4 sm:px-6 h-[784px] items-start overflow-hidden lg:px-8 bg-[#fafafa] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
			{/* 컨테이너 **/}
			{/* 카드 **/}
			<div
				className={`space-y-8 py-4 transition-all translate-x-0 transform ease-in duration-600 ${
					isLoaded ? "animate-marquee opacity-100" : "opacity-0"
				}`}
			>
				{dummy1.map(item => (
					<ReviewCard key={item.id}>
						<div className="text-gray-900">
							<ReviewCard.Star />
							<ReviewCard.Title>{item.heading}</ReviewCard.Title>
							<ReviewCard.Body>{item.description}</ReviewCard.Body>
						</div>
						<ReviewCard.Nickname>-닉네임</ReviewCard.Nickname>
					</ReviewCard>
				))}
			</div>
			<div className="space-y-8 py-4 animate-marquee-reverse">
				{dummy2.map(item => (
					<ReviewCard key={item.id}>
						<div className="text-gray-900">
							<ReviewCard.Star />
							<ReviewCard.Title>{item.heading}</ReviewCard.Title>
							<ReviewCard.Body>{item.description}</ReviewCard.Body>
						</div>
						<ReviewCard.Nickname>-닉네임</ReviewCard.Nickname>
					</ReviewCard>
				))}
			</div>
			<div className="space-y-8 py-4 animate-marquee-fast">
				{dummy3.map(item => (
					<ReviewCard key={item.id}>
						<div className="text-gray-900">
							<ReviewCard.Star />
							<ReviewCard.Title>{item.heading}</ReviewCard.Title>
							<ReviewCard.Body>{item.description}</ReviewCard.Body>
						</div>
						<ReviewCard.Nickname>-닉네임</ReviewCard.Nickname>
					</ReviewCard>
				))}
			</div>
		</div>
	);
}

//
// 실습 및 예제 => 도저히 주어진 시간 안에 못하겠습니다.. 블로그에서 찾아서 하기 vs 혼자서 머리 싸매면서 하기
// q1. 컴파운드 컴포넌트로 리팩터링 한거 이게 맞는지
// q2. ReviewCard도 컴파운드 컴포넌트 이게 맞는지
// q3.  요소가 이어지는게 아니라 끊겨서 보입니다 하
