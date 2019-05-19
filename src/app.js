const Tone = require('Tone');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready to rock');

    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");
    document.querySelector('button').addEventListener('click', () => Tone.start())


});