import AdminLayout from "../../components/layout/AdminLayout";

const providers = [
  {
    name: "City Hospital",
    type: "Hospital",
    location: "New York, NY",
    phone: "(555) 123-4567",
  },
  {
    name: "MediCare Clinic",
    type: "Clinic",
    location: "Los Angeles, CA",
    phone: "(555) 234-5678",
  },
  {
    name: "HealthPlus Center",
    type: "Medical Center",
    location: "Chicago, IL",
    phone: "(555) 345-6789",
  },
  {
    name: "Express Care",
    type: "Urgent Care",
    location: "Houston, TX",
    phone: "(555) 456-7890",
  },
];

const ProviderManagement = () => {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Provider Network Management
        </h1>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700">
          + Add Provider
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-5 rounded-xl border mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            className="flex-1 border rounded-lg px-4 py-3"
            placeholder="Search providers by name or location..."
          />

          <select className="border rounded-lg px-4 py-3">
            <option>All Types</option>
            <option>Hospital</option>
            <option>Clinic</option>
            <option>Medical Center</option>
            <option>Urgent Care</option>
          </select>

          <select className="border rounded-lg px-4 py-3">
            <option>All Networks</option>
            <option>In-Network</option>
            <option>Out-of-Network</option>
          </select>
        </div>
      </div>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {providers.map((p, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.type}</p>
              </div>
              ✏️
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Location:</span> {p.location}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {p.phone}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                In-Network
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default ProviderManagement;
