// finger position array
const chordFingerPositions = {
    'C Major': [{string: 1, fret: 0},
               {string: 2, fret: 3},
               {string: 3, fret: 2},
               {string: 4, fret: 0},
               {string: 5, fret: 1},
               {string: 6, fret: 0},],
    
    'D Minor': [{string: 1, fret: 0},
                {string: 2, fret: 0},
                {string: 3, fret: 0},
                {string: 4, fret: 2},
                {string: 5, fret: 3},
                {string: 6, fret: 1},],

'D Minor 7': [{string: 1, fret: 0},
              {string: 2, fret: 0},
              {string: 3, fret: 0},
              {string: 4, fret: 2},
              {string: 5, fret: 1},
              {string: 6, fret: 1},],

    'E Minor': [{string: 1, fret: 0},
                {string: 2, fret: 1},
                {string: 3, fret: 1},
                {string: 4, fret: 0},
                {string: 5, fret: 0},
                {string: 6, fret: 0},],

    'F Major': [{string: 1, fret: 0},
                {string: 2, fret: 0},
                {string: 3, fret: 3},
                {string: 4, fret: 2},
                {string: 5, fret: 1},
                {string: 6, fret: 1},],

    'F Major 7':[{string: 1, fret: 0},
                 {string: 2, fret: 0},
                 {string: 3, fret: 3},
                 {string: 4, fret: 2},
                 {string: 5, fret: 1},
                 {string: 6, fret: 0},],

    'G Major': [{string: 1, fret: 4},
                {string: 2, fret: 2},
                {string: 3, fret: 0},
                {string: 4, fret: 0},
                {string: 5, fret: 0},
                {string: 6, fret: 4},],

    'G7': [{string: 1, fret: 3},
          {string: 2, fret: 2},
          {string: 3, fret: 0},
          {string: 4, fret: 0},
          {string: 5, fret: 0},
          {string: 6, fret: 1},],

    'A Minor': [{string: 1, fret: 0},
                {string: 2, fret: 0},
                {string: 3, fret: 2},
                {string: 4, fret: 2},
                {string: 5, fret: 1},
                {string: 6, fret: 0},],

    'B Minor': [{string: 1, fret: 0},
                {string: 2, fret: 0},
                {string: 3, fret: 0},
                {string: 4, fret: 3},
                {string: 5, fret: 4},
                {string: 6, fret: 3},],

    'B half-diminished': [{string: 1, fret: 0},
                          {string: 2, fret: 2},
                          {string: 3, fret: 4},
                          {string: 4, fret: 2},
                          {string: 5, fret: 4},
                          {string: 6, fret: 0},],

    'B diminished': [{string: 1, fret: 0},
                     {string: 2, fret: 1},
                     {string: 3, fret: 2},
                     {string: 4, fret: 3},
                     {string: 5, fret: 2},
                     {string: 6, fret: 0},]
            
};
// function to add positions to button
function populateChordDropdown() {
    const select = document.getElementById('ChordSelector');
    select.innerHTML = '';
    
   for (const chord in chordFingerPositions) {
    const option = document.createElement('option');
    option.value = chord;
    option.text = chord;
    select.appendChild(option);

   }
}
// function to display selected chord from button
function displayChord(chordName) {
    const chordDiagram= document.querySelector('.finger-positions');
    chordDiagram.innerHTML='';
    if (chordFingerPositions[chordName]) {
        const fingerPositions = chordFingerPositions[chordName];

        let maxFret = 0;
        for (const fingerPosition of fingerPositions) {
            if (fingerPosition.fret > maxFret) {
                maxFret = fingerPosition.fret;
            }
        }
        
    const stringSpacing = 160 / 6;
    const fretSpacing = 160 / (maxFret + 1);



        for (let i = 0; i < fingerPositions.length; i ++) {
            const fingerPosition = fingerPositions[i];
            if (fingerPosition.fret !== 0) {
             const dot = document.createElement('div');
             dot.className='dot';
            const dotX = (fingerPosition.string - 1) * stringSpacing;
            const dotY = (fingerPosition.fret) * fretSpacing;
            dot.style.left = `${dotX}px`;
            dot.style.top = `${dotY}px`;
             dot.textContent = i + 1;
             chordDiagram.appendChild(dot);
            } else {

            }
        }
    }
}
//Event Listener for the chord selection dropdown
document.getElementById('ChordSelector').addEventListener('change', function () {
    const selectedChord = this.value;
    displayChord(selectedChord);
});
//Initialize the chord selection dropdown
populateChordDropdown();
 





