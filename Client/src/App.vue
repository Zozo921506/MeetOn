<script>
import axios from 'axios';

export default {
  data()
  {
    return {
      message: '',
    };
  },
  mounted()
  {
    axios.get('http://localhost:3000')
    .then(response => {
      this.message = response.data;
    })
    .catch(e => {
      console.error('Something went wrong', e);
    })
  }
}
</script>

<template>
  <router-view />
</template>

<!-- <style>
 To show the current page
.router-link-exact-active
{

}
</style> -->