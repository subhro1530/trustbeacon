export default function DetectedContentList({ items }) {
    if (!items || items.length === 0) {
      return <div className="text-gray-600">No flagged content found.</div>;
    }
  
    return (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="border p-3 rounded">
            <p className="font-medium">Content: {item.text}</p>
            <p className="text-red-600">Risk Level: {item.riskLevel}</p>
          </li>
        ))}
      </ul>
    );
  }
  