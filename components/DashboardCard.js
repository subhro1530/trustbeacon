export default function DashboardCard({ title, content }) {
    return (
      <div className="border border-gray-200 rounded p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  }
  