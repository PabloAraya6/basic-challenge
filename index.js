require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");

const { isWhite, areAnagram, ApplesByFences } = require("./models/ejercicios");

const main = async () => {

    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const fila = await leerInput('Inserte fila: ');
                const columna = await leerInput('Inserte columna: ');

                const resultado = await isWhite(fila, columna)

                console.log('\n EJERCICIO 1 - BLANCO / NEGRO'.green);
                console.log(`[${fila.yellow},${columna.yellow}] La fila ${fila.yellow} y la columna ${columna.yellow}  es de color:`)
                if (resultado) {
                    console.log(' NEGRO '.green)
                } else {
                    console.log(' BLANCO '.green);
                }
                break;

            case 2:
                const s1 = await leerInput('Inserte string1: ');
                const s2 = await leerInput('Inserte string2: ');
                const result = await areAnagram(s1, s2)

                console.log('\n EJERCICIO 2 - ANAGRAMA'.green);
                console.log(`El string1 ${s1.yellow} y string2 ${s2.yellow}: `)
                if (result) {
                    console.log(' SON ANAGRAMAS '.green);
                } else {
                    console.log(' NO SON ANAGRAMAS '.green);
                }
                break;

            case 3:
                const fences = await leerInput('Inserte numero de cercas: ');
                const quantity = ApplesByFences(fences)

                console.log('\n EJERCICIO 3 - MANZANAS POR CERCA'.green);
                console.log(`La cantidad de manzanas para ${fences.yellow} cercas es: `, parseInt(quantity))

                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}

main();
