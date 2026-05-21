<script>
	import favicon from '$lib/assets/favicon.svg';
	import image from '$lib/assets/11270.jpg'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

