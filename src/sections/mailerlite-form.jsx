import { useEffect, useState } from "react";
import "./mailerlite.css";

const MailerLiteForm = ({ code, trackerId, header, submitButtonContent, submittingButtonContent, submissionComplete, emailPlaceholder }) => {
	const [submitted, setSubmitted] = useState(false)
	// useEffect(() => {
	// 	const js = `
	//     function ml_webform_success_${code}() {
	//         var $ = ml_jQuery || jQuery;
	//         $('.ml-subscribe-form-${code} .row-success').show();
	//         $('.ml-subscribe-form-${code} .row-form').hide();
	//     };
	//   `
	// 	const script = document.createElement("script")
	// 	const scriptText = document.createTextNode(js)
	// 	script.appendChild(scriptText)
	// 	document.body.appendChild(script)

	// 	const script2 = document.createElement("script")
	// 	script2.src = `https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024`
	// 	document.body.appendChild(script2)
	// }, [])

	return (
		<>
			<div className="bg-white py-16 sm:py-24 ml-subscribe-form">
				<div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 row-form ${submitted ? 'hidden' : ''}`}>
					<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
						<h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
							Join the ProTruth Movement
						</h2>
						<p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
							Sign up below to get notified when we launch and receive updates on our progress.
						</p>
						<form className="mx-auto mt-10 flex max-w-md gap-x-4 ml-block-form" onSubmit={() => setSubmitted(true)} action="https://assets.mailerlite.com/jsonp/1313600/forms/145376291816736319/subscribe" data-code method="post">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="fields[email]"
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
				<div className="ml-form-successBody row-success" style={{ display: submitted ? 'block' : 'none' }}>
					<div className="ml-form-successContent">
						<h4>Thank you!</h4>
						<p>You have successfully joined our subscriber list.</p>
					</div>
				</div>
			</div>
			{/* Old Form */}
			{/* <div id="mlb2-9793735" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-9793735">
				<div className="ml-form-align-center ">
					<div className="ml-form-embedWrapper embedForm">
						<div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
							<div className="ml-form-embedContent" style={{}}>
								<h4>Sound Exciting?</h4>
								<p style={{ textAlign: 'center' }}>We're still producing our kits in small batches.&nbsp;Sign up below to discuss how we can add value to your programs!</p>
							</div>
							<form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/712677/forms/106245577644181157/subscribe" data-code method="post" target="_blank">
								<div className="ml-form-formContent">
									<div className="ml-form-fieldRow ">
										<div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
											<input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask name="fields[email]" placeholder="Email" autoComplete="email" />
										</div>
									</div><div className="ml-form-fieldRow ">
										<div className="ml-field-group ml-field-name">
											<input aria-label="name" type="text" className="form-control" data-inputmask name="fields[name]" placeholder="Name" autoComplete="given-name" />
										</div>
									</div>
								</div>
								<input type="hidden" name="ml-submit" defaultValue={1} />
								<div className="ml-form-embedSubmit">
									<button type="submit" className="primary">Subscribe</button>
									<button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
										<div className="ml-form-embedSubmitLoad" />
										<span className="sr-only">Loading...</span>
									</button>
								</div>
								<input type="hidden" name="anticsrf" defaultValue="true" />
							</form>
						</div>
						<div className="ml-form-successBody row-success" style={{ display: 'none' }}>
							<div className="ml-form-successContent">
								<h4>Thank you!</h4>
								<p>You have successfully joined our subscriber list.</p>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	)
}

export default MailerLiteForm