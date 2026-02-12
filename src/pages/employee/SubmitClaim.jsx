import EmployeeLayout from "../../components/layout/EmployeeLayout";

const SubmitClaim = () => {
  return (
    <EmployeeLayout>
      <h1 className="text-2xl font-semibold mb-1">
        Submit Insurance Claim
      </h1>
      <p className="text-gray-500 mb-6">
        Fill out the form below to submit your claim for processing
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* FORM SECTION */}
        <div className="lg:col-span-2 bg-white border rounded-xl p-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">
                Policy Number *
              </label>
              <input
                type="text"
                placeholder="POL-001"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Healthcare Provider *
              </label>
              <select className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select Provider</option>
                <option>City Hospital</option>
                <option>MediCare Clinic</option>
                <option>HealthPlus Center</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">
                Date of Service *
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Claim Amount *
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="text-sm font-medium">
              Description / Diagnosis *
            </label>
            <textarea
              rows="4"
              placeholder="Describe the medical condition, treatment received, etc."
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Upload Box EXACT STYLE */}
          <div className="mb-6">
            <label className="text-sm font-medium">
              Upload Medical Documents
            </label>

            <div className="mt-2 border-2 border-dashed border-blue-400 rounded-xl p-8 text-center bg-blue-50">
              <div className="text-3xl text-blue-500 mb-2">⬆️</div>

              <p className="text-gray-600 text-sm mb-1">
                Click to upload or drag and drop
              </p>

              <p className="text-xs text-gray-400 mb-3">
                PDF, PNG, JPG up to 10MB
              </p>

               <input
              type="file"
              className="mx-auto block text-sm"
            />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Submit Claim
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Important Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold mb-3 text-blue-700">
              Important Information
            </h3>

            <ul className="text-sm text-gray-600 space-y-2 list-disc ml-4">
              <li>Ensure all information is accurate</li>
              <li>Upload clear copies of medical documents</li>
              <li>Claims processed within 5-7 business days</li>
              <li>You will receive claim status updates</li>
              <li>Contact support for urgent claims</li>
            </ul>
          </div>

          {/* Claim Process EXACT STYLE */}
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-semibold mb-4">
              Claim Process
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  1
                </span>
                Submit Claim
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  2
                </span>
                Review
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  3
                </span>
                Decision
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                  4
                </span>
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default SubmitClaim;
