
// 9. Sound Board Project

// Important concepts for the project

// 1. array
// 2. forEach() loop
// 3. document.createElement()
// 4. element.classList.add()
// 5. element.innerText
// 6. addEventListener('click')
// 7. .play() -> HTML5 JS API for sounds
// 8. .pause() -> HTML5 JS API for sounds
// 9. getElementById()
// 10. appendChild()
// 11. .currentTime


// variables

// make a variable of array to store the id of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// loop through array
 sounds.forEach(sound => {
    // create button for each sound
    const btn = document.createElement('button');
    // add style of "btn" which is in css sheet
    btn.classList.add('btn');

    // sounds at inner text of the button
    btn.innerText = sound;

    // sound at the event of click
    btn.addEventListener('click', () => {

        // to pause the sound previously playing
        stopSounds();

        // as sounds id are in array "sounds"
        // which itself is looping through with "sound"
        // so we use "sound" for the id
        document.getElementById(sound).play();
        // here in above line we used HTML5 which has
        // JS API for audio, play() here
    });

    // append the btn we create here to the buttons in HTML
    // so they start displaying in screen 
    document.getElementById('buttons').appendChild(btn);
 });

//  function to stop the sound
// it will use before playing any sound
 function stopSounds() {
    sounds.forEach(sound => {
        const song =  document.getElementById(sound);

        // JS API for audio, pause() here
        song.pause();

        song.currentTime = 0;
        // so that every sound start playing afresh
    });
 }