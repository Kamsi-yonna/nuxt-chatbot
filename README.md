# NUXT AI CHATBOT

I'm currently building a bigger project that would require me to use AI. This small task, however, is a simple AI-powered query assistant built with Nuxt 3, TypeScript, and Tailwind CSS. Users can input a prompt or question, and together.xyz will return a generated response.  
It's a minimal yet functional demonstration of integrating together.xyz's API into a Nuxt application, warming me up for the bigger picture. 😉

I don't expect anyone to have to clone, but if so:

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kamsi-yonna/nuxt-chatbot.git
   cd nuxt-ai-chatbot
   ```

2. **Generate your own together.xyz API key:**
   - Go to the [together.xyz website](https://api.together.xyz/) and sign up or log in.
   - Navigate to the dashboard section to get your API key.

3. **Set up the environment:**
   - Create a `.env` file in the root of your project.
   - Add your together.xyz API key to the `.env` file:
     ```bash
     NUXT_TOGETHER_API_KEY_API_KEY=your-api-key-here
     ```

4. **Install the dependencies:**
   ```bash
   # pnpm
   pnpm install

   # npm
   npm install

   # yarn
   yarn install

   # bun
   bun install
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Now you can start using the AI Query Assistant!