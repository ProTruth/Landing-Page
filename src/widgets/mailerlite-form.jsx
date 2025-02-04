import { useEffect } from "react";
import "./mailerlite.css";

const MailerLiteForm = ({ code, trackerId, header, submitButtonContent, submittingButtonContent, submissionComplete, emailPlaceholder }) => {
	useEffect(() => {
		const js = `
      function ml_webform_success_${code}() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-${code} .row-success').show();
          $('.ml-subscribe-form-${code} .row-form').hide();
      };
    `
		const script = document.createElement("script")
		const scriptText = document.createTextNode(js)
		script.appendChild(scriptText)
		document.body.appendChild(script)

		const script2 = document.createElement("script")
		script2.src = `https://static.mailerlite.com/js/w/webforms.min.js?${trackerId}`
		document.body.appendChild(script2)
	}, [])

	return (
		<>
			<div id="mlb2-9793735" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-9793735">
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
			</div>
		</>
	)
}

export default MailerLiteForm