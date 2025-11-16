export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to My First Project
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A Next.js application ready to deploy on Vercel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-2 text-blue-600">⚡ Fast</h2>
              <p className="text-gray-600">
                Built with Next.js 14 for optimal performance and speed
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-2 text-indigo-600">🎨 Styled</h2>
              <p className="text-gray-600">
                Pre-configured with Tailwind CSS for beautiful designs
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-2 text-purple-600">🚀 Deploy</h2>
              <p className="text-gray-600">
                Ready to deploy to Vercel with zero configuration
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Deploy to Vercel
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
