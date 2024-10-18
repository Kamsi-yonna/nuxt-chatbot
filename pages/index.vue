<template>
    <main class="relative bg-chatgpt-dark text-white h-screen w-full flex-1 overflow-auto transition-width">
        <div role="presentation" class="composer-parent flex h-full flex-col focus-visible:outline-0" tabindex="0">
            <div class="flex-1 overflow-hidden">
                <div class="h-full">
                    <div class="react-scroll-to-bottom--css-mzbec-79elbk h-full">
                        <div class="react-scroll-to-bottom--css-mzbec-1n7m0yu">
                            <div class="flex flex-col text-sm md:pb-9" style="">
                                <NavbarComponent />
                                <UserMessageComponent />
                                <AIMessageComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
                <div>
                    <div class="m-auto text-base px-3 md:px-4 w-full lg:px-4 xl:px-5">
                        <div class="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                            <form class="w-full flex items-center gap-2 p-2 bg-[#f4f4f4] rounded-[26px]">
                                <div class="w-full max-w-full flex-1">
                                    <textarea
                                        class="w-full h-10 max-h-52 resize-none p-2 border-0 rounded-[26px] placeholder-gray-500 bg-transparent focus:outline-none text-chatgpt-dark"
                                        placeholder="Message ChatGPT" @keydown.enter.prevent="handleSubmit"
                                        @keydown.shift.enter="moveToNextLine" v-model="message"></textarea>
                                </div>
                                <button aria-label="Send prompt" type="submit"
                                    class="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white"
                                    :disabled="!message">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                                            fill="white"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div
                        class="relative text-white w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px]">
                        <div class="min-h-4">
                            <div>ChatGPT can make mistakes but you can't. Trust yourself.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref(''); // Reactive message variable

const handleSubmit = () => {
    console.log("Form submitted:", message.value); // Log the message to the console
    message.value = ''; // Clear the message after submission
};

const moveToNextLine = () => {
    message.value += '\n'; // Add a new line character
};
</script>