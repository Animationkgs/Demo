


class Day:
    def __init__(self, name):
        self.name= name
        self.hour= []
    def __repr__(self): pass

class Hour:
    def __init__(self, name, note, data, quiz):
        self.name= name
        self.note= note
        self.data= data
        self.slide= []
        self.quiz= quiz;
    def __repr__(self): pass

class Slide:
    def __init__(self, k, transcript, meaning):
        self.k= k
        self.transcript= transcript
        self.meaning= meaning
    def __repr__(self): pass

class Transcript:
    def __init__(self, name, x):
        self.name= name
        self.x= x
    def __repr__(self): pass
