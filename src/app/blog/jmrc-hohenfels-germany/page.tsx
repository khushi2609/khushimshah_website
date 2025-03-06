import Link from 'next/link';

export default function JMRCBlogPost() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blogs Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-accent hover:text-primary mb-8 group"
        >
          <svg 
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Blogs
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-accent mb-6">
            Exploring Military Innovations: My Trip to JMRC in Hohenfels, Germany
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <time>December 2023</time>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>

          <p className="text-gray-800 mb-6">
            As part of our Lean Innovation Lab class project, I had the incredible opportunity to embark on a field trip to the Joint Multinational Readiness Center (JMRC) in Hohenfels, Germany. This experience not only provided firsthand insights into military operations but also connected theoretical knowledge with practical applications in a way that textbooks simply can&apos;t.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
            Day 1: Arrival and Settling In
          </h2>
          <p className="text-gray-800 mb-6">
            Our journey began on November 18, where my teammates—Tanner Balluf, Cooper Zhu—and I were met at Munich International Airport by SSG Aaron Velenchenko. Despite some flight delays, they managed to keep our spirits high and ensured that we were all settled in comfortably as we made our way to Hohenfels. The anticipation of what lay ahead filled the air with excitement.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
            Day 2: Engaging with Real-World Military Operations
          </h2>
          <p className="text-gray-800 mb-6">
            On November 19, we ventured to the Distributed Command Training Center (DCTC) in Poland, navigating through challenging weather conditions that only added to the authenticity of the military experience. Once there, we had the privilege to engage with military leaders and dive into advanced simulator exercises. This hands-on training emphasized the importance of crew dynamics, providing a glimpse into the teamwork and communication essential for successful military operations. One highlight was our introduction to an Abrams tank, which, despite being non-operational, ignited a newfound interest in armored vehicles among our team.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
            Day 3: Understanding Military Strategies
          </h2>
          <p className="text-gray-800 mb-6">
            The following day was particularly enlightening as we prepared for engagements with D Company (1-4 IN) and toured Uebungsdorf. Observing a breach exercise firsthand was unforgettable, and it was invaluable to participate in a Q&A session that deepened our understanding of the trials and tribulations of military training. The insights we gained that day showcased the complexities of planning and executing military strategies, an area we had only touched upon in class discussions.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
            Day 4: Interviews and Technological Advancements
          </h2>
          <p className="text-gray-800 mb-6">
            On our final day, we interviewed SSG Mayor, focusing on knowledge gaps at the crew level. This discussion reiterated the concept of continuous learning and adaptability—crucial for success in any military setting. We also received a briefing from the Warhog TAF regarding unit tracking systems, which equipped us with knowledge about contemporary technological solutions. Rounding out our educational experience was a fascinating demonstration of thermal imaging technology by the Falcon Team, highlighting the ongoing innovations that shape military operations today.
          </p>

          <h2 className="text-2xl font-bold text-accent mt-8 mb-4">
            Reflection: A Transformative Team Experience
          </h2>
          <p className="text-gray-800 mb-6">
            Throughout this trip, the support provided by SFC David and SSG Aaron was commendable. Their adaptability and attentiveness allowed us to fully immerse ourselves in the educational opportunities presented at Hohenfels. Engaging with military leaders and participating in various exercises reinforced the importance of collaboration and clear communication—lessons that are vital not just in the military but in any team-oriented environment.
          </p>

          <p className="text-gray-800 mb-6">
            Overall, this trip was a transformative experience. It enriched my understanding of military operations through experiential learning, expert interactions, and a unique perspective on the continuous drive for innovation within the armed forces. The knowledge and insights gained from this journey are ones I will carry forward, and I feel grateful for the chance to learn from such dedicated professionals.
          </p>

          <hr className="my-8" />

          <p className="text-gray-800 italic">
            This experience left us inspired and eager to explore how the principles of lean innovation can be applied not only in the context of military operations but also in diverse fields beyond. Looking forward to future explorations!
          </p>
        </article>
      </div>
    </main>
  );
} 