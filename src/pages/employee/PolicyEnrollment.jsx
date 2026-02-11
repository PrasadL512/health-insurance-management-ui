import EmployeeLayout from "../../components/layout/EmployeeLayout";

const PolicyEnrollment = () => {
  return (
    <EmployeeLayout>
      <h1 className="text-2xl font-semibold mb-1">
        Available Insurance Policies
      </h1>
      <p className="text-gray-500 mb-6">
        Choose the best health coverage plan for you and your family
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Basic Health Plan</h3>

          <p className="text-gray-500 text-sm">Coverage up to</p>
          <p className="text-xl font-semibold">$50,000</p>

          <p className="text-gray-500 text-sm mt-2">Premium</p>
          <p className="text-blue-600 font-medium mb-4">$250/month</p>

          <ul className="text-sm space-y-2 text-gray-600 mb-6">
            <li>✔ General practitioner visits</li>
            <li>✔ Emergency care</li>
            <li>✔ Prescription medications</li>
            <li>✔ Basic lab tests</li>
            <li>✔ Annual health checkup</li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Enroll Now
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow relative">
          <span className="absolute top-[-10px] right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Recommended
          </span>

          <h3 className="text-lg font-semibold mb-2">Premium Health Plan</h3>

          <p className="text-gray-500 text-sm">Coverage up to</p>
          <p className="text-xl font-semibold">$150,000</p>

          <p className="text-gray-500 text-sm mt-2">Premium</p>
          <p className="text-blue-600 font-medium mb-4">$500/month</p>

          <ul className="text-sm space-y-2 text-gray-600 mb-6">
            <li>✔ All Basic Plan benefits</li>
            <li>✔ Specialist consultations</li>
            <li>✔ Advanced diagnostic tests</li>
            <li>✔ Surgical procedures</li>
            <li>✔ Hospital room coverage</li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Enroll Now
          </button>
        </div>

        {/* Family Plan */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Family Coverage Plan</h3>

          <p className="text-gray-500 text-sm">Coverage up to</p>
          <p className="text-xl font-semibold">$200,000</p>

          <p className="text-gray-500 text-sm mt-2">Premium</p>
          <p className="text-blue-600 font-medium mb-4">$750/month</p>

          <ul className="text-sm space-y-2 text-gray-600 mb-6">
            <li>✔ All Premium Plan benefits</li>
            <li>✔ Coverage for spouse & children</li>
            <li>✔ Dental care included</li>
            <li>✔ Vision care included</li>
            <li>✔ Mental health support</li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Enroll Now
          </button>
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default PolicyEnrollment;
