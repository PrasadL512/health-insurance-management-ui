import AdminLayout from "../../components/layout/AdminLayout";
import RecentClaimsTable from "../../components/layout/dashboard/RecentClaimsTable";
import StatCard from "../../components/layout/dashboard/StatCard";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard value="245" label="Total Policies" change="↑ 12%" positive />
        <StatCard value="1,842" label="Active Users" change="↑ 8%" positive />
        <StatCard value="37" label="Pending Claims" change="↓ 5%" />
        <StatCard value="892" label="Approved Claims" change="↑ 15%" positive />
      </div>

      <RecentClaimsTable/>
    </AdminLayout>
  );
};

export default Dashboard;
