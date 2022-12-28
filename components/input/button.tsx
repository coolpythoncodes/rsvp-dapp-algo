import Link from "next/link";

type ButtonProp = {
	href?: string;
	title: string;
	className?: string;
	handleClick?: () => void;
	[x: string]: any;
};

const Button = ({
	href,
	title,
	className,
	handleClick,
	...props
}: ButtonProp) => {
	return href ? (
		<Link href={href} className={`text-white bg-[rgb(245,210,24)] py-[10px] px-[30px] rounded-[10px] cursor-pointer font-semibold text-xl capitalize ${className}`}>{title}</Link>
	) : (
		<button
			onClick={handleClick}
			className={`text-white bg-[rgb(245,210,24)] py-[10px] px-[30px] rounded-[10px] cursor-pointer font-semibold text-xl capitalize disabled:cursor-not-allowed disabled:bg-slate-600 ${className}`}
			{...props}
		>
			{title}
		</button>
	);
};

export default Button;
