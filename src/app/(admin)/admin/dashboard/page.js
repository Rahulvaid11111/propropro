'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';

const ContentEditor = dynamic(() => import('../../../components/admin/ContentEditor'), {
  ssr: false,
});

const ImageManager = dynamic(() => import('../../../components/admin/ImageManager'), {
  ssr: false,
});

const BlogManager = dynamic(() => import('../../../components/admin/BlogManager'), {
  ssr: false,
});

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('content');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'content', name: 'Content Management', icon: '📝' },
    { id: 'images', name: 'Image Manager', icon: '🖼️' },
    { id: 'blog', name: 'Blog Manager', icon: '📰' },
    { id: 'services', name: 'Services', icon: '⚙️' },
    { id: 'settings', name: 'Settings', icon: '🔧' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your Photobooth Canada website content</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'content' && <ContentEditor />}
              {activeTab === 'images' && <ImageManager />}
              {activeTab === 'blog' && <BlogManager />}
              {activeTab === 'services' && <ServicesManager />}
              {activeTab === 'settings' && <SettingsManager />}
            </motion.div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

// Services Manager Component
function ServicesManager() {
  const [services, setServices] = useState([
    {
      id: 'open-air',
      name: 'Open Air Classic Photo Booth',
      price: 478,
      description: 'Ultimate customization with backdrops, props, and unlimited prints',
      status: 'active'
    },
    {
      id: 'mirror-booth',
      name: 'Mirror Photo Booth',
      price: 599,
      description: 'HD touchscreen mirror with emojis, stickers, and virtual props',
      status: 'active'
    },
    {
      id: '360-booth',
      name: '360 Video Booth',
      price: 499,
      description: 'TikTok-ready 360° videos with slow-mo and disco lights',
      status: 'active'
    }
  ]);

  const handleServiceUpdate = (serviceId, field, value) => {
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, [field]: value } : service
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Services Management</h2>
      
      <div className="grid gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Name</label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => handleServiceUpdate(service.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                <input
                  type="number"
                  value={service.price}
                  onChange={(e) => handleServiceUpdate(service.id, 'price', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={service.status}
                  onChange={(e) => handleServiceUpdate(service.id, 'status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="active">Active</option>
                  <option value="hidden">Hidden</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button className="bg-red-600 hover:bg-red-700 text-black px-4 py-2 rounded-md transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={service.description}
                onChange={(e) => handleServiceUpdate(service.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Settings Manager Component
function SettingsManager() {
  const [settings, setSettings] = useState({
    siteName: 'Photobooth Canada',
    contactEmail: 'info@photoboothcanada.com',
    contactPhone: '(416) 123-4567',
    maintenanceMode: false,
    adminPassword: 'photobooth2024'
  });

  const handleSettingChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
      
      <div className="grid gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleSettingChange('siteName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleSettingChange('contactEmail', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <input
                type="tel"
                value={settings.contactPhone}
                onChange={(e) => handleSettingChange('contactPhone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
              <input
                type="password"
                value={settings.adminPassword}
                onChange={(e) => handleSettingChange('adminPassword', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">Enable Maintenance Mode</span>
            </label>
          </div>
          
          <div className="mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-black px-6 py-2 rounded-md transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
