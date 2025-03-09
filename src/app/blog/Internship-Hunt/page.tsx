import Image from 'next/image';
import Link from 'next/link';

export default function InternshipHuntBlogPost() {
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
            My Summer Internship Hunt Experience: A Comedy of Errors (and Lessons Learned)
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <time>December 2023</time>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>

          <p className="text-gray-800 mb-6">
         <b><i>Hey everyone, grab a snack and settle in because I&apos;m about to spill the tea on my first summer in the good ol&apos; US of A as a fresh out of undergrad. </i></b> <br></br><br></br> Picture this: wide-eyed international student armed with a GPA that looked decent on paper and a burning desire to &quot;make it&quot; in the land of opportunity. My mission? To snag a killer summer internship that would catapult me to career stardom. <b><i>Spoiler alert: it didn&apos;t quite pan out that way.</i></b>
          </p>

          <p className="text-gray-800 mb-6">
            Let&apos;s just say my internship hunt was less &quot;glamorous montage&quot; and more &quot;slapstick comedy.&quot; I applied to everything – from tech giants to tiny startups. I even considered becoming a dog walker if it meant a paycheck (okay, maybe not, but you get the idea).
          </p>

          <p className="text-gray-800 mb-6">
            The interviews? Oh boy, the interviews. I&apos;d log in, trying to project this image of a confident, capable young professional, but inside, I was a jittery mess. I knew my stuff, technically, but presenting it? &quot;Selling myself?&quot; That was a whole different ball game. I&apos;d fumble through answers, my voice cracking, and my carefully rehearsed talking points vanishing into thin air. It was like trying to perform a complex magic trick while wearing oven mitts.
          </p>

          <p className="text-gray-800 mb-6">
          I remember one interview where I was asked about a project I&apos;d done. I started explaining, got lost in the words, and ended up rambling about a completely unrelated meme I&apos;d seen that morning. <i>Yeah, not my finest moment.</i>
          </p>
          <p className="text-gray-800 mb-6">
            The rejections started rolling in, each email feeling like a tiny stab in the back. &quot;We regret to inform you...&quot; became the soundtrack of my summer. I&apos;d wallow for a bit, indulge in some comfort food (mostly ice-cream), and then reluctantly dust myself off and apply to more places. It was a vicious cycle.
          </p>

          <p className="text-gray-800 mb-6">
            What did I learn? A whole lot, actually. And looking back, I wish I&apos;d done a few things differently:
          </p>


          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li className="mb-3">
              <strong>Confidence is Key (Duh):</strong> I spent too much time worrying about what I didn&apos;t know instead of highlighting what I did. Practice, practice, practice! Rehearse answers, record yourself, and get feedback from anyone who&apos;ll listen.
            </li>
            <li className="mb-3">
              <strong>Control only the controllables:</strong> I spent way too much time worrying about things I couldn&apos;t change – the economy, the competition, the interviewer&apos;s mood. Instead, I should have focused on what I could control: my resume, my interview skills, and my attitude.
            </li>
            <li className="mb-3">
              <strong>Patience, Grasshopper:</strong> This is the hardest one for me. I&apos;m naturally impatient, and the constant rejections made me feel like I was going nowhere. But job hunting is a marathon, not a sprint. You have to keep pushing, even when you feel like giving up.
            </li>
          </ul>
          <p className="text-gray-800 mb-6">
          Alright, let&apos;s inject some real talk into this blog post, shall we? Because let&apos;s be honest, we all have a story, and owning it is way more powerful than pretending it doesn&apos;t exist. So, instead of just saying &quot;networking is important&quot; let&apos;s talk about something deeper: <b><i>owning your story and being proud of it.</i></b> Look, I&apos;m not going to lie. I&apos;m an international student at a pretty swanky university. So yes, I&apos;m privileged, and for a while, that made me feel…weird. Like I had to downplay my background to seem more &quot;relatable&quot; or &quot;hardworking.&quot; I&apos;d try to avoid talking about where I came from, or how I got here, because I didn&apos;t want people to think I had it easy.
          <br></br>But here&apos;s the thing: everyone has a story. Some people have faced incredible hardships, while others have had more opportunities. And guess what? That&apos;s okay.
            Instead of hiding my privilege, I realized I needed to own it. Not in a bragging way, but in a way that acknowledged the opportunities I&apos;ve been given and expressed genuine gratitude.
          </p>

          <p className="text-gray-800 mb-6">
            So here&apos;s what I learned, and what I now actively practice:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li className="mb-3">
              <strong>Embracing Gratitude:</strong> I consciously cultivate thankfulness for the opportunities I am presented with, and this has helped me focus on the silver lining of any cloudy day. 
            </li>
            <li className="mb-3">
              <strong>Leveraging My Platform: </strong> I seek out ways to use my resources and skills to create a rather positive impact, for example, writing this exact blog to potentially reach out to people who are somehow in the same boat as myself.
            </li>
            <li className="mb-3">
              <strong>Prioritizing Authenticity: </strong> I strive to be genuinely myself, acknowledging my background and owning my choices without worrying about failing as a consequence. 
            </li>
            <li className="mb-3">
              <strong>Valuing My Unique Narrative: </strong> Now I recognize that my story with all its twists and turns, is a valuable part of who I am today. 
            </li>
          </ul>

          <p className="text-gray-800 mb-6">
          I wish I understood this during my internship hunt, I spent so much time trying to fit into a mold, trying to be what I thought companies wanted, that I forgot to be myself.
Now, when I interview for early career jobs, I talk about my background openly. I acknowledge my privilege, but I also emphasize my drive, my passion, and my commitment to learning. I talk about the things I&apos;ve done, the challenges I&apos;ve overcome, and the goals I&apos;ve set for myself. And you know what? It works. People respond to authenticity. They appreciate honesty and vulnerability.
          <br></br>But, even with my initial internship woes, the tide eventually turned, and it wasn&apos;t just luck; it was a shift in my approach. After those initial rejections, I realized I needed to be even more strategic. Along with applying to every large corporation, I started researching smaller, growing startups. I focused on companies where I could see myself making a real impact, companies that valued versatility. More importantly, I began practicing my interview skills relentlessly, sought feedback from friends, and even recorded myself to identify areas for improvement. This focused effort, combined with a willingness to step outside my comfort zone and embrace opportunities in smaller companies, led me to Concepta Innovation. At Concepta, I quickly learned that &quot;wearing different hats&quot; wasn&apos;t just a cliché; it was a daily reality. One day, I&apos;d be brainstorming marketing strategies; the next, I&apos;d be diving into data analysis, and then I&apos;d be helping troubleshoot a software bug. My manager at Concepta was instrumental in making it a truly valuable experience. They didn&apos;t just see me as an extra pair of hands; they invested in my learning, ensuring I was exposed to various aspects of my field and actively sought to broaden my understanding. They prioritized my growth, making sure I benefitted from the internship as much as they benefitted from my contributions. It was a refreshing change of pace, and it solidified my understanding that finding the right environment and the right manager is paramount. 
          <br></br> <b><i>The key takeaway for me was to move from a scattered approach to a targeted one, to prioritize learning and growth over prestige, and to actively refine my skills and presentation. It wasn&apos;t just about &quot;getting an internship&quot; it was about finding the right fit and demonstrating my values.</i></b>
          </p>

          <p className="text-gray-800 mb-6">
          Fast forward to today, and I&apos;m focusing on early career jobs. I&apos;m still learning, still growing, and still occasionally having those &quot;oh-my-gosh-did-I-really-say-that?&quot; moments. But I&apos;m also more confident, more resilient, and more grateful for the lessons I learned from my first summer when I had the guilt of not having anything to do.
          Every rejection, while it stung, taught me something valuable. It showed me where I needed to improve and gave me the motivation to keep going. I&apos;m still working on my patience (it&apos;s a daily struggle), but I&apos;m learning to appreciate the journey.
          </p>

          <p className="text-gray-800 mb-6"><i>
            So, to all the fellow fresh grads out there, especially the international ones, who are navigating the crazy world of job hunting: you&apos;re not alone. Embrace the chaos, learn from your mistakes, and remember to laugh along the way. And to anyone out there who&apos;s feeling insecure about their background, remember this: your story is your superpower. Own it, be proud of it, and use it to make a positive impact. And yes, please be thankful for your opportunities.
            More importantly, remember that you are capable, and you will find your place. And if you ever see me at a career fair, come say hi, and we can laugh about our internship fails together.
          </i></p>
          




        </article>
      </div>
    </main>
  );
}
