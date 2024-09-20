"use strict";

// function momsberegner(amount, moms = 1.25) {
//   console.log("beløb inkl moms", amount * moms);
// }

momsberegner(100, 25);

function momsberegner(amount, moms) {
  console.log(
    `beløb med moms ${moms}%, der er beløbet med moms: ${
      amount * (1 + moms / 100)
    }`
  );
}
