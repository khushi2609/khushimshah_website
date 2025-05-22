import Image from 'next/image';
import Link from 'next/link';

export default function TheSmilingJugglerBlogPost() {
  return (
    <main className="min-h-screen bg-background px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-accent hover:text-primary mb-8 group">
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-accent mb-6">
            The Smiling Juggler: Balancing Post-Grad Pressure and Family Fun
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <time>May 2025</time>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
          <i> Hi all!</i> <br></br><br></br>
          <p className="text-gray-800 mb-6">
          As I unpack my bag, overflowing with laundry and a phone gallery bursting with sun-drenched memories, I want to reflect on the wild ride these the last few weeks have been. Where does the time go? <br></br>
          One minute you&apos;re tossing your cap in the air, feeling like you could conquer the world, and the next you&apos;re staring down the barrel of “What now?” with a side of “Please hire me!” This particular brand of joyful panic is one I am currently navigating, and I figured I&apos;d share a few laughs, a few tears, and definitely a few lessons learned.
          </p>
          <h6 className="text-2xl font-semibold text-accent mb-6">Cap and Gown, Meet Existential Dread</h6>
          <p className="text-gray-800 mb-6">
            Graduating with a Master&apos;s degree feels like hitting a massive &quot;fast forward&quot; button on your life. Suddenly, the academic bubble bursts, and you&apos;re launched into the real world, armed with a fancy piece of paper and a brain full of theories, but perhaps a job offer nowhere in sight. The initial high of completing something so significant quickly morphs into a low hum of anxiety. Every job board feels like a labyrinth of rejection, and every email notification sends a jolt of hope (and dread) through your system.
          </p>
          <h6 className="text-2xl font-semibold text-accent mb-6">The Great Family Escape…with a Side of Job Search Jitters</h6>
          <p className="text-gray-800 mb-6">
          Just as the job search anxiety was reaching peak performance, my family, bless their well-meaning hearts, decided it was time for a much-needed trip. &quot;A break will do you good!&quot; they said. And they were right, mostly. There&apos;s nothing quite like trying to enjoy a picturesque beach view while silently drafting cover letters in your head, or laughing at a silly family anecdote while a tiny voice whispers, &quot;Did you check LinkedIn in the last five minutes?&quot; <br></br>
          <br></br> You see, the worry is a sneaky little devil. It doesn&apos;t care if you&apos;re on a roller coaster or enjoying a delicious meal. It pops up at the most inconvenient times, reminding you of the ticking clock, the dwindling savings, and the ever-present question, &quot;Am I doing enough?&quot; <br></br>
          <br></br>And so, you master the art of the smile. The &quot;everything is fine, I&apos;m just enjoying this moment&quot; smile. You laugh a little louder, engage a little more, and try your absolute best not to let the undercurrent of panic show. Because, let&apos;s be honest, who wants to be that person who brings down the vacation vibe with their career woes? You try not to pass the worries to your family, who are just trying to celebrate your achievement and enjoy some quality time. It&apos;s a delicate dance, balancing genuine enjoyment with the constant mental to-do list of job applications and follow-ups.
        <br></br>
        </p>
        <h6 className="text-2xl font-semibold text-accent mb-6">Lessons Learned on the Road (and in the Job Search Trenches)</h6>
        But amidst the internal turmoil, something remarkable happens. You start to realize a few things:
       <br></br>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li className="mb-3">	<i><b>Breaks aren&apos;t a luxury, they&apos;re a necessity:</b></i> Even if your brain is screaming &quot;Work! Apply! Network!&quot;, taking a genuine break, even for a few days, can actually recharge your batteries and give you a fresh perspective. You might even come up with a brilliant new approach to your job search while staring at a waterfall.</li>
            <li className="mb-3">   <i><b>It&apos;s okay to not be okay (but let&apos;s try not to broadcast it 24/7): </b></i> While you might be internally spiraling, acknowledging your feelings without letting them consume every interaction is key. Vent to a trusted friend, journal, or scream into a pillow (been there, done that) – just pick your moments and your audience. </li>
            <li className="mb-3">   <i><b>Family is your anchor: </b></i> Even if they don&apos;t fully grasp the intensity of the job search, their presence, their love, and their insistence on &quot;fun&quot; can be incredibly grounding. They remind you that there&apos;s more to life than your next interview. </li>
            <li className="mb-3"> <i><b>This too shall pass: </b></i> I can&apos;t stress this enough.Every single person who has ever graduated has gone through some version of this. The anxiety is temporary, and the right opportunity will come along.</li>
        </ul>
        So, if you&apos;re out there, fresh out of your Master&apos;s, trying to juggle between a family trip and job applications or refreshing your email every 30 seconds, know this: You&apos;re not alone. It&apos;s a wild, sometimes unsettling, but ultimately a transformative journey (or at least I hope it is). Embrace the chaos, master the smile, and most importantly, remember to give yourself the well-deserved break you&apos;ve earned. Your future self (and your sanity) will thank you.
        </article>
      </div>
    </main>
  );
} 