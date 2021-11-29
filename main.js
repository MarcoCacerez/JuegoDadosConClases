/**
 * Marco Aldair de Jesus Caceres 18390579
 */

class Jugador{
    #caraDado1 = 0; 
    #caraDado2 = 0;
    constructor(nombre) {
        this.nombre = nombre;
    }
    set caraDado1(num){
        this.#caraDado1 = num;
    }
    get caraDado1(){
        return this.#caraDado1;
    }
    set caraDado2(num){
        this.#caraDado2 = num;
    }
    get caraDado2(){
        return this.#caraDado2;
    }
}

class JuegoDados{
    constructor(numeroJuego, j1, j2){
        this.numeroJuego = numeroJuego;
        this.jugador1 = j1;
        this.jugador2 = j2;
    }
    

    tirarDados() {
        this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
    }

    determinaGanador() {
        this.cantJ1 = this.jugador1.caraDado1 + this.jugador1.caraDado2;
        this.cantJ2 = this.jugador2.caraDado1 + this.jugador2.caraDado2;
        if ( (this.cantJ1 == 7) && (this.cantJ2 != 7) )
            return this.jugador1
        else if ((this.cantJ2 == 7) && (this.cantJ1 != 7))
            return this.jugador2
        else return null;
    }
}

class torneoDados{
    jugadas = []
    #juegosGanadosJugador1 = 0;
    #juegosGanadosJugador2 = 0;
    
    set juegosGanadosJugador1(num){
        this.#juegosGanadosJugador1 = num;
    }
    set juegosGanadosJugador2(num){
        this.#juegosGanadosJugador2 = num;
    }
    get juegosGanadosJugador1(){
        return this.#juegosGanadosJugador1;
    }
    get juegosGanadosJugador2(){
        return this.#juegosGanadosJugador2;
    }
    crear(j1,j2){
        this.juego = new JuegoDados(1,j1,j2);
    }
    jugar(){
        while(this.juegosGanadosJugador1 < 3 && this.juegosGanadosJugador2 < 3){
            this.juego.tirarDados();
            this.ganador = this.juego.determinaGanador();

            if(this.ganador === null){

            }else if(this.juego.jugador1.nombre == this.ganador.nombre){
                console.log(this.ganador.nombre);
                this.juegosGanadosJugador1++;
            }else if(this.juego.jugador2.nombre == this.ganador.nombre){
                console.log(this.ganador.nombre);
                this.juegosGanadosJugador2++;
            }
            this.jugadas.push(this.juego);
            this.juego.numeroJuego++;
        }
    }

    #resultado(){
        if(this.#juegosGanadosJugador1 == 3)
            return this.juego.jugador1.nombre;
        else if(this.#juegosGanadosJugador2 == 3)
            return this.juego.jugador2.nombre;
    }

    get resultado(){
        return this.#resultado();
    }
}

j1 = new Jugador("Marco");
j2 = new Jugador("Saul");

torneo = new torneoDados();
torneo.crear(j1,j2);
torneo.jugar();
console.log(`Ganador del torneo ${torneo.resultado}`);
