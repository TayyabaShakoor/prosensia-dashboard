"use client";
import { useState } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Modal from "@/components/molecules/Modal";
import StatCard from "@/components/molecules/StatCard";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "info">("add");

  const openModal = (type: "add" | "info") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back! 👋</h2>
        <p className="text-gray-500 mt-1">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="2,543"
          icon="👥"
          trend={{ value: 12, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          icon="💰"
          trend={{ value: 8, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Active Projects"
          value="24"
          icon="📊"
          trend={{ value: 3, isPositive: false }}
          color="purple"
        />
        <StatCard
          title="Completion Rate"
          value="94%"
          icon="✅"
          trend={{ value: 5, isPositive: true }}
          color="yellow"
        />
      </div>

      {/* Button Showcase */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Button Components</h3>
        <div className="flex flex-wrap gap-4">
          <Button label="Primary Button" variant="primary" />
          <Button label="Secondary Button" variant="secondary" />
          <Button label="Danger Button" variant="danger" />
          <Button label="Outline Button" variant="outline" />
          <Button label="Small Button" size="sm" />
          <Button label="Large Button" size="lg" />
          <Button label="Disabled Button" disabled={true} />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Card Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Project Alpha" subtitle="Frontend Development" hover>
            <p className="text-gray-600 mb-3">Complete dashboard UI with responsive design.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 font-medium">In Progress</span>
              <span className="text-xs text-gray-400">Due: Dec 15</span>
            </div>
          </Card>

          <Card title="Project Beta" subtitle="Backend API" hover>
            <p className="text-gray-600 mb-3">RESTful API development with Node.js.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-600 font-medium">Completed</span>
              <span className="text-xs text-gray-400">Due: Nov 30</span>
            </div>
          </Card>

          <Card title="Project Gamma" subtitle="Database Design" hover>
            <p className="text-gray-600 mb-3">PostgreSQL schema and optimization.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-yellow-600 font-medium">Planning</span>
              <span className="text-xs text-gray-400">Due: Jan 10</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Modal Component</h3>
        <div className="flex flex-wrap gap-4">
          <Button label="Add New Project" variant="primary" onClick={() => openModal("add")} />
          <Button label="Show Info Modal" variant="outline" onClick={() => openModal("info")} />
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === "add" ? "Add New Project" : "Information"}
        size="md"
      >
        {modalType === "add" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Enter project description"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-600">This modal demonstrates proper cleanup in useEffect.</p>
            <p className="text-gray-600 text-sm">When closed, body scroll is restored and event listeners are removed.</p>
            <div className="bg-blue-50 p-3 rounded-lg mt-3">
              <code className="text-sm text-blue-700">✅ No memory leaks here!</code>
            </div>
          </div>
        )}
      </Modal>

      {/* Atomic Design Documentation */}
      <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📐 Atomic Design Implementation</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="p-3 bg-blue-50 rounded-lg">
            <strong className="text-blue-700">Atoms</strong>
            <p className="text-gray-600 mt-1">Button, Card</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <strong className="text-green-700">Molecules</strong>
            <p className="text-gray-600 mt-1">Modal, StatCard</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <strong className="text-purple-700">Organisms</strong>
            <p className="text-gray-600 mt-1">(Header, Sidebar - can be added)</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg">
            <strong className="text-orange-700">Templates</strong>
            <p className="text-gray-600 mt-1">DashboardLayout</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            ✅ All components use <strong>TypeScript interfaces</strong> for type safety<br />
            ✅ <strong>Tailwind CSS only</strong> - Zero custom .css files<br />
            ✅ <strong>useEffect cleanup</strong> in Modal prevents memory leaks
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}