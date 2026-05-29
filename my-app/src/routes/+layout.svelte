<script>
	let { children } = $props();

</script>

<header class="title">
	General Knowledge quiz
</header>



{@render children()}

<nav>
	<a href="/">Home</a>
	<a href="/quiz">Quiz</a>
</nav>

<footer class="base">
	This is the footer
</footer>

<style>
	
	.title, .base {
		color: red;
	}

	/*Set font for whole website. Can be overwritten by locally set parameters.*/
	:global(body) {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>