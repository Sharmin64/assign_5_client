import { ServiceTableProps } from "../../../types";
import emojiImg from "../../../assets/icons/downfaceemo.png";

const ServiceTable: React.FC<ServiceTableProps> = ({
  services,
  isLoading,
  error,
  onEditService,
}) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  //   Ensure service is an array before mapping
  if (!Array.isArray(services) || services.length === 0) {
    return (
      <>
        <p className="text-2xl text-blue-600 font-bold">
          No service available right now !
        </p>
        <img src={emojiImg} alt="emojiSadFace" className="w-auto mx-auto" />
      </>
    );
  }
  console.log(services);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Price</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services?.map((service) => (
          <tr key={service.id}>
            <td className="border px-4 py-2">{service.id}</td>
            <td className="border px-4 py-2">{service.name}</td>
            <td className="border px-4 py-2">{service.price}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => onEditService(service)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => confirm("Are you sure you want to delete?")}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
