const  valueParse =(val) => {
    return String(val).replace(/[^A-Z0-9]/g, '')
}

console.log(valueParse('+7(778)-989-0228'))