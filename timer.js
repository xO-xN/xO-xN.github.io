const fadeTime = 4000;

class Timer {
    constructor(s, l) {
        this.event = s;
        this.number = 0;
        this.fadein = 0;
        this.l = l;
    }
    
    count() {
        this.number = map(constrain(millis() - this.event, 0, this.l), 0, this.l, 0, 1);
        this.fadein = map(constrain(millis() - this.event, 0, fadeTime), 0, fadeTime, 0, 1);
    }
}
