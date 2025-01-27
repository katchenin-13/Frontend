import React, { useState } from 'react';

function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true);
  const query = new URLSearchParams(location.search);
  const template = query.get('template');
  const liteLink =
    template === 'laravel'
      ? 'https://github.com/cruip/laravel-tailwindcss-admin-dashboard-template'
      : 'https://github.com/cruip/tailwind-dashboard-template';

  return (
    <>
    { bannerOpen && (
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
        <div className="bg-gray-800 border border-transparent dark:border-gray-700/60 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          Disigner by Soro
        </div>
      </div>
    )}
    </>
  );
}

export default Banner;