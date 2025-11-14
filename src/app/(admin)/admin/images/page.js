'use client';

import dynamic from 'next/dynamic';
import AdminLayout from '../../../components/admin/AdminLayout';

const ImageManager = dynamic(() => import('../../../components/admin/ImageManager'), {
  ssr: false,
});

export default function AdminImagesPage() {
  return (
    <AdminLayout>
      <ImageManager />
    </AdminLayout>
  );
}
