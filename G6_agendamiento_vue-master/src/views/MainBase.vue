<template>
  <v-card :key="reRenderVar">
    <App-Navigator />
    <App-Bar @changeEvent="reRender"/>

    <!-- No se veía nada porque faltaba esta linea
    que va en el App.vue, que es importante para que se visualicen
    las vistas, ya que sin esto sólamente estaríamos mostrando 
    los 3 componentes (Navigator, Bar y Footer) -->
    <router-view></router-view> 

    <App-Footer />

  </v-card>
</template>

<script lang="ts">
  import { Component, Vue, Prop} from 'vue-property-decorator';
  import AppBar from '@/components/util/AppBar.vue';
  import AppNavigator from '@/components/util/AppNavigator.vue';
  import AppFooter from '@/components/util/AppFooter.vue';
  
@Component({
    name: 'MainBase',
    components: {
      AppBar,
      AppNavigator,
      AppFooter,
    },
  })
  export default class MainBase extends Vue {
    public reRenderVar = 0;

		public reRender(lang:string) {
      console.log("cambiando a ", lang);
      this.reRenderVar += 1;
      this.$emit('changeEvent');
    }
		
	}
	
</script>
