<script setup>
	import Event from "@/components/Event.vue";
	import { t } from "@/i18n";
</script>

<template>
	<div class="flex flex-col items-center justify-center">
		<p class="w-10/12 text-xl p-4">
			{{ t("Event.info") }}
		</p>
		<div class="flex flex-col items-center justify-center gap-4">
			<Event
				class="p-4"
				title="BEST Course"
				description="A BEST Course is a short-term international learning event organized by the Board of European Students of Technology (BEST), where students of technology can broaden their knowledge in a specific field, develop soft skills, or apply engineering concepts in practice. These courses are taught by professionals or university staff and often include company visits, case studies, and hands-on tasks. At the end of the course, participants take an exam, and in many cases, they can earn ECTS credits. There are three types of BEST Courses: on Technology, on Career Related Skills, and on Applied Engineering."
				:photos="['/best-webpage/images/sRM_2024.jpg', '/best-webpage/images/group2.JPG']"
				position="left" />
			<Event
				class="p-4"
				title="Skill it all"
				description="Skill It All je jednodňová akcia priamo v Bratislave, kde si môžeš vyskúšať rôzne workshopy na zlepšenie svojich soft skills – napríklad ako lepšie prezentovať, zvládať stres, alebo komunikovať v tíme. Je to uvoľnené, zábavné a zároveň užitočné. Stretneš tam kopec nových ľudí, naučíš sa niečo praktické a ešte aj získaš certifikát. Ideálny spôsob, ako stráviť deň trochu inak než len v škole."
				:photos="['/best-webpage/images/skillItAll.jpg','/best-webpage/images/skillItAll2.jpg', '/best-webpage/images/skillItAll3.jpg']"
				position="right" />

			<Event
				class="p-4"
				title="Recruitment"
				description="Okrem našich workshopov a eventov počas roka zvykneme dvakrát ročne robiť aj nábor nových členov. Ak máš chuť skúsiť niečo nové, spoznať kopu super ľudí, zlepšiť svoje zručnosti a zažiť BEST zážitky (doslova), sleduj naše sociálne siete a neváhaj sa pridať! Možno práve ty budeš ďalší, kto s nami bude tvoriť skvelé veci."
				:photos="['../assets/lbgs.png', '../assets/hoodie.jpg', '../assets/joinBB.png']"
				position="left" />
			<Event
				class="p-4"
				title="Internal events"
				description="description TODO"
				:photos="['../assets/lbgs.png', '../assets/hoodie.jpg', '../assets/joinBB.png']"
				position="right" />
		</div>
	</div>
</template>
