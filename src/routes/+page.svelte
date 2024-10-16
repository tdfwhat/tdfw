<script lang="ts">
  import clouds from "$lib/assets/111.webp"

  const projects = [
    { href: "https://www.dist.se/", display: "Dist" },
    { href: "https://www.studioolga.se/", display: "Studio Olga" },
    { href: "https://broken-dreams.se/", display: "Broken dreams" },
    { href: "https://www.mint-ab.se/", display: "Mint" },
  ]
</script>

<svelte:head>
  <title>TDF what?</title>
  <meta name="description" content="He, jag bygger hemsidor" />
</svelte:head>

<div class="flex flex-col justify-between w-screen min-h-screen">
  <div class="mx-auto space-y-4 p-4 my-16">
    <div class="">
      <h1 class="">Hej 👋</h1>
      <p class="mt-4">Jag heter Anton, bor i Stockholm och jag bygger hemsidor</p>
      <p class="mt-2">Kontakta mig på <a href="mailto:tdfwhat@pm.me" class="underline">tdfw@pm.me 📮</a></p>
    </div>
  </div>

  <div>
    <img class="object-cover w-full" height={2360} width={1920} src={clouds} alt="Background"/>
    <div class="flex flex-wrap sm:flex-row w-full max-w-6xl mx-auto sm:justify-evenly justify-normal my-8 p-2">
      <p class="flex px-2 text-lg">Tidigare projekt</p>
      {#each projects as project}
        <a class="flex px-2 underline text-lg" href={project.href} target="_blank">{project.display}</a>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
</style>
