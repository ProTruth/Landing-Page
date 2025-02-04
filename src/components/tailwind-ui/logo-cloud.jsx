export default function LogoCloud() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg/8 font-semibold text-gray-900">
					Current customers
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
					<img
						alt="Nash Community College"
						src="/img/NashCC_Logo.png"
						width={158}
						height={48}
						className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="Citi High School"
						src="/img/CitiHigh_Logo.png"
						width={158}
						height={48}
						className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="Edgecombe Community College"
						src="/img/ECC_Logo.jpg"
						width={158}
						height={48}
						className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
					/>
					<img
						alt="Wilson Community College"
						src="/img/WilsonCC_Logo.png"
						width={158}
						height={48}
						className="col-span-2 max-h-40 w-full object-contain sm:col-start-2 lg:col-span-1"
					/>
				</div>
			</div>
		</div>
	)
}
