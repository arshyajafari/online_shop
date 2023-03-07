export const TableHead = () => {
  return (
    <thead className="bg-gray-400 text-gray-700 text-xs uppercase">
      <tr className="text-center">
        <th scope="col" className="px-6 py-3">
          Number
        </th>
        <th scope="col" className="px-6 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Total
        </th>
        <th scope="col" className="px-4 py-3">
          <span className="sr-only">Remove</span>
        </th>
      </tr>
    </thead>
  );
};
