<script setup>
import Identity from '@/components/Identity.vue';
</script>

<template>
    <div class="m-10">
        <h1 class="text-3xl text-center text-gray-800 font-bold m-5">
            International BEST
        </h1>
        <!-- About best -->
        <section class="flex max-md:flex-col max-md:items-center">
            <div class="w-8/12 max-md:w-11/12">
                <h1>O BEST-e</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras fusce dolor sed erat aliquet nunc erat. Ut
                    conubia
                    senectus pretium consequat ad felis neque. Finibus taciti imperdiet consectetur at arcu senectus.
                    Quam
                    faucibus proin magna dignissim penatibus, laoreet augue. Aliquet molestie odio tortor lorem, justo
                    montes
                    tortor sociosqu? Risus elit bibendum; tempus risus nec aliquam mauris porta.
                </p>
            </div>
            <div class="w-3/12 flex justify-center items-center ">
                <img src="/favicon.png" alt="logo of best" class="max-w-60 w-11/12 max-sm:w-20 ">
            </div>
        </section>

        <!-- Identity of best -->
        <section>
            <h1 class="text-center text-2xl font-semibold m-5">Identitita BEST-u</h1>
            <div class="flex max-sm:flex-col items-center">
                <Identity class="" icon="pi-bullseye" header="Vision - Empowered Diversity"
                    text="People understand and respect different cultures and societies. The environment of empowered diversity supports people in applying their full potential and acting responsibly.">
                </Identity>
                <Identity class="" icon="pi-check" header="Mission - Developing Students"
                    text="BEST helps students to achieve an international mindset, to reach a better understanding of cultures and societies and to develop the capacity to work in culturally diverse environments.">
                </Identity>
            </div>

        </section>

        <!-- Best spirit -->
        <section>
            <h1 class="text-center text-2xl font-semibold m-5">BEST spirit</h1>
            <div class="flex max-md:flex-col items-center">
                <Identity class="" icon="pi-face-smile" header="fun" text="">
                </Identity>
                <Identity class="" icon="pi-arrows-alt" header="flexibility" text="">
                </Identity>
                <Identity class="" icon="pi-user-plus" header="friendship" text="">
                </Identity>
                <Identity class="" icon="pi-check-circle" header="improvement" text="">
                </Identity>
                <Identity class="" icon="pi-comments" header="open-mindness" text="">
                </Identity>
            </div>
        </section>
        <!-- LBG's -->

        <section class="flex justify-center items-center max-md:flex-col max-md:items-center">
            <div class="w-5/12 max-md:w-11/12">
                <h1>Local BEST group - LBG</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras fusce dolor sed erat aliquet nunc
                    erat. Ut
                    conubia
                    senectus pretium consequat ad felis neque. Finibus taciti imperdiet consectetur at arcu
                    senectus.
                    Quam
                    faucibus proin magna dignissim penatibus, laoreet augue. Aliquet molestie odio tortor lorem,
                    justo
                    montes
                    tortor sociosqu? Risus elit bibendum; tempus risus nec aliquam mauris porta.
                </p>
            </div>
            <div class="w-6/12 flex justify-center items-center ">
                <img src="../assets/lbgs.png" alt="logo of best"
                    class="min-w-60 max-w-80 max-sm:w-20 bg-gray-800 rounded-sm m-2">
            </div>
        </section>
        <a href="https://www.best.eu.org/index.jsp"><h1 class="underline">Learn more about BEST</h1></a>
    </div>

</template>

<style>
section {
    margin-bottom: 5rem;
}

h1 {
    text-align: center;
    font-size: x-large;
    font-weight: bold;
    margin: 1.25rem;
    color: rgb(0, 0, 65);
}
</style>