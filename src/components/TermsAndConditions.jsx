import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="flex justify-center p-4">
      <Card className="max-w-4xl w-full shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
          <p className="font-semibold">Description: Initial Terms and Conditions replacing general rules</p>
          
          <h3 className="text-lg font-semibold mt-4">Introduction</h3>
          <p>
            These terms and conditions and the documents referred and linked to below (the “Terms”) set out the
            basis upon which the website operated under the Website and its related or connected services
            (collectively, the “Service”) will be provided to you.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">General Terms</h3>
          <p>
            We reserve the right to amend the terms (including any documents referred and linked to below) at any
            time. When such amendment is not substantial, we may not provide you with prior notice. You will be
            notified in advance for material changes and may be required to re-confirm acceptance before they take
            effect.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Your Obligations</h3>
          <ul className="list-disc pl-6">
            <li>You must be over 18 years of age and legally capable of entering into a binding agreement.</li>
            <li>It is your responsibility to ensure that using the service is legal in your jurisdiction.</li>
            <li>When sending money, you confirm authorization to do so.</li>
            <li>You must not attempt to manipulate any element of the service in bad faith.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-4">Registration</h3>
          <p>
            You must provide accurate information when registering, including valid proof of identification. We reserve
            the right to suspend wagering or restrict account options until verification is completed.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Restricted Use</h3>
          <p>
            You must not use the service for unlawful activities, unauthorized data collection, disrupting others,
            promoting unsolicited advertisements, or attempting to cheat the service.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Privacy</h3>
          <p>
            Your information is protected and processed in accordance with our Privacy Policy. We will not disclose
            your identity unless required by competent authorities.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Your Account</h3>
          <p>
            We reserve the right to close or suspend an account if terms are not followed. No credit is given for
            service use.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;