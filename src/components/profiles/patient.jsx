import React from 'react';

function ProfilePage({ name, photoUrl, email, phoneNumber }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Logo</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex justify-center md:flex-1">
              <h1 className="text-lg font-medium text-gray-900">{name}</h1>
            </div>
            <div className="flex justify-end md:flex-1">
              <img
                className="h-10 w-10 rounded-full"
                src={photoUrl}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Your Profile
            </h2>
          </div>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit Profile
              </button>
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Name */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Name
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {name}
                </dd>
              </dl>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Email
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {email}
                </dd>
              </dl>
            </div>
          </div>

          {/* Photo */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Photo</dt>
                <dd className="mt-1">
                    <img className="h-40 w-40 rounded-full" src={photoUrl} alt="" />
                </dd>
                </dl>
            </div>
        </div>
              {/* Phone Number */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">
              Phone Number
            </dt>
            <dd className="mt-1 text-lg font-semibold text-gray-900">
              {phoneNumber}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
export default ProfilePage;