<template>
  <div>
    <div v-for="i in 6" class="mt-4">
      <div class="lg:flex mb-4">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('http://lorempixel.com/400/200/city')" title="Woman holding a mug">
        </div>
        <div
          class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">

            <div class="text-black font-bold text-xl mb-2">Tallest Building in the world</div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4"
                 src="https://www.gravatar.com/avatar/719a95c0aa48840deaf75741324a3289" alt="Avatar of Naren Chitrakar">
            <div class="text-sm">
              <p class="text-black leading-none">Naren Chitrakar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

