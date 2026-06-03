<script>
	let { children } = $props();

</script>

<header class="title">
	General Knowledge quiz
</header>



{@render children()}

<style>
	/*Set font and background colour for whole website. Can be overwritten by locally set parameters.*/
	:global(body) {
		font-family: Arial, Helvetica, sans-serif;
		background: #AAB2FF;
	}
	
	:global(text) {
		font-family:Arial, Helvetica, sans-serif;
		color: pink;
	}
</style>