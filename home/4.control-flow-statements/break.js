// The break statement prematurely terminates loop such as for, do... while, while, and swich. Ex:
for(let i = 0; i < 5; i++) {
  console.log(i)
}

for(let j = 0;  j < 5; j++) {
  console.log(j)

  if(j == 2)
    break
}

// Using the break statement to terminate a nested loop
for(let i = 1; i <= 5; i++) {
  for(let j = 1; j <= 5; j++) {
    console.log(`i: ${i}; j: ${j}`)
  }
}

for(let i = 1; i <= 5; i++) {
  for(let j = 1; j <= 5; j++) {
    console.log(`i: ${i} j: ${j}`)

    if(j == 3)
      break
  }
}

for(let k = 1; k <= 5; k++) {

  for(let h = 1; h <= 5; h++) {
    console.log(`k: ${k} h: ${h}`)
  }

  if(k == 3)
    break
}




