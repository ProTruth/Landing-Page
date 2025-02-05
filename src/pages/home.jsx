import React from "react";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LuLibrary, LuSpeech } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import { GiExplosionRays } from "react-icons/gi";
import { TbChartFunnel } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { ImLibrary } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { FaPersonFalling } from "react-icons/fa6";


import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import MailerLiteForm from '@/sections/mailerlite-form';

const navigation = [
	{ name: 'The Problem', href: '#Problem' },
	{ name: 'Our Solution', href: '#Solution' },
	{ name: 'Join', href: '#Join' },
]
export function HeroSection({ Heading, Subheading, ActionButtons, BannerText, BannerActionButton }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
					<div className="flex lg:flex-1">
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						{/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
							Log in <span aria-hidden="true">&rarr;</span>
						</a> */}
					</div>
				</nav>
				<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									alt=""
									src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<div className="py-6">
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>

			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							{BannerText}{' '}
							{BannerActionButton}
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
							{Heading}
						</h1>
						<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							{Subheading}
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							{ActionButtons}
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					/>
				</div>
			</div>
		</div>
	)
}

const problemPoints = [
	{
		name: 'Information overload',
		description: 'Critical issues get buried under an endless flood of content.',
		Icon: GiExplosionRays,
	},
	{
		name: 'Polarization and Echo Chambers',
		description: 'We’re more divided than ever, consuming media that reinforces our existing beliefs.',
		Icon: TbChartFunnel
	},
	{
		name: 'Decline in Critical Thinking',
		description: 'Complex issues are reduced to oversimplified “good vs. evil” narratives.',
		Icon: LuBrain
	},
	{
		name: 'Mistrust in Institutions and Expertise',
		description: 'Science, journalism, and government are increasingly dismissed—even when they provide reliable information.',
		Icon: LuLibrary
	},
	{
		name: 'Fear of Disagreement',
		description: 'Without open discussion, bad ideas go unchallenged, and good ideas don’t evolve.',
		Icon: MdCancel
	},
	{
		name: 'Individualism Over Collective Action',
		description: 'Society prioritizes personal success over community-driven solutions.',
		Icon: FaPersonFalling
	},
]
export function ProblemSection() {
	return (
		<div className="bg-white py-24 sm:py-32 md:h-screen flex items-center justify-center">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="col-span-2">
						<h2 className="text-xl font-semibold text-indigo-600">The Problem</h2>
						<p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
							We've lost our ability to communicate
						</p>
						<p className="mt-6 text-base/7 text-gray-600">
							As a society, we struggle to find consensus on even the most basic issues, making it harder to organize for real change.
						</p>
					</div>
					<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
						{problemPoints.map(({ Icon = CheckIcon, ...point }) => (
							<div key={point.name} className="relative pl-9">
								<dt className="font-semibold text-gray-900">
									<Icon aria-hidden="true" className="w-5 absolute left-0 top-1 size-5 text-indigo-500" />
									{point.name}
								</dt>
								<dd className="mt-2">{point.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

const features = [
	{
		name: 'Issue-Driven Conversations',
		description:
			'Unlike traditional social networks that thrive on chaos, our platform helps communities surface the most important issues through collective input.',
		href: '#',
		icon: LuSpeech,
	},
	{
		name: 'Decentralized & Secure',
		description:
			'Leveraging the Bluesky AT Protocol, we provide a decentralized foundation that protects user data, ensures platform longevity, and prevents manipulation.',
		href: '#',
		icon: PiGraph,
	},
	{
		name: 'Unbiased by Design',
		description:
			'Rather than amplifying the loudest voices or promoting divisive content, we let community-driven data determine what matters most.',
		href: '#',
		icon: FaBalanceScale,
	},
]
export function SolutionSection() {
	return (
		<div className="bg-gray-900 py-24 sm:py-3 md:h-screen flex items-center justify-center">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base/7 font-semibold text-indigo-400">Our Solution</h2>
					<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
						A New Era of Social Networking
					</p>
					<p className="mt-6 text-lg/8 text-gray-300">
						We’re transforming online discourse by shifting the focus from endless debate to meaningful collaboration. Our platform empowers communities to identify pressing issues, engage in structured, constructive discussions, and drive real solutions.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
									<feature.icon aria-hidden="true" className="w-7 flex-none text-indigo-400" />
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
									<p className="flex-auto">{feature.description}</p>
									{/* <p className="mt-6">
										<a href={feature.href} className="text-sm/6 font-semibold text-indigo-400">
											{feature.actionText || 'Learn more'} <span aria-hidden="true">→</span>
										</a>
									</p> */}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

export function NewsletterSection() {
	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
					<h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						Join the ProTruth Movement
					</h2>
					<p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
						Sign up below to get notified when we launch and receive updates on our progress.
					</p>
					<form className="mx-auto mt-10 flex max-w-md gap-x-4">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email"
							type="email"
							required
							placeholder="Enter your email"
							autoComplete="email"
							className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
						/>
						<button
							type="submit"
							className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Notify me
						</button>
					</form>
					<svg
						viewBox="0 0 1024 1024"
						aria-hidden="true"
						className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
					>
						<circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
						<defs>
							<radialGradient
								r={1}
								cx={0}
								cy={0}
								id="759c1415-0410-454c-8f7c-9a820de03641"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(512 512) rotate(90) scale(512)"
							>
								<stop stopColor="#7775D6" />
								<stop offset={1} stopColor="#E935C1" stopOpacity={0} />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	)
}


export function Home() {
	return (
		<>
			<a href="#Home" className="-m-1.5 p-1.5 sticky top-2 left-2 bg-white shadow shadow-white rounded-md">
				ProTruth
			</a>
			<div id="Home"></div>
			<HeroSection
				BannerText="Be the first to know when we launch"
				BannerActionButton={(
					<>
						<a href="#Join" className="font-semibold text-indigo-600">
							<span aria-hidden="true" className="absolute inset-0" />
							Sign Up <span aria-hidden="true">&rarr;</span>
						</a>
					</>
				)}
				Heading="Tired of people fighting over politics?"
				Subheading="We are too. That’s why we’re creating ProTruth—an open-source platform where communities can find common ground on issues that matter most."
				ActionButtons={(
					<>
						<a
							href="#Join"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign Me Up
						</a>
						<a href="#Problem" className="text-sm/6 font-semibold text-gray-900">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</>
				)}

			/>

			<div className="px-40">
				<hr />
			</div>
			<div id="Problem"><ProblemSection /></div>
			<div id="Solution"><SolutionSection /></div>
			<div id="Join" className="h-screen flex items-center justify-center">
				{/* <NewsletterSection /> */}
				<MailerLiteForm />
			</div>
		</>
	);
}

export default Home;
