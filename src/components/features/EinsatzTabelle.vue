<template>
    <div class="container">
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">EinsatzNr.</div>
          <div class="col col-2">Alarmstufe</div>
          <div class="col col-3">Wo</div>
          <div class="col col-6">Einsatzleiter</div>
        </li>
        <li v-for="(data, index) in dataset" :key="index" class="table-row" :class="{ 'selected-row': selectedItem === index }">
            <input type="radio" :value="index" v-model="selectedItem" />
        <div class="col col-1" data-label="EinsatzNr.">{{ data.EinsatzNr }}</div>
          <div class="col col-2" data-label="Alarmstufe">{{ data.Alarmstufe }}</div>
          <div class="col col-3" data-label="Wo">{{ data.Wo }}</div>
          <div class="col col-6" data-label="Einsatzleiter">{{ data.Einsatzleiter }}</div>
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
            EinsatzNr: 1,
            Alarmstufe: 'TH Klein',
            Wo: 'Lugau - Poststr.6',
            Wohin: 'Ort B',
            Kilometer: 50,
            Einsatzleiter: 'M.Kaden',
          },
          {
            EinsatzNr: 2,
            Alarmstufe: 'Brand Mittel',
            Wo: 'Lugau - Wiesenweg.12',
            Wohin: 'Ort B',
            Kilometer: 50,
            Einsatzleiter: 'L.Lorenz',
            Kilometerstand: 10000
          },
          {
            EinsatzNr: 3,
            Alarmstufe: 'TH Klein',
            Wo: 'Lugau - Gartenstr.2',
            Wohin: 'Ort B',
            Kilometer: 50,
            Einsatzleiter: 'A.Böhme',
            Kilometerstand: 10000
          },
          {
            EinsatzNr: 4,
            Alarmstufe: 'Brand Groß',
            Wo: 'Oelsnitz - Pflockenstr.67',
            Wohin: 'Ort B',
            Kilometer: 50,
            Einsatzleiter: 'S.Schimmel',
            Kilometerstand: 10000
          },

          {
            EinsatzNr: 5,
            Alarmstufe: 'ABC Klein',
            Wo: 'Lugau - Poststr.6',
            Wohin: 'Ort B',
            Kilometer: 50,
            Einsatzleiter: 'S.Schimmel',
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
  