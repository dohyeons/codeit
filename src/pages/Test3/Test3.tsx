export default function Test3() {
	return (
		<>
			{/** div로 감싸면 span이 스타일링 적용이 안되는데 이유가.. */}
			{/*그라디언트 아이콘 (drop shadow는 제외) 만들기  */}
			{/* <span className="size-6 w-[24px] rounded-[50%] bg-blue-gradient" /> */}
			<span className="w-[24px] h-[24px] bg-gradient-to-tr from-[#096cde] via-[#096cde] via-30% to-[#ddf1ff] rounded-[50%] bg-clip-border bg-scroll bg-origin-padding" />
		</>
	);
}
