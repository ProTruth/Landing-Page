import { useEffect, useState } from "react";
import "./mailerlite.css";

const MailerLiteForm = ({ code, trackerId, header, submitButtonContent, submittingButtonContent, submissionComplete, emailPlaceholder }) => {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('fields[email]', email);

      await fetch('https://assets.mailerlite.com/jsonp/1313600/forms/145376291816736319/subscribe', {
        method: 'POST',
        body: formData,
      });

      console.log("Submitted Email:", email);
      setSubmitted(true);
      setEmail(""); // Clear input after submission
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="bg-white py-16 sm:py-24 ml-subscribe-form">
        <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 row-form ${submitted ? 'hidden' : ''}`}>
          <div className="relative isolate overflow-hidden bg-gray-100 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              Join the ProTruth Movement
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-700">
              Sign up below to get notified when we launch and receive updates on our progress.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4 ml-block-form" onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
        <div className="row-success" style={{ display: submitted ? 'block' : 'none' }}>
          <h2 className="text-3xl text-center">Thank you! 🎉</h2>
          <p className="text-xl text-center">Welcome to the community -- we'll keep you posted!</p>
        </div>
      </div>
    </>
  )
}

export default MailerLiteForm