// app/page.tsx
import Image from "next/image";
import imgProfile from '../public/img/12543216_1152688338076544_2136644828_a (1).jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaGlobe, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto shadow-lg grid grid-cols-1 md:grid-cols-3 bg-white overflow-hidden">
        
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white p-6 flex flex-col items-center">
          <Image
            src={imgProfile}
            alt="Oki Pralambang"
            width={200}
            height={200}
            className="rounded-full border-4 border-yellow-400"
          />
          <h1 className="mt-4 font-bold text-xl text-center">Oki Pralambang</h1>
          <p className="text-sm text-gray-300">Programmer Backend</p>

          <div className="w-full mt-6">
            <h2 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z' /></svg></span>
              Data Diri
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-2 text-black">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-yellow-500 text-lg">🎂</span>
                <span>Tangerang, 28 Okt 1983</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-yellow-500 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 5V9M19 5H15M19 5l-6 6" />
                  </svg>
                </span>
                <span>Laki-Laki</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-yellow-500 text-lg">💍</span>
                <span>Menikah</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-yellow-500 text-lg">🌏</span>
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <h2 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 10.5a8.38 8.38 0 01-.9 3.8c-.5 1-1.2 2-2.1 2.7-1.2 1-2.7 1.5-4.2 1.5s-3-.5-4.2-1.5c-.9-.7-1.6-1.7-2.1-2.7A8.38 8.38 0 013 10.5C3 6.4 7.03 3 12 3s9 3.4 9 7.5z' /></svg></span>
              Kontak
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-3 font-semibold">
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-yellow-200 text-yellow-800 rounded-full p-1"><FaPhoneAlt /></span>
                <span className="text-black text-xs">087809496655</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-yellow-200 text-yellow-800 rounded-full p-1"><FaEnvelope /></span>
                <span className="text-black text-xs">okipralambang@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-yellow-200 text-yellow-800 rounded-full p-1"><FaHome /></span>
                <span className="text-black text-xs">Perumahan Total Persada Tangerang</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/okipralambang" target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full p-2 transition"><FaGithub /></a>
                <a href="https://linkedin.com/in/okipralambang" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2 transition"><FaLinkedin /></a>
                <a href="https://instagram.com/okipralambang" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full p-2 transition"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="w-full mt-6">
            <h2 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 21l3-1.5L15 21l-.75-4M9 13.5V7.5A2.25 2.25 0 0111.25 5.25h1.5A2.25 2.25 0 0115 7.5v6M9 13.5h6' /></svg></span>
              Project Web
            </h2>
            <div className="grid gap-3">
              <a href="https://sekaihome.co.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow hover:bg-yellow-100 transition">
                <span className="bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs font-bold">sekaikhome.co.id</span>
                <span className="text-xs text-gray-600">Website Company Profile</span>
              </a>
              <a href="https://benihbaik.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow hover:bg-yellow-100 transition">
                <span className="bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs font-bold">benihbaik.com</span>
                <span className="text-xs text-gray-600">Website Platform Crowdfunding</span>
              </a>
              <a href="https://m.benihbaik.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow hover:bg-yellow-100 transition">
                <span className="bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs font-bold">m.benihbaik.com</span>
                <span className="text-xs text-gray-600">Mobile Platform Crowdfunding</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="col-span-2 p-6">
          {/* Tentang Saya */}
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-yellow-400 pb-1 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Tentang Saya
            </h2>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded shadow flex flex-col sm:flex-row items-center gap-4">
              <span className="text-yellow-500 text-4xl hidden sm:block">👨‍💻</span>
              <div className="text-gray-700 text-sm text-justify">
                <span className="block text-lg font-bold text-yellow-700 mb-1 animate-pulse">Profesional Programmer</span>
                Saya merupakan seorang profesional dalam bidang bahasa pemrograman <span className="font-semibold text-yellow-700">PHP</span> dan <span className="font-semibold text-yellow-700">Golang</span>, telah bekerja selama lebih dari <span className="font-semibold text-yellow-700">10 tahun</span> di industri IT. Saya memiliki tanggung jawab tinggi, mampu bekerjasama dalam tim, dan selalu bersemangat mempelajari teknologi baru untuk menghasilkan solusi terbaik.
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-yellow-400 pb-1 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z' /></svg></span>
              Pendidikan
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow">
                <span className="text-yellow-500 mr-3 text-2xl">🎓</span>
                <div>
                  <div className="font-semibold">S1 Nusa Mandiri</div>
                  <div className="text-xs text-gray-500">2013 – 2014</div>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow">
                <span className="text-yellow-500 mr-3 text-2xl">🎓</span>
                <div>
                  <div className="font-semibold">D3 Bina Sarana Informatika</div>
                  <div className="text-xs text-gray-500">2009 – 2012</div>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow">
                <span className="text-yellow-500 mr-3 text-2xl">🏫</span>
                <div>
                  <div className="font-semibold">SMU PIRI 1 Yogyakarta</div>
                  <div className="text-xs text-gray-500">1998 – 2001</div>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow">
                <span className="text-yellow-500 mr-3 text-2xl">🏫</span>
                <div>
                  <div className="font-semibold">SMP Negeri 5 Tangerang</div>
                  <div className="text-xs text-gray-500">1995 – 1998</div>
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded shadow">
                <span className="text-yellow-500 mr-3 text-2xl">🏫</span>
                <div>
                  <div className="font-semibold">SDN Jurumudi II</div>
                  <div className="text-xs text-gray-500">1989 – 1995</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-yellow-400 pb-1 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17a2.25 2.25 0 002.25 2.25h0A2.25 2.25 0 0014.25 17m-8.25 0V7.5A2.25 2.25 0 018.25 5.25h7.5A2.25 2.25 0 0118 7.5V17m-12 0h12" />
                </svg>
              </span>
              Pengalaman Kerja
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">🏢</span>
                  <span className="font-bold text-gray-800">PT. Tritama Prima Lestari</span>
                </div>
                <div className="flex flex-row gap-2 mb-1">
                  <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full w-max font-semibold">Admin Finance</span>
                  
                  <span className="inline-block text-xs px-2 py-1 rounded-full w-max">2013-2014</span>
                </div>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Memantau barang masuk</li>
                  <li>Membuat laporan penjualan perkuartal</li>
                  <li>Memimpin pelaksanaan pembangunan</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">📡</span>
                  <span className="font-bold text-gray-800">PT. Indonesia Media Televisi (BIGTV)</span>
                </div>
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full w-max font-semibold mb-1">Verifikator</span>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Verifikator</li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">💻</span>
                  <span className="font-bold text-gray-800">PT. Ximpl Multi Solution</span>
                </div>
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full w-max font-semibold mb-1">Web Programmer</span>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Membuat website dan Content Management System (CMS) admin</li>
                </ul>
              </div>
              {/* Card 4 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">💻</span>
                  <span className="font-bold text-gray-800">Yayasan Benihbaik.com</span>
                </div>
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full w-max font-semibold mb-1">Backend Developer</span>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Membuat backend API website</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kemampuan */}
          <div>
            <h2 className="text-xl font-bold border-b-2 border-yellow-400 pb-1 flex items-center gap-2">
              <span className="inline-block bg-yellow-400 text-white rounded-full p-1 mr-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 01-8 0M12 17v-1m0 0a4 4 0 01-4-4V7a4 4 0 018 0v5a4 4 0 01-4 4z' /></svg></span>
              Kemampuan
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">💻</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Bahasa Pemrograman</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">PHP</span>
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">Golang</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">🗄️</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Database</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">MySQL</span>
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">PostgreSQL</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">🧩</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Framework</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">Laravel</span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow flex items-center gap-4">
                <span className="text-yellow-500 text-2xl">🎨</span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">CSS & Tools</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">CSS</span>
                    <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
