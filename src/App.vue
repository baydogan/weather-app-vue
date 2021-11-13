<template>

<div class="flex items-center justify-center h-screen">
  <div 
  class="w-96 h-800 bg bg-clear rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2 "
  :class="backgroundChange"
  >  
    <div class="relative m-5">
    <input type="text" placeholder="Search" class="w-full pr-16 input input-accent input-bordered bg bg-white hover:border-green-500 transition-all duration-500 focus:outline-none focus:border-none text-black"
    v-model="apiCity"
    @keydown.enter="getWeatherInfo"
    > 
    <button class="absolute top-0 right-0 rounded-l-none btn btn-accent hover:bg-green-500 transition-all duration-500" v-on:click="getWeatherInfo()">go</button>
  </div>
        <div class="flex flex-col items-center mt-5" >
          <h1 class="text-6xl text-white drop-shadow-xl  transition-colors duration-500"
          :class="textChange"  
          v-show="tempeture !== null">{{Math.round(tempeture)}}°</h1>
          <h2 class="text-3xl text-white drop-shadow-xl">{{city}} {{country}}</h2>
          <h2 class="text-3xl text-white drop-shadow-xl capitalize">{{weatherDescription}}</h2>
        </div>
      </div>
    </div>
  
  
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      apiKey: '5e62f29a4a0a2c331f5c78f261c62d20',
      baseUrl: 'http://api.openweathermap.org/data/2.5/weather?', 
      apiCity: '',
      tempeture: null,
      country: '',
      city: '',
      weatherCondition: '',
      weatherDescription: ''

        
          
        
      
      
    }
  },



  methods: {
    async getWeatherInfo(){
     const response = await axios.get(this.baseUrl + `q=${this.apiCity}&units=metric&appid=${this.apiKey}`)
     const{data : data} = response
     console.log(data)
    
    this.tempeture = data.main.temp,
    this.country = data.sys.country,
    this.city = data.name,
    this.weatherCondition = data.weather[0].main
    this.weatherDescription = data.weather[0].description
    
     
      
      this.apiCity = ''
    },

    
  },

  computed : {
      backgroundChange(){
        if(this.weatherCondition === 'Rain'){
          return 'w-96 h-800 bg bg-rainy rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'
        }
        
        else if(this.weatherCondition === 'Clear' && this.tempeture > 21 && this.tempeture <=25 ){
          return 'w-96 h-800 bg bg-clear rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'
        }
        
        else if(this.tempeture <= 5 && this.tempeture !== null){
          return 'w-96 h-800 bg bg-snow rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'
        }

        else if(this.tempeture > 5 && this.tempeture < 20){
          return 'w-96 h-800 bg bg-cold rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'
        }

        else if(this.tempeture >= 26 ){
          return 'w-96 h-800 bg bg-hot rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'
          
        }

        else return 'w-96 h-800 bg bg-clear rounded-xl  bg-no-repeat bg-cover shadow-lg transition-all duration-1000 border-2'

      },

      textChange(){
        if (this.tempeture <= 5 && this.tempeture !== null){
          return 'text-10xl text-red drop-shadow-xl  transition-colors duration-500'
        } else 
          return 'text-6xl text-white drop-shadow-xl  transition-colors duration-500'

      }
    }
  
  
}
</script>