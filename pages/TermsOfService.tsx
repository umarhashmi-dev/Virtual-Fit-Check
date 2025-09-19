/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-purple-600">Legal</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
                <p className="mt-6 text-xl leading-8">
                    These Terms of Service ("Terms") govern your access to and use of the Fit Check website and its AI-powered virtual try-on services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Description of Service</h2>
                    <p className="mt-6">
                        Fit Check provides a service that allows users to upload an image of themselves and an image of a garment to generate a new image simulating the user wearing that garment. The service is provided for personal, non-commercial use.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. User Responsibilities and Conduct</h2>
                    <p className="mt-6">
                        You are solely responsible for the images you upload ("User Content"). You represent and warrant that you own or have the necessary rights and permissions to use and authorize us to use your User Content as necessary to provide the Service.
                    </p>
                     <p className="mt-4">
                        You agree not to upload any User Content that:
                     </p>
                    <ul role="list" className="mt-4 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
                        <li>Is illegal, harmful, defamatory, obscene, or otherwise objectionable.</li>
                        <li>Infringes on any third party's rights, including privacy, publicity, or intellectual property rights.</li>
                        <li>Contains viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
                    </ul>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Intellectual Property Rights</h2>
                    <p className="mt-6">
                        You retain full ownership of your User Content. By uploading images, you grant Fit Check a temporary, worldwide, non-exclusive, royalty-free license to process your User Content for the sole purpose of providing the Service to you. This license ends automatically when the generated image is delivered to you.
                    </p>
                     <p className="mt-4">
                        All rights to the Service itself, including the website, AI models, and branding, are and will remain the exclusive property of Fit Check.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Disclaimer of Warranties</h2>
                    <p className="mt-6">
                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranty that the Service will meet your requirements or be available on an uninterrupted, secure, or error-free basis. The AI-generated images are simulations and may not be perfectly accurate. (See our full <a href="#" className="text-purple-600 hover:underline">Disclaimer</a>).
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Limitation of Liability</h2>
                    <p className="mt-6">
                        In no event shall Fit Check be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Termination</h2>
                    <p className="mt-6">
                        We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;