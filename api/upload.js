import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // 1. Dapatkan key dari URL query parameter (contoh: ?key=gallery_kegiatan)
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (!key) {
    return new Response(JSON.stringify({ error: 'Key tidak ditemukan.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 2. Pastikan ada file yang di-upload
  if (!request.body) {
     return new Response(JSON.stringify({ error: 'Tidak ada file yang di-upload.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // 3. Upload file ke Vercel Blob
    // Nama file dibuat unik dengan tanggal untuk menghindari penimpaan
    const filename = `${key}_${Date.now()}.jpg`;
    const blob = await put(filename, request.body, {
      access: 'public',
    });

    // 4. Dapatkan daftar URL yang sudah ada dari Vercel KV
    let urls = await kv.get(key) || [];
    
    // 5. Tambahkan URL baru dari blob yang baru di-upload
    urls.push(blob.url);

    // 6. Simpan kembali daftar URL yang sudah diperbarui ke Vercel KV
    await kv.set(key, urls);

    // 7. Kirim respon sukses kembali ke halaman admin
    return new Response(JSON.stringify(blob), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
