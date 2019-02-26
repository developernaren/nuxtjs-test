<template>
  <div>
    <div class="max-w rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="building.image" :alt="building.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ building.name }}</div>
        <p class="text-grey-darker text-base">
          {{ building.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    middleware: 'auth',
    async asyncData(context) {

      const buildings = (await axios.get(process.env.apiBaseUrl + '/api/buildings')).data
      const [building] = buildings.filter(building => building.slug === context.params.building)

      return {
        building
      }
    }
  }
</script>
