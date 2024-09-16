<script setup>
import BoardMember from '../components/BoardMember.vue';
</script>

Kopírovať kód
<template>
    <div class="flex items-center justify-center flex-col py-10">
        <h1 class="text-5xl font-bold m-4 text-gray-800">Board</h1>
        <img src="../assets/tmp-board_picture.jpg" class="blur-2xl w-6/12 mb-10 rounded-sm shadow-lg"
            alt="Picture of our board" />

        <div class="text-center w-11/12 my-8 relative">
            <h1 class=" text-3xl font-extrabold inline-block relative px-4 z-20 text-gray-800" style="background-color:  rgb(215, 197, 32);">
                Name Placeholder
            </h1>
            <hr class="absolute  inset-x-0 top-1/2 border-t-2 border-gray-300 z-10" />
        </div>

        <div class="grid grid-cols-1  md:grid-cols-2  gap-10">
            <BoardMember image="/kiko.png" name="Kristian Kapec" position="President" mail="k.k@best.com" />
            <BoardMember image="/kiko.png" name="Šimon Koreň" position="Secretary" mail="k.k@best.com" />
        </div>
        <div class="grid grid-cols-1  md:grid-cols-3  gap-10">
            <BoardMember image="/kiko.png" name="Andrej Bitarovec" position="VP4CR" mail="k.k@best.com" />
            <BoardMember image="/kiko.png" name="Sofia Dobranská" position="VP4HR" mail="k.k@best.com" />
            <BoardMember image="/kiko.png" name="Alexandra Rybianska" position="VP4PR" mail="k.k@best.com" />
        </div>
    </div>
</template>
