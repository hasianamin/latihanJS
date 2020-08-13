function hello(name) {
    name = name.toLowerCase().split('')
    let fl = name[0].toUpperCase()
    name.splice(0, 1)
    name.unshift(fl)
    let res = name.join('')
    console.log(res)
  }


hello('johN')