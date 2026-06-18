<script>
	let { children } = $props();

</script>




{@render children()}

<style>
	/*Set font and background colour for whole website. Can be overwritten by locally set parameters.*/
	:global(body) {
		font-family: Arial, Helvetica, sans-serif;
		background: #b0e0e6;
	}

	/*Global rules for all buttons. Can be overwritten locally.*/
	:global(.btn) {
        padding: 1.5rem;
        background: #84ffc9;
        color: rgb(24, 24, 24);
        border-radius: 8px;
		text-decoration: none;
		font-size: 1.2rem;
        text-align: center;
		width: 100%;
    }
</style>