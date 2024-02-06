import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import {createRouter, createWebHashHistory} from "vue-router"

import CompHelloWorld from "./components/HelloWorld.vue"
import CompProfil from "./components/profil.vue"
import CompFahrzeuge from "./components/fahrzeuge.vue"
import CompFahrtenBuch from "./components/fahrtenBuch.vue"
import CompEinsatz from "./components/Einsatz.vue"
import CompDienst from "./components/Dienste.vue"

//Benutzerverwaltung
import CompProfilKalender from "./components/features/BenutzerKalenderView.vue"


const app = createApp(App)

createApp(App)

const routes = [
    {path: "/", component: CompHelloWorld},
    {path: "/profil", component: CompProfil},
    {path: "/fahrzeuge", component: CompFahrzeuge},
    {path: "/fahrtenBuch", component: CompFahrtenBuch},
    {path: "/einsatz", component: CompEinsatz},
    {path: "/dienste", component: CompDienst},

    //Benutzerverwaltung
    {path: "/profil/kalender", component: CompProfilKalender},



]

const router = createRouter ({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})

app.use(router)
app.use(VCalendar, {})

app.mount('#app')