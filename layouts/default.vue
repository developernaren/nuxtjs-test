<template>
  <section class="container">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Naren's Real Estate Empire</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:w-auto">
        <div>
          <nuxt-link to="/login"
             class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            Login
          </nuxt-link>
        </div>
      </div>
    </nav>

    <nuxt/>

    <footer>
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            &copy; Naren's Real Estate Empire
          </span>
        </div>
      </nav>
    </footer>
  </section>
</template>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }


  .container {
    margin: 0 auto;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
</style>
