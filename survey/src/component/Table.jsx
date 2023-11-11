import {useState } from 'react'
import { api } from '../config/api';
const Table = () => {
   const tableData = [
    {
      label: 'The Taste of Your Food',
      isGray: false,
    },
    {
      label: 'The Temperature of your food',
      isGray: true,
    },
    {
      label: 'The speed of service',
      isGray: false,
    },
    {
      label: 'The friendliness of the crew',
      isGray: true,
    },
    {
      label: 'The accuracy of your order',
      isGray: false,
    },
    {
      label: 'The cleanliness of the restaurant',
      isGray: true,
    },
  ];

  const [formData, setFormData] = useState({});

  const handleRadioChange = (header, value) => {
    setFormData({ ...formData, [header]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData, such as sending it to a server
    console.log('Form Data:', formData);
api.post("/survey/store",formData)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-4">
        <div className="flex flex-col border-[2px] border-gray-100 p-2 gap-1 justify-center">
          <div>
            <h2 className="text-base font-bold">Please rate your satisfaction with ...</h2>
          </div>
          <div className="flex flex-col justify-center">
            <table className="w-auto">
              <thead>
                <tr>
                  <th className="text-md px-4 py-3"></th>
                  <th className="text-md px-3 py-3 border-b-black border-l-0 border-t-0 border-r-0 border-[2px]">
                    Highly Satisfied
                  </th>
                  <th className="text-md px-3 py-3 border-b-black border-l-0 border-t-0 border-r-0 border-[2px]">
                    Satisfied
                  </th>
                  <th className="text-md px-3 py-3 border-b-black border-l-0 border-t-0 border-r-0 border-[2px]">
                    Neither Satisfied nor Dissatisfied
                  </th>
                  <th className="text-md px-3 py-3 border-b-black border-l-0 border-t-0 border-r-0 border-[2px]">
                    Dissatisfied
                  </th>
                  <th className="text-md px-3 py-3 border-b-black border-l-0 border-t-0 border-r-0 border-[2px]">
                    Highly Dissatisfied
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className={item.isGray ? 'bg-gray-200' : ''}>
                    <th className="py-3">{item.label}</th>
                    <td>
                      <div className="flex justify-center">
                        <input
                          type="radio"
                          className="h-7 w-7"
                          name={item.label}
                          value="Highly Satisfied"
                          onChange={() => handleRadioChange(item.label, 'Highly Satisfied')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <input
                          type="radio"
                          className="h-7 w-7"
                          name={item.label}
                          value="Satisfied"
                          onChange={() => handleRadioChange(item.label, 'Satisfied')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <input
                          type="radio"
                          className="h-7 w-7"
                          name={item.label}
                          value="Neither Satisfied nor Dissatisfied"
                          onChange={() =>
                            handleRadioChange(item.label, 'Neither Satisfied nor Dissatisfied')
                          }
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <input
                          type="radio"
                          className="h-7 w-7"
                          name={item.label}
                          value="Dissatisfied"
                          onChange={() => handleRadioChange(item.label, 'Dissatisfied')}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <input
                          type="radio"
                          className="h-7 w-7"
                          name={item.label}
                          value="Highly Dissatisfied"
                          onChange={() => handleRadioChange(item.label, 'Highly Dissatisfied')}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                  </div>
                  <div className='flex justify-center'>
                      
          <button className='bg-yellow-500 w-[80px] h-[40px] rounded' type="submit">Submit</button>
                  </div>
        </div>
      </div>
    </form>
  );
}

export default Table
