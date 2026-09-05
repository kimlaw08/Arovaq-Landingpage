'tsx'
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CreatorListings() {
  const [creators, setCreators] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) console.error('Error fetching creators:', error);
      else setCreators(data || []);
    }
    fetchCreators();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Creators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {creators.map((creator) => (
          <div key={creator.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
              {creator.name?.charAt(0) || 'C'}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{creator.name}</h4>
              <p className="text-xs text-gray-500">@{creator.handle || 'creator'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}