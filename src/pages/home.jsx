import React from "react";
import { AcademicCapIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { ScaleIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { UserMinusIcon } from "@heroicons/react/24/outline";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from '@heroicons/react/20/solid'
import Typewriter from 'typewriter-effect';


export function HeroSection({ Heading, Subheading, ActionButtons, BannerText, BannerActionButton }) {
  const navigation = [
    { name: 'The Problem', href: '#Problem' },
    { name: 'Our Solution', href: '#Solution' },
    { name: 'Join', href: '#Join' },
  ]
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
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
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {BannerText}{' '}
              {BannerActionButton}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 md:text-7xl">
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
    Icon: SparklesIcon,
  },
  {
    name: 'Polarization and Echo Chambers',
    description: 'We’re more divided than ever, consuming media that reinforces our existing beliefs.',
    Icon: FunnelIcon,
  },
  {
    name: 'Decline in Critical Thinking',
    description: 'Complex issues are reduced to oversimplified “good vs. evil” narratives.',
    Icon: CalculatorIcon,
  },
  {
    name: 'Mistrust in Institutions and Expertise',
    description: 'Science, journalism, and government are increasingly dismissed—even when they provide reliable information.',
    Icon: AcademicCapIcon,
  },
  {
    name: 'Fear of Disagreement',
    description: 'Without open discussion, bad ideas go unchallenged, and good ideas don’t evolve.',
    Icon: XCircleIcon,
  },
  {
    name: 'Individualism Over Collective Action',
    description: 'Society prioritizes personal success over community-driven solutions.',
    Icon: UserMinusIcon,
  },
]
export function ProblemSection() {

  return (
    <div className="bg-white py-24 sm:py-32 md:h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-indigo-600">The Problem</h2>
            <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Our inability to reason has created a world of noise and conflict
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

export function SolutionSection() {
  const features = [
    {
      name: 'Science-Driven Conversations',
      description:
        'On ProTruth, data is king. All posts are initially unweighted, and the community determines the value of each post based on the quality of the data provided.',
      href: '#',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Decentralized & Community-Moderated',
      description:
        'Leveraging the Bluesky AT Protocol, we provide a decentralized foundation that protects user data, ensures platform longevity, and prevents manipulation.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Unbiased by Design',
      description:
        'Rather than amplifying the loudest voices or promoting divisive content, we let community-driven data determine what matters most.',
      href: '#',
      icon: ScaleIcon,
    },
  ]
  return (
    <div className="bg-blue-100 py-24 sm:py-3 md:h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Our Solution</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
            ProTruth
            <br />
            Debate Moderation at Scale
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            In an age where we have access to more data and are more connected than ever, our debates often resemble the days of of small villages. ProTruth revolutionizes the way we engage in discussions by providing a platform that empowers communities to break down complex issues and validate information collaboratively. With a commitment to unbiased dialogue from the ground up, ProTruth fosters informed conversations that bridge divides and promote understanding.
          </p>
          <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vT5GWe3iI6LqMRfYpYVEPNv6psVTRdYzCimhWzaFD9q56bzqBs1RfkmqY7_UH0ZjY48tvBxaw01vWvt/pub" className="mt-8 text-pretty text-lg underline font-medium text-gray-700 sm:text-xl/8">
            Click Here to read the whitepaper
          </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                  <feature.icon aria-hidden="true" className="w-7 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-800">
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

export function HowItWorks() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">How It Works</h2>
      </div>
    </div >
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
        Heading={(
          <>
            Tired of political tension
            <br />
            <Typewriter
              options={{
                strings: ['at the dinner table?', 'on social media?', 'in the news?', 'in your community?', 'at work?', 'with your family?', 'with your friends?'],
                autoStart: true,
                loop: true,
              }}
            />
          </>
        )}
        Subheading="We are too. That’s why we’re creating ProTruth—an open-source platform where communities can find common ground on issues that matter most."
        ActionButtons={(
          <>
            <a
              href="#Join"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Me Up
            </a>
            <a href="#Problem" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </>
        )}
      />
      <div id="Problem"><ProblemSection /></div>
      <div id="Solution"><SolutionSection /></div>
    </>
  );
}

export default Home;
