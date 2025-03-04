'use client';

export default function Blog() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-accent mb-4">
              Blog
            </h1>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600">
                Our blog section is currently under development. Stay tuned for insightful articles about cybersecurity,
                digital forensics, and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 