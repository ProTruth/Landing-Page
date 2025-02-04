import { Home, HomeV2, Team, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
	// Old Home Page
	// {
	// 	name: "home",
	// 	path: "/",
	// 	element: <Home />,
	// },
	{
		name: "home",
		path: "/",
		element: <HomeV2 />,
	},
	{ //team
		name: "about",
		path: "/about",
		element: <Team />,
	},
	// {
	//   name: "profile",
	//   path: "/profile",
	//   element: <Profile />,
	// },
	// {
	//   name: "Sign In",
	//   path: "/sign-in",
	//   element: <SignIn />,
	// },
	// {
	//   name: "Sign Up",
	//   path: "/sign-up",
	//   element: <SignUp />,
	// },
	// {
	// 	name: "Docs",
	// 	href: "https://www.material-tailwind.com/docs/react/installation",
	// 	target: "_blank",
	// 	element: "",
	// },
];

export default routes;
