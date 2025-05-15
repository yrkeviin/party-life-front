import "./globals.css";

export const metadata = {
	title: "PARTY LIFE",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<link rel="icon" href="/icons/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}