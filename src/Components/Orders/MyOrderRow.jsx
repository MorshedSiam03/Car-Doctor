import PropTypes from "prop-types";
const MyOrderRow = ({ order, handleDelete, handleConfirm }) => {
const {_id, CustomerName, ServiceName, img, Price, ServiceId, email, status } = order; 
  
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-square dark:bg-transparent btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded-xl h-32 w-40">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-2xl">{ServiceName}</div>
              <div className="text-sm opacity-50">{ServiceId}</div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-xl">
          {CustomerName}
          <br />
          <span className="badge badge-ghost dark:bg-gray-300 dark:border-0 badge-sm">{email}</span>
        </td>
        <td className="font-semibold text-xl">$ {Price}</td>
        <th>
          {
            status === 'Confirm' ?
            <button  className="btn hover:bg-green-600 bg-green-600 dark:bg-green-600 text-white">Confirmed</button> :
            <button onClick={() => handleConfirm(_id)} className="btn bg-[#ff3811] dark:bg-[#ff3811] text-white">Pending</button>}
        </th>
      </tr>
    </>
  );
};

MyOrderRow.propTypes = {
  order: PropTypes.any,
  handleDelete: PropTypes.any,
  handleConfirm: PropTypes.any,
};

export default MyOrderRow;
