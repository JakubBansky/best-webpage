<script setup>
import Identity from '@/components/Identity.vue';
</script>

<template>
    <div class="m-10">
        <h1 class="text-3xl text-center text-gray-800 font-bold m-5">
            International BEST
        </h1>
        <div class="flex">
            <div class="w-8/12">
                <h1>O BEST-e</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras fusce dolor sed erat aliquet nunc erat. Ut
                    conubia
                    senectus pretium consequat ad felis neque. Finibus taciti imperdiet consectetur at arcu senectus.
                    Quam
                    faucibus proin magna dignissim penatibus, laoreet augue. Aliquet molestie odio tortor lorem, justo
                    montes
                    tortor sociosqu? Risus elit bibendum; tempus risus nec aliquam mauris porta.

                    Iaculis purus montes cursus curabitur egestas sagittis tempus hac. Congue cubilia malesuada a; fusce
                    senectus odio. Praesent tempor mollis vivamus consequat tellus aptent odio. Nam vel nostra
                    ultricies;
                    fusce
                    velit purus tincidunt ante. Nulla parturient magna mi pharetra, potenti tortor. Praesent ante
                    ultricies
                    ornare id nec dictum molestie leo. Ex aliquam fringilla gravida accumsan; ex suspendisse platea
                    integer.
                    Euismod neque pretium nascetur cursus maximus suspendisse.
                </p>
            </div>
            <div class="w-3/12 flex justify-center items-center ">
                <img src="/favicon.png" alt="logo of best" class="max-w-60 w-11/12 ">
            </div>
        </div>
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
    </div>

</template>