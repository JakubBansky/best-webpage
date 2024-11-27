<script setup>
	import Event from "@/components/Event.vue";
	import photo1 from "../assets/sRM_2024.jpg";
	import photo2 from "../assets/hoodie.jpg";
</script>

<template>
	<div class="grid grid-cols-2">
		<Event
			class="p-4"
			title="autumn recruitment"
			date="2024-11-19"
			description="Our autumn recruitment has successfully concluded, and we're 
      thrilled to welcome all the new members to our team! Stay tuned for upcoming 
      events, workshops, and opportunities to grow with us.
      For any questions or further information, feel free to reach out to us at 
      [your contact email]. Let's make this season impactful together!"
			mainPhoto="src/assets/sRM_2024.jpg"
			:photos="['src/assets/sRM_2024.jpg', 'src/assets/hoodie.jpg']" />
		<Event
			class="p-4"
			title="sRM"
			date="2024-10-27"
			description="BEST Bratislava recently hosted an inspiring Spring Regional Meeting, bringing together members from various chapters to collaborate, connect, and enhance our mission. This dynamic event was filled with workshops, discussions, and team-building activities designed to strengthen our local networks and empower our members to excel in their roles."
			mainPhoto="src/assets/sRM_2024.jpg"
			:photos="['src/assets/lbgs.png', 'src/assets/hoodie.jpg', 'src/assets/joinBB.png']" />
	</div>
</template>
