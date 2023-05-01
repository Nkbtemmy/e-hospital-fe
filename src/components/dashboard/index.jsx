import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminScaffold from './widgets/AdminScaffold';
import axios from 'axios';
import CsvDownloadButton from './helpers/Downloader';

function Dashboard() {
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_API_URL
    useEffect(() => {
      const accessToken = localStorage.getItem('access-token');
      if (!accessToken) {
        navigate('/');
      }
    }, []);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get(`${baseUrl}/api/users`)
        .then(response => setUsers(response?.data?.data))
    }, []);

    return (
        <AdminScaffold >
            <h2 className=' text-2xl font-bold '>User's List</h2>
            <div className="flex justify-end">
                <CsvDownloadButton data={users} className="ml-auto" />
            </div>
            <div className="flex flex-col mt-8 w-full bg-red-200">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user, index) => (
                                        <React.Fragment key={index}>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                            <div className="text-sm text-gray-500">{user.username}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{user.email}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {user.role}
                                                    </span>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminScaffold>
    );
}

export default Dashboard;