DuréeNote = 45
NombreNotesDictée = 2
IntervalleMaxi = 8
nombreRépétitionsNotes = 13

NotesPossibles = [
    Note.C4,
    Note.CSHARP4,
    Note.D4,
    Note.EB4,
    Note.E4,
    Note.F4,
    Note.FSHARP4,
    Note.G4,
    Note.GSHARP4,
    Note.A4,
    Note.BB4,
    Note.B4,
    Note.C5,
    Note.CSHARP5,
    Note.D5,
    Note.EB5,
    Note.E5,
    Note.F5,
    Note.FSHARP5,
    Note.G5,
    Note.GSHARP5
    ]
    
NomsNotesPossibles = [
        "Do",
        "Do#",
        "Re",
        "MiB",
        "Mi",
        "Fa",
        "Fa#",
        "Sol",
        "Sol#",
        "La",
        "SiB",
        "Si",
        "Do5",
        "Do#5",
        "Re5",
        "MiB5",
        "Mi5",
        "Fa5",
        "Fa#5",
        "Sol5",
        "Sol#5",
    ]

NotesDictée : List[number] = notesAuHasard(NotesPossibles)

def notesAuHasard(listeNotes):
        notes : List[number] = []
        indexNotePrécédente = randint(0, NotesPossibles.length - 1)
        for i in range(NombreNotesDictée):
            while True:
                indexNote : number = randint(0, NotesPossibles.length - 1)
                intervalle = Math.abs(indexNote - indexNotePrécédente)
                if intervalle <= IntervalleMaxi:
                    break
            notes.append(indexNote)
            indexNotePrécédente = indexNote
        return notes

def afficherDictéeNote() -> void :
        for note in NotesDictée:
            basic.show_string(NomsNotesPossibles[note])

def afficherPremièreNote():
        indexPremièreNote : number = NotesDictée[0]
        premièreNote : string = NomsNotesPossibles[indexPremièreNote]
        basic.show_string(premièreNote)


def jouerDictéeNote() -> void :
    afficherPremièreNote()
    indexPremièreNote : number = NotesDictée[0]
    indexDeuxièmeNote : number = NotesDictée[1]
    premièreNoteAccord = NotesPossibles[indexPremièreNote]
    deuxièmeNoteAccord = NotesPossibles[indexDeuxièmeNote]
    for i in range(nombreRépétitionsNotes):
        music.play_tone(premièreNoteAccord, DuréeNote)
        music.play_tone(deuxièmeNoteAccord, DuréeNote)

input.on_button_pressed(Button.A, jouerDictéeNote)
input.on_button_pressed(Button.B, afficherDictéeNote)