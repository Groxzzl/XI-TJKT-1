import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

// Daftar semua siswa yang mungkin memiliki galeri foto
// Ini membantu kita tahu kunci apa saja yang harus diambil dari database
const studentKeys = [
    'danang', 'abdul', 'daffa', 'rafly', 'farrel', 'ryan', 'bagas', 'wahyu',
    'hafidz', 'fathur', 'fadhil', 'fatih', 'faras', 'fakhri', 'fauzan',
    'fannan', 'firdaus', 'irfan', 'ilham', 'daffarafi', 'rafi', 'rizky',
    'raihan', 'syahran', 'zaki', 'zhafran', 'maulana', 'mhafidz', 'mrizky',
    'nabil', 'najwan', 'naufal', 'neza', 'oscar', 'putra'
].map(name => `siswa_${name}`);

const galleryKeys = ['gallery_kegiatan'];

export default async function handler(request) {
  try {
    const allKeys = [...studentKeys, ...galleryKeys];
    
    // Mengambil semua data dari Vercel KV secara paralel untuk efisiensi
    const dataPromises = allKeys.map(key => kv.get(key));
    const results = await Promise.all(dataPromises);

    // Membuat objek response
    const responseData = {};
    allKeys.forEach((key, index) => {
      // Hanya tambahkan ke response jika ada data (tidak null atau kosong)
      if (results[index] && results[index].length > 0) {
        responseData[key] = results[index];
      }
    });

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate=30' // Cache selama 1 menit
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
