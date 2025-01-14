<template>
    <main class="relative bg-chatgpt-dark text-white h-screen w-full flex-1 overflow-auto transition-width">
        <div role="presentation" class="composer-parent flex h-full flex-col focus-visible:outline-0" tabindex="0">
            <div class="flex-1 overflow-hidden">
                <div class="h-full">
                    <div class="react-scroll-to-bottom--css-mzbec-79elbk h-full">
                        <div class="react-scroll-to-bottom--css-mzbec-1n7m0yu">
                            <div class="flex flex-col text-sm md:pb-9" style="">
                                <NavbarComponent />
                                <div v-for="message in messages" :key="message.id"
                                    class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group">
                                    <article v-if="message.actor === 'Human'"
                                        class="w-full text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
                                        dir="auto" data-testid="conversation-turn-2" data-scroll-anchor="false">
                                        <h5 class="sr-only">You said:</h5>
                                        <div class="m-auto text-base py-[18px] px-3 w-full md:px-5 lg:px-4 xl:px-5">
                                            <div
                                                class="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                                                <div
                                                    class="group/conversation-turn relative flex w-full min-w-0 flex-col">
                                                    <div class="flex-col gap-1 md:gap-3">
                                                        <div class="flex max-w-full flex-col flex-grow">
                                                            <div data-message-author-role="Human"
                                                                data-message-id="aaa2600f-c9c4-470d-a306-2df49a33a70b"
                                                                dir="auto"
                                                                class="min-h-8 text-message flex w-full gap-2 whitespace-normal items-center">
                                                                <div
                                                                    class="flex w-full flex-col gap-1 empty:hidden items-end rtl:items-start">
                                                                    <div
                                                                        class="relative max-w-[70%] rounded-3xl px-5 py-2.5 bg-[#141414] dark:bg-token-main-surface-secondary">
                                                                        <div class="whitespace-pre-wrap">
                                                                            {{ message.message }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Icon name="material-symbols:account-circle"
                                                                    style="font-size: 30px;"
                                                                    class="text-token-text-primary" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article v-else
                                        class="w-full text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
                                        dir="auto" data-testid="conversation-turn-3" data-scroll-anchor="true">
                                        <h6 class="sr-only">ChatGPT said:</h6>
                                        <div class="m-auto text-base py-[18px] px-3 w-full md:px-5 lg:px-4 xl:px-5">
                                            <div
                                                class="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl">
                                                <div class="flex-shrink-0 flex flex-col relative items-end">
                                                    <div>
                                                        <div class="pt-0">
                                                            <div
                                                                class="gizmo-bot-avatar flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                                                                <div
                                                                    class="relative p-1 rounded-sm flex items-center justify-center bg-token-main-surface-primary text-token-text-primary h-8 w-8">
                                                                    <Icon name="tabler:brand-openai"
                                                                        style="font-size:30px;"
                                                                        class="text-token-text-primary" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn">
                                                    <div class="flex-col gap-1 md:gap-3">
                                                        <div class="flex max-w-full flex-col flex-grow">
                                                            <div data-message-author-role="assistant"
                                                                data-message-id="b09ad51b-c9e0-4faf-983f-daa9f12d3ec0"
                                                                dir="auto"
                                                                class="min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&amp;]:mt-5"
                                                                data-message-model-slug="gpt-4o">
                                                                <div
                                                                    class="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                                                                    <div
                                                                        class="markdown prose w-full break-words dark:prose-invert dark">
                                                                        <p>{{ message.message }}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="pr-2 lg:pr-0"></div>
                                                        <div class="mt-3 w-full empty:hidden">
                                                            <div class="text-center"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
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
                                        placeholder="Message ChatGPT" @keypress.enter.exact.prevent="submitMessage"
                                        @keydown.shift.enter="moveToNextLine" v-model="message"></textarea>
                                </div>
                                <button @click.prevent="submitMessage" aria-label="Send prompt" type="submit"
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
                            <div>
                                ChatGPT can make mistakes but you can't. Trust yourself.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("");

const messages = ref([
    {
        actor: "AI",
        message: "Hey hey, how can I help you?",
    },
    {
        actor: "Human",
        message: "Please tell me a joke.",
    },
    {
        actor: "AI",
        message: "What color is a Carrot?",
    },
]);

const submitMessage = () => {
    if (message.value == "") return;
    messages.value.push({ actor: "Human", message: message.value });
    message.value = "";
};

const moveToNextLine = () => {
    message.value += "\n"; 
};
</script>
