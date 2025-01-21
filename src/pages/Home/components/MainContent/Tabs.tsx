import { createContext, useContext, useState } from "react";

interface TabsContextType {
	activeIndex: number;
	setActiveIndex: (index: number) => void;
}
const TabsContext = createContext<TabsContextType | undefined>(undefined);

export default function Tabs({ children }: { children: React.ReactNode }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
			<ul>{children}</ul>
		</TabsContext.Provider>
	);
}

const Item = ({
	value,
	children,
}: {
	value: number;
	children: React.ReactNode;
}) => {
	const ctx = useContext(TabsContext);
	if (ctx === undefined) {
		throw new Error(
			"<Tabs.Item> 컴포넌트는 <Tabs> 컴포넌트 아래에서만 사용될 수 있습니다."
		);
	}
	const { activeIndex, setActiveIndex } = ctx;

	return (
		<li
			onClick={() => setActiveIndex(value)}
			className={`tab-item ${activeIndex === value ? "selected" : ""}`}
		>
			{children} {activeIndex === value ? "selected" : ""}
		</li>
	);
};

Tabs.Item = Item;
