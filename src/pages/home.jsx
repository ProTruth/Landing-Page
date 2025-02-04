import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Typography,
	Button,
	IconButton,
	Input,
	Textarea,
	Checkbox,
} from "@material-tailwind/react";
import { BoltIcon, FingerPrintIcon, TruckIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import MailerLiteForm from '@/widgets/mailerlite-form';
import CS_V1FeaturesSection from '@/components/cs-features-section';

export function Home() {
	return (
		<>
			<div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
				<video autoPlay muted defaultmuted="true" playsInline loop id="headerVideo" className="absolute top-0 h-full w-full object-cover">
					<source src="/video/DemoReelCompressed.mp4" type="video/mp4" />
				</video>
				{/* <iframe src="https://player.vimeo.com/video/1008475288?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="DemoReel">
				</iframe>
				<script src="https://player.vimeo.com/api/player.js"></script> */}
				<div className="absolute top-0 h-screen w-full bg-cover bg-center" />
				<div className="absolute top-0 h-screen w-full bg-black/80 bg-cover bg-center" />
				<div className="max-w-8xl container relative mx-auto">
					<div className="flex flex-wrap items-center">
						<div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
							{/* center image */}
							<div className="text-center">
								<img
									alt="Light Logo"
									src="/img/LightLogo.png"
									className="h-auto w-32 mx-auto"
								/>
							</div>
							<Typography
								variant="h1"
								color="white"
								className="mb-6 font-black"
							>
								Circuit Says <br /> Spark your Career in Electronics
							</Typography>
							<Typography variant="lead" color="white" className="opacity-80">
								our kits help to equip and excite entry level college students for jobs in the electrical trades
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<section className="-mt-32 bg-white px-4 pb-20 pt-4">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{featuresData.map(({ color, title, icon, description }) => (
							<FeatureCard
								key={title}
								color={color}
								title={title}
								icon={React.createElement(icon, {
									className: "w-5 h-5 text-white",
								})}
								description={description}
							/>
						))}
					</div>
					<CS_V1FeaturesSection />
				</div>
			</section>
			<section className="px-4 pb-24">
				<div className="container mx-auto">
					<PageTitle section="" heading="Meet The Team">
						<div></div>
					</PageTitle>
					<div className="mt-10 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
						{teamData.map(({ img, name, position, socials }) => (
							<TeamCard
								key={name}
								img={img}
								name={name}
								position={position}
								socials={
									// <div className="flex items-center gap-2">
									// 	{socials.map(({ color, name }) => (
									// 		<IconButton key={name} color={color} variant="text">
									// 			<i className={`fa-brands text-xl fa-${name}`} />
									// 		</IconButton>
									// 	))}
									// </div>
									<div></div>
								}
							/>
						))}
					</div>
				</div>
			</section>
			<div id="sign_up"></div>
			<div className="bg-white">
				<Footer />
			</div>
		</>
	);
}

export default Home;
