const Tone = require('Tone');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready to rock');

    const synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");
    const header = document.querySelector('header')
    header.addEventListener('click', () => {Tone.start()})


    const loop = new Tone.Loop(function (time) {
        synth.triggerAttackRelease(["C2"], "8n", time);
    }, "4n");
    loop.start("1m").stop("4m");

    Tone.Transport.start();
});