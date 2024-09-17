<script setup>
import WorkingGroup from '@/components/WorkingGroup.vue';
</script>

<template>
    <div class="w-11/12">
        <h1 class="text-center text-3xl text-gray-900 font-extrabold m-10">
            BEST Bratislava

        </h1>

        <p class="m-5">
            BEST Bratislava je študentská nezisková organizácia pôsobiacia na Slovenskej technickej univerzite v
            Bratislave.
            Vznikli sme pred 25 rokmi a odvtedy prinášame všetkým študentom STU doplnkové vzdelanie.
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi vestibulum lacinia vulputate semper curabitur non
            maximus. Primis nisl nullam iaculis phasellus dignissim nascetur nullam. Sed mattis semper faucibus
            suspendisse
            malesuada rutrum pellentesque commodo.
        </p>

        <h2 class="text-center text-gray-900 text-2xl font-semibold mt-10">
            Our working groups
        </h2>
        <WorkingGroup name="PR"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi vestibulum lacinia vulputate semper curabitur non maximus. Primis nisl nullam iaculis phasellus dignissim nascetur nullam. Sed mattis semper faucibus suspendisse malesuada rutrum pellentesque commodo."
            color="red-500"></WorkingGroup>
        <WorkingGroup name="CR"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Iaculis placerat venenatis varius blandit venenatis nascetur curabitur ullamcorper. Primis varius massa conubia pellentesque mauris interdum justo. Malesuada vehicula inceptos phasellus morbi sodales, dapibus dui vulputate?"
            color="green-500"></WorkingGroup>
        <WorkingGroup name="HR"
            text="Lorem ipsum odor amet, consectetuer adipiscing elit. Eros id purus semper metus blandit; placerat parturient. Magna ut dictum adipiscing nullam platea volutpat. Tincidunt enim condimentum interdum a nulla volutpat justo semper faucibus. Torquent erat magnis mus venenatis auctor maximus sapien sollicitudin. Duis vitae aliquam senectus per vel. Consequat libero per a adipiscing venenatis aliquam tempor. Quam dis nascetur ridiculus volutpat per. Laoreet tellus ut consectetur tristique facilisi habitant scelerisque."
            color="blue-500"></WorkingGroup>

    </div>
</template>