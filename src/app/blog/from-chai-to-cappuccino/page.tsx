import Image from 'next/image';
import Link from 'next/link';

export default function ChaiToCappuccinoBlogPost() {
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
            From Chai to Cappuccino: My Hilarious, Heartwarming (and Slightly Tipsy) US Adventure So Far
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <time>April 2025</time>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>

          <p className="text-gray-800 mb-6">
          <i>Namaste, folks! </i>
          <br></br>
          You know, if you&apos;d told my 22-year-old self, packing a suitcase full of instant noodles and a vague idea of American stereotypes, that I&apos;d be writing this blog from my cozy studio in the US a year and a half later, I&apos;d probably have laughed and asked, &quot;But will I find good food there, also... does curfew time change?&quot; <br></br> <br></br>
Well, here I am, a 23-year-old international student from India, navigating the wild, wonderful, and sometimes downright weird American life. And let me tell you, it&apos;s been a rollercoaster fueled by chai, confusion, laughter, and a surprising amount of low-budget cocktails (house parties aren&apos;t as luxurious lol).
          </p>

          <p className="text-gray-800 mb-6">
          <b>Culture Shock: The Icy Edition</b> <br></br>
Let&apos;s start with the small stuff, shall we? Like the sheer volume of ice in every drink. I swear, I once ordered a &quot;small&quot; iced coffee and received a glacial monstrosity that gave me a brain freeze. After visiting India again, I realized that my tastebuds have been through a serious identity crisis. Was everything spicier there, or is everything too mild here? I guess we&apos;ll never know. 
<br></br>
Yet another shock? How early everyone wakes up! In India, &quot;morning&quot; is a flexible concept, especially in a house where you are the youngest child. However, here, people are jogging even before the sun yawns. It took me a while to adjust, but now, I kind of get the appeal of a sunrise walk (mostly because it means I can justify a bigger breakfast).
<br></br>
<br></br>  
<b>The Gift-Giving Glitch: A Lesson in Cultural Courtesy</b> <br></br>
Let me tell you about a cultural faux pas that still makes me cringe. It was my first time getting a gift from an American friend. I, being the well-mannered Indian kid I was raised to be, politely thanked them and said I&apos;d open them later. Back home, opening gifts in front of the giver is often seen as a bit… grabby, like you&apos;re only interested in the present itself. It&apos;s more respectful to express gratitude and open them in private.
<br></br>Well, you could have heard a pin drop here. My friend looked genuinely confused, they didn&apos;t say anything but probably felt disappointed. It was too late before I realized that the norm was different, but I learned very quickly that here, opening gifts in front of the giver is a common courtesy, a way to share joy and excitement. It&apos;s about expressing genuine appreciation and enjoying the moment together.
<br></br>
<br></br>
<b>Reality Checks: Adulting 101.5</b> <br></br>
Let&apos;s be real, adulting in a foreign country is like playing a video game on &quot;expert&quot; mode. Suddenly, I was responsible for everything: rent, bills, groceries, and figuring out how to do laundry without turning my white clothes pink (still a work in progress). There were days when I missed home so much that it felt like a physical ache. Days when I just wanted my mom&apos;s ginger tea and a hug. But then, something amazing happened.
<br></br><br></br>I found my people. A ragtag bunch of fellow international students who understood the struggle of pronouncing Oregano with an American accent and the joy of finding a decent Indian restaurant. We bonded over shared meals, the ‘Mujhe ghar jaana hai&apos; (I wanna go home), and the universal language of laughter. We became a family, a home away from home.
<br></br>
<div className="relative w-full h-[500px] my-6 rounded-lg overflow-hidden">
            <Image
              src="/blog/from-chai-to-cappucino/group_photo_caverns.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
</div>
<br></br>
<b>New Celebrations and Traditions</b> <br></br>
Let&apos;s talk about the absolute <i>necessity/fun</i> of celebrating both Indian and American festivals. It wasn&apos;t just about throwing parties; it was about creating anchors, about reminding ourselves of who we were while embracing where we were. In a land so different from home, these celebrations became vital lifelines.
<br></br><br></br>Diwali was more than just lights and sweets; it was a reclaiming of our identity. We transformed our apartment into a vibrant, pulsating heart of India. We needed the warmth of the diyas, the familiar scent of incense, the shared stories and laughter. It was a way to say, &quot;We are here, and we are celebrating our roots.&quot; The potluck wasn&apos;t just dinner; it was a communal act of love, each dish a piece of home brought to a foreign land. 
<br></br><br></br>Then came Halloween, literally the next night. And while it seemed like a stark contrast, it was just as important. It wasn&apos;t just a costume party; it was about embracing the new, about saying &quot;yes&quot; to the strange and wonderful world we were in. I went as &quot;Joy&quot; from Inside Out, sporting a bright yellow dress, a blue wig, and a perpetually wide, slightly manic grin. My goal? To make sure everyone was just as excited to look like a complete fool as I was. We decorated the apartment with fake spiders and spiderwebs and set up a spooky doll that laughed creepily every time someone walked past it, all of this only to dance to “Chaiyya Chaiyya” at night. 	
<div className="relative w-full h-[500px] my-6 rounded-lg overflow-hidden">
            <Image
              src="/blog/from-chai-to-cappucino/halloween.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
</div>
<br></br>The fusion of Diwali and Halloween wasn&apos;t a clash of cultures; it was a beautiful blend. These celebrations weren&apos;t just parties; they were acts of resilience, of building a new home within a new world. They were essential for our sanity, our happiness, and our sense of belonging.
<br></br>
<br></br>
And speaking of belonging, stepping outside my cultural comfort zone extended beyond just holidays and celebrations. It also meant exploring the world of American sports. Growing up, cricket was life. Here, it&apos;s... well, it&apos;s not. But that didn&apos;t stop me from diving headfirst into the world of American sports. Football? Loud, confusing, and surprisingly thrilling. Baseball? A slow burn that eventually became strangely captivating. And Ice-hockey? Now that&apos;s a spectacle! The sheer energy of a sports game is something else. The chants, the rivalries, the questionable snack choices (over-priced nachos, anyone?). It was a whole new world, and I found myself getting surprisingly invested, even if I still didn&apos;t fully understand all.
<br></br>
<div className="relative w-full h-[1000px] my-6 rounded-lg overflow-hidden">
            <Image
              src="/blog/from-chai-to-cappucino/sports.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
</div>
<br></br>
To sum it all up, yes, making a new land your home is tough, very tough. There are days when the homesickness hits like a tidal wave, when the cultural differences feel insurmountable, and when you just want a plate of your mom&apos;s cooking. But it becomes slightly easier when you find people around who motivate you and ground you, who give you reasons to go out there and try harder than you thought possible just so that you are able to celebrate every Halloween with them, every Diwali, and every random Tuesday with a shared plate of nachos and a bad movie. These people, my chosen family, have turned this foreign land into a place where I belong.
<br></br><br></br>And along the way, I&apos;ve learned to celebrate the small wins. The first time I successfully did laundry without turning anything pink? Celebrated with a dance party in my tiny apartment. The day I gave a presentation without stuttering? Celebrated with a giant slice of pie. The moment I finally understood a particularly obscure American sports reference? Celebrated with a triumphant fist pump and a round of high-fives with my friends.
<br></br><br></br>With my family here, we celebrated finding a decent Indian grocery store with a feast. We celebrated surviving midterms with a movie marathon and copious amounts of popcorn. We celebrated every birthday, every holiday, every little victory with laughter, food, and the sheer joy of being together. <b><i>We celebrated the small things because they were the building blocks of our new life, the tiny moments that turned a strange land into a home. And maybe, just maybe, that&apos;s the biggest win of all.</i></b>
<br></br>
<br></br>
<i>P.S. These photos are piece of my heart and I couldnt resist sharing them </i>
</p>
        </article>
      </div>
    </main>
  );
} 