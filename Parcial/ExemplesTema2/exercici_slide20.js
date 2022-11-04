let cont = 0

function exercici() {
    cont = new Continuation()
    return false
}


let b = exercici()

for(let i=1; i < 6; i++) {
   if (!b) {
	print(5-i)
   } else {
	print(i)
   }
}

if (!b) {
   cont(true)
}


