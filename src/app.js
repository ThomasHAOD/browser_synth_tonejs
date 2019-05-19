const Tone = require('Tone');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready to rock');

    const synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");
    const header = document.querySelector('header')
    header.addEventListener('click', () => {Tone.start()})


});