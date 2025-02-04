const posts = [
	{
		id: 1,
		title: 'NC IDEA Awards $160,000 to Sixteen North Carolina Startups',
		href: 'https://ncidea.org/nc-idea-awards-160000-to-sixteen-north-carolina-startups/',
		description:
			'NC IDEA, a private foundation committed to supporting entrepreneurial ambition and economic empowerment in North Carolina, announced today that the organization has awarded $160,000 to sixteen North Carolina startups...',
		imageUrl:
			'/img/NC_Idea_Micro_Recipient.png',
		date: 'Oct 24, 2024',
		datetime: '2024-10-24',
		category: { title: 'Funding', href: 'https://ncidea.org/nc-idea-awards-160000-to-sixteen-north-carolina-startups/' },
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	// More posts...
]

export default function Example() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						In the news
					</h2>
				</div>
				<div className="mx-auto mt-16 flex flex-row justify-center max-w-2xl justify-items-center">
					{posts.map((post) => (
						<article key={post.id} className="flex flex-col items-start justify-between ">
							<div className="relative w-full">
								<img
									alt=""
									src={post.imageUrl}
									className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div className="max-w-xl">
								<div className="mt-8 flex items-center gap-x-4 text-xs">
									<time dateTime={post.datetime} className="text-gray-500">
										{post.date}
									</time>
									<a
										href={post.category.href}
										target="_blank"
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										{post.category.title}
									</a>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
										<a href={post.href} target="_blank">
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
								</div>
								{/* <div className="relative mt-8 flex items-center gap-x-4">
									<img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-100" />
									<div className="text-sm/6">
										<p className="font-semibold text-gray-900">
											<a href={post.author.href}>
												<span className="absolute inset-0" />
												{post.author.name}
											</a>
										</p>
										<p className="text-gray-600">{post.author.role}</p>
									</div>
								</div> */}
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}
