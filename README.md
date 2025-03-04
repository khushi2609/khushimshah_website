# Interactive Cybersecurity Portfolio

A unique personal website featuring an interactive chatbot interface to showcase cybersecurity expertise, projects, and skills.

## Features

- 🤖 Interactive AI-like chat interface
- 🔒 Cybersecurity-focused design
- 📱 Fully responsive layout
- 🎨 Modern, dark-themed UI
- 💬 Pre-programmed conversation paths
- 📚 Resource sharing capabilities
- 📂 Portfolio showcase
- 📝 Blog integration

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- UUID

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Updating Content

1. Edit the chat prompts and responses in `src/data/chatData.ts`
2. Modify the bot persona in the same file
3. Update the avatar by replacing `public/avatar.svg`

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors can be adjusted in `tailwind.config.js`

### Adding New Features

1. Create new chat prompts in `src/data/chatData.ts`
2. Add corresponding response handlers in `src/components/Chat/ChatInterface.tsx`
3. Extend types as needed in `src/types/chat.ts`

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to your preferred hosting platform (Vercel recommended for Next.js)

## Customizing Content

### Personal Information

Update the following in `src/data/chatData.ts`:
- Contact information
- Project descriptions
- Skills and expertise
- Resource recommendations

### Blog Posts

Add your blog posts as markdown files in the `content/blog` directory (to be implemented)

## License

MIT License - Feel free to use this template for your own portfolio! 