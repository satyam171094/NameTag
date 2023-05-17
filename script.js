const input = document.querySelector(".input")
const output = document.querySelector(".output")


const nameTag = ()=>{

    const p = document.createElement("p")
    p.innerText = `My Name is ${input.value}`
    output.append(p)

}


