import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/AxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Auth/UseAuth/useAuth";
import toast from "react-hot-toast";

const RequestedProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: requestedProperties = [], refetch } = useQuery({
    queryKey: ["requestedProperties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/getRequestedProperty?email=${user.email}`
      );
      return res.data;
    },
  });
  const handleVerifyProperty = (id) => {
    axiosSecure
      .patch(`/updateOfferStatus/${id}?status=accepted`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("Offer accepted Successfully");
        }
      });
  };

  const handleRejectProperty = (id) => {
    axiosSecure
      .patch(`/updateOfferStatus/${id}?status=rejected`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.error("Offer Rejected");
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col container mx-auto">
        <h3 className="text-3xl font-semibold text-center mt-10">
          {" "}
          <span className="font-bold text-main">{user.displayName}</span> Your
          Property Request List
        </h3>
        <div className="-m-1.5 overflow-x-auto mt-10">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Property Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Property location.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Buyer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Buyer Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Offered Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Offered Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Accept
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Reject
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {requestedProperties?.map((item) => (
                    <tr key={item._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.propertyTitle}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.propertyLocation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.buyerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.buyerEmail}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        ${item.offerredPriceRange}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.offerStatus}
                      </td>
                      <td className="whitespace-nowrap text-end text-sm font-medium">
                     {
                      item.offerStatus==="accepted"?<p className="">Accepted</p>:   <button
                      onClick={() => handleVerifyProperty(item._id)}
                      type="button"
                      className="flex shadow-2xl justify-center items-center gap-2 w-20 h-8 cursor-pointer rounded-2xl  text-white font-semibold bg-gradient-to-r from-[#072730] via-[#0e3c49da] to-[#0a3a47da] hover:shadow-xl hover:shadow-[#072730] hover:scale-105 duration-300 hover:from-[#072730da] hover:to-[#072730da]"
                    >
                      Accept
                    </button>
                     }
                      </td>
                      <td className=" whitespace-nowrap text-end text-sm font-medium">
                       {
                        item.offerStatus==="accepted"?<p>Accepted</p>: <button
                        onClick={() => handleRejectProperty(item._id)}
                        type="button"
                        className="w-20 h-8 rounded-full cursor-pointer  shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                      >
                        Reject
                      </button>
                       }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestedProperties;
