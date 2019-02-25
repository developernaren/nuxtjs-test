<template>
  <div>
    {{ building.name }}
    <img :src="building.image" alt="">
  </div>
</template>
<script>
  import axios from 'axios'
  export default {


  async asyncData(context){

    const buildings = (await axios.get( process.env.apiBaseUrl + '/api/buildings')).data

    const [building] = buildings.filter(building => building.slug === context.params.building )

    return {
      building
    }
  }
}
</script>
