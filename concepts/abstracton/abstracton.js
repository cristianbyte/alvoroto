import { loadNavbar } from "../revolcon/revolcon.js";

const title = document.getElementById('abstractonTitle')
const navbar = document.getElementsByClassName('nav__abstraction')[0]

document.addEventListener('DOMContentLoaded',()=>{
    loadNavbar('nav__abstraction__item',navbar,false)
})