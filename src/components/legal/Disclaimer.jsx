import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">Disclaimer</h1>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          The information contained on this website is for general information
          purposes only. While we, at <strong>Lakshya Cabs</strong>, strive to keep
          all content up to date and correct, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability with respect to
          the website or the information, products, services, or related graphics
          contained on the website for any purpose.
        </p>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Any reliance you place on such information is therefore strictly at your
          own risk. In no event will we be liable for any loss or damage including
          without limitation, indirect or consequential loss or damage, or any loss
          or damage whatsoever arising from loss of data or profits arising out of,
          or in connection with, the use of this website.
        </p>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Through this website you may be able to link to other websites which are
          not under the control of Lakshya Cabs. We have no control over the nature,
          content, and availability of those sites. The inclusion of any links does
          not necessarily imply a recommendation or endorse the views expressed
          within them.
        </p>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          Every effort is made to keep the website up and running smoothly.
          However, <strong>Lakshya Cabs</strong> takes no responsibility for, and will not
          be liable for, the website being temporarily unavailable due to
          technical issues beyond our control.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          Prices, itineraries, and availability mentioned on the website are
          subject to change without prior notice. Actual travel services and
          experiences may vary based on availability, weather conditions, and other
          operational factors.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
