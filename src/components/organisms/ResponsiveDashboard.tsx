"use client";

// ✅ RESPONSIVE - Using Tailwind breakpoints
// Mobile-first design: base = mobile, then sm, md, lg, xl, 2xl

export default function ResponsiveDashboard() {
  return (
    // Mobile: full width, Tablet: px-4, Desktop: max-w-7xl mx-auto
    <div className="w-full px-4 md:px-6 lg:px-8">
      
      {/* Flex: mobile stacked, desktop side-by-side */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        
        {/* Sidebar - mobile: full width, desktop: fixed width 250px */}
        <div className="w-full lg:w-64 bg-slate-800 text-white p-4 rounded-lg lg:rounded-none">
          <h3 className="text-lg font-bold mb-4">Sidebar</h3>
          <ul className="space-y-2">
            <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Dashboard</li>
            <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Analytics</li>
            <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Cards grid: mobile:1, tablet:2, desktop:3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Card 1</h3>
              <p className="text-gray-600 mt-2">Responsive card that stacks on mobile</p>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Card 2</h3>
              <p className="text-gray-600 mt-2">No horizontal scroll needed</p>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Card 3</h3>
              <p className="text-gray-600 mt-2">Clean layout on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}