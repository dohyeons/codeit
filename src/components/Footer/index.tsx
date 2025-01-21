export default function Footer() {
	return (
		<footer className=" bg-gray-100 py-9 w-full">
			<div className="px-4 flex flex-col gap-6 max-w-[1200px] mx-auto">
				<div className="text-xl font-bold mr-14">NEWNEEK</div>
				<div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
					<div className="flex flex-col">
						<span className="text-sm font-bold text-gray-500">(주)뉴닉</span>
						<span className="text-sm text-gray-500 break-keep">
							대표: 김소연 | 사업자 등록번호: 632-81-01159 | 통신판매업
							신고번호: 2020-서울마포-2938 <br /> 서울특별시 마포구 어울마당로
							35, 5층 (04048)
						</span>
					</div>
					<div className="flex gap-8 md:gap-12 flex-col md:flex-row">
						<div className="flex flex-col text-gray-500 text-sm gap-3">
							<span className="font-extrabold mb-2">뉴닉</span>
							<span>뉴닉 소개</span>
							<span>뉴스레터 구독</span>
							<span>광고 제휴</span>
							<span>채용</span>
						</div>
						<div className="flex flex-col text-gray-500 text-sm gap-3">
							<span className="font-extrabold mb-2">소식</span>
							<span>인스타그램</span>
							<span>X</span>
							<span>네이버 블로그</span>
						</div>
						<div className="flex flex-col text-gray-500 text-sm gap-3">
							<span className="font-extrabold mb-2">서비스</span>
							<span>서비스 이용약관</span>
							<span>개인정보처리방침</span>
							<span>고객센터</span>
							<span>앱 다운로드</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
