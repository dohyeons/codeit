import Layout from "@/Layout";
import Feature from "@/pages/Feature/Feature";
import Hero from "@/pages/Hero/Hero";
import Home from "@/pages/Home";
import Test3 from "@/pages/Test3/Test3";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/test3" element={<Test3 />} />
					<Route path="/feature" element={<Feature />} />
					<Route path="/hero" element={<Hero />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
