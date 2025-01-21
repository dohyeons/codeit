import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="mt-16 grow flex">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
