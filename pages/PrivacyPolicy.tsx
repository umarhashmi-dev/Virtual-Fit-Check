/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-purple-600">Legal</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
                <p className="mt-6 text-xl leading-8">
                    Your privacy is critically important to us. This Privacy Policy outlines how Fit Check ("we", "us", "our") handles your information when you use our virtual try-on service. Our policy is simple: we are committed to not collecting or storing your personal images.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Information We Process</h2>
                    <p className="mt-6">
                        To provide our service, we need to process certain data. Here’s what we handle and why:
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Images You Provide.</strong> We process the photos you upload (of yourself and garments) for the sole purpose of generating the virtual try-on image. This processing happens in real-time.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Usage Data.</strong> We may collect anonymous data about how you interact with our service (e.g., features used, session duration). This helps us understand how our service is being used and how we can improve it. This data is aggregated and cannot be used to identify you.
                            </span>
                        </li>
                    </ul>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Data Retention and Deletion: We Don't Store Your Images</h2>
                    <p className="mt-6">
                        This is the cornerstone of our privacy commitment. <strong className="font-semibold text-gray-900">We do not store your uploaded images on our servers.</strong> The images exist only temporarily on our servers during the AI processing and are deleted immediately after the virtual try-on image is generated and sent back to you. They are not saved, archived, or used for any other purpose.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cookie Policy</h2>
                    <p className="mt-6">
                        We use a simple cookie to remember your consent preference for our cookie policy itself. We may also use essential cookies for the basic functionality of the website. If you accept analytics, we may use cookies to gather anonymous usage data as described above.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Changes to This Policy</h2>
                     <p className="mt-6">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this Privacy Policy periodically.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
                    <p className="mt-6">
                        If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@fitcheck.example.com" className="text-purple-600 hover:underline">privacy@fitcheck.example.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;