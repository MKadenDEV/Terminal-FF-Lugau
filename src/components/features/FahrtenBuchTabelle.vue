<template>
    <div class="container">
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">FahrtenNr.</div>
          <div class="col col-2">FahrzeugName</div>
          <div class="col col-3">Von</div>
          <div class="col col-4">Wohin</div>
          <div class="col col-5">Kilometer</div>
          <div class="col col-6">Fahrer</div>
          <div class="col col-7">Kilometerstand</div>
          <div class="col col-8">Auswahl</div>
        </li>
        <li v-for="(data, index) in dataset" :key="index" class="table-row" :class="{ 'selected-row': selectedItem === index }">
            <input type="radio" :value="index" v-model="selectedItem" />
        <div class="col col-1" data-label="FahrtenNr.">{{ data.FahrtenNr }}</div>
          <div class="col col-2" data-label="FahrzeugName">{{ data.FahrzeugName }}</div>
          <div class="col col-3" data-label="Von">{{ data.Von }}</div>
          <div class="col col-4" data-label="Wohin">{{ data.Wohin }}</div>
          <div class="col col-5" data-label="Kilometer">{{ data.Kilometer }}</div>
          <div class="col col-6" data-label="Fahrer">{{ data.Fahrer }}</div>
          <div class="col col-7" data-label="Kilometerstand">{{ data.Kilometerstand }}</div>
          <div class="col col-8" data-label="Auswahl">
            
          </div>
        </li>
      </ul>
    </div>
  </template>


  
  <script>
  export default {
    data() {
      return {
        dataset: [
          {
            FahrtenNr: 1,
            FahrzeugName: 'HLF',
            Von: 'Ort A',
            Wohin: 'Ort B',
            Kilometer: 50,
            Fahrer: 'M.Kaden',
            Kilometerstand: 10000
          },
          {
            FahrtenNr: 2,
            FahrzeugName: 'LF10',
            Von: 'Ort A',
            Wohin: 'Ort B',
            Kilometer: 50,
            Fahrer: 'L.Lorenz',
            Kilometerstand: 10000
          },
          {
            FahrtenNr: 3,
            FahrzeugName: 'MTW',
            Von: 'Ort A',
            Wohin: 'Ort B',
            Kilometer: 50,
            Fahrer: 'G.Cornils',
            Kilometerstand: 10000
          },
          {
            FahrtenNr: 4,
            FahrzeugName: 'GWL',
            Von: 'Ort A',
            Wohin: 'Ort B',
            Kilometer: 50,
            Fahrer: 'S.Schimmel',
            Kilometerstand: 10000
          },

          {
            FahrtenNr: 5,
            FahrzeugName: 'ELW',
            Von: 'Ort A',
            Wohin: 'Ort B',
            Kilometer: 50,
            Fahrer: 'S.Schimmel',
            Kilometerstand: 10000
          },
        ],
        selectedItem: null
      };
    }
  };
  </script>

  
<style scoped>
body {
  font-family: "lato", sans-serif;
}

.container {
  max-width: 1500px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.responsive-table .table-header {
  background-color: #95a5a6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 10%;
}
.responsive-table .col-2 {
  flex-basis: 40%;
}
.responsive-table .col-3 {
  flex-basis: 25%;
}
.responsive-table .col-4 {
  flex-basis: 25%;
}
.responsive-table .col-5 {
  flex-basis: 25%;
}
.responsive-table .col-6 {
  flex-basis: 25%;
}
.responsive-table .col-7 {
  flex-basis: 25%;
}
.responsive-table .col-8 {
  flex-basis: 25%;
}
@media all and (max-width: 1000px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 200%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6c7a89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 100%;
    text-align: right;
  }
}
</style>
  