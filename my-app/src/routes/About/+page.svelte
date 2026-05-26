<h1>Background image test</h1>
<div class="image"> </div>
<slot></slot>
<img src="my-app\src\lib\assets\iss074e0603650~orig.jpg" alt="This wasn't meant to happen." />

<style>
    img {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -1;
    }
</style>