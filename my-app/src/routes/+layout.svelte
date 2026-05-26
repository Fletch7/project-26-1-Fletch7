<script>
	import favicon from '$lib/assets/favicon.svg';
	import image from '$lib/assets/iss074e0603650~orig.jpg'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<img src={image} alt="ISS" />

{@render children()}

