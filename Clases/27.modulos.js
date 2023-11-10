/* 
Solo se puede tener una exportación por defecto por file
Si no se exporta por defecto, la importar se usa {}
En html se debe colocar type=module para que funcione
<script src="27.modulos.js" type="module"></script>
*/

import { perro } from './28.modulos1.js';
import r from './29.modulos2.js'
import { sumar } from './29.modulos2.js'

console.log(perro.ladrar())
console.log(r(4, 5))
console.log(sumar(3, 5))