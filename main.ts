let DuréeNote = 45
let NombreNotesDictée = 2
let IntervalleMaxi = 12
let nombreRépétitionsNotes = 20
let IntervalleMini = 1
let NotesPossibles = [Note.C4, Note.CSharp4, Note.D4, Note.Eb4, Note.E4, Note.F4, Note.FSharp4, Note.G4, Note.GSharp4, Note.A4, Note.Bb4, Note.B4, Note.C5, Note.CSharp5, Note.D5, Note.Eb5, Note.E5, Note.F5, Note.FSharp5, Note.G5, Note.GSharp5]
let NomsNotesPossibles = ["Do", "Do#", "Re", "MiB", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "SiB", "Si", "Do5", "Do#5", "Re5", "MiB5", "Mi5", "Fa5", "Fa#5", "Sol5", "Sol#5"]
let Intervalles = ["", "Seconde mineure", "Seconde majeure", "Tierce mineure", "Tierce majeure", "Quarte juste", "Quinte diminuee", "Quinte juste", "Quinte augmentee", "Sixte majeure", "Septième mineure", "Septième majeure", "Octave juste"]
//     "Quarte diminuee",
//     "Quarte augmentee",
//     "Sixte mineure",
let NotesDictée = notesAuHasard(NotesPossibles)
function calculerIntervalle(indexPremièreNote: number, indexDeuxièmeNote: number): number {
    return Math.abs(indexDeuxièmeNote - indexPremièreNote)
}

function notesAuHasard(listeNotes: any): number[] {
    let indexNote: number;
    let intervalle: number;
    let notes : number[] = []
    let indexNotePrécédente = randint(0, NotesPossibles.length - 1)
    for (let i = 0; i < NombreNotesDictée; i++) {
        while (true) {
            indexNote = randint(0, NotesPossibles.length - 1)
            intervalle = calculerIntervalle(indexNote, indexNotePrécédente)
            if (intervalle <= IntervalleMaxi && intervalle >= IntervalleMini) {
                break
            }
            
        }
        notes.push(indexNote)
        indexNotePrécédente = indexNote
    }
    return notes
}

function afficherPremièreNote() {
    let indexPremièreNote = NotesDictée[0]
    let premièreNote = NomsNotesPossibles[indexPremièreNote]
    basic.showString(premièreNote)
}

input.onButtonPressed(Button.A, function jouerDictéeNote() {
    afficherPremièreNote()
    let indexPremièreNote = NotesDictée[0]
    let indexDeuxièmeNote = NotesDictée[1]
    let premièreNoteAccord = NotesPossibles[indexPremièreNote]
    let deuxièmeNoteAccord = NotesPossibles[indexDeuxièmeNote]
    for (let i = 0; i < nombreRépétitionsNotes; i++) {
        music.playTone(premièreNoteAccord, DuréeNote)
        music.playTone(deuxièmeNoteAccord, DuréeNote)
    }
})
input.onButtonPressed(Button.AB, function afficherDictéeNote() {
    for (let note of NotesDictée) {
        basic.showString(NomsNotesPossibles[note])
    }
})
input.onButtonPressed(Button.B, function afficherIntervalle() {
    let indexPremièreNote = NotesDictée[0]
    let indexDeuxièmeNote = NotesDictée[1]
    let indexIntervalle = calculerIntervalle(indexPremièreNote, indexDeuxièmeNote)
    let i = Intervalles[indexIntervalle]
    basic.showString(i)
})
