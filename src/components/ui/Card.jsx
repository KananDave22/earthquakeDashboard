export const Card = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-4 h-full">
      <h2 className="font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
};