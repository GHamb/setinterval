


document.getElementById('comeca').addEventListener('click', function () {

    document.getElementById('div').innerHTML = `
    <h1>MATHQUIZ</h1>
    <p>Considere no plano cartesiano xy o triângulo delimitado pelas retas <b>2x=y, x=2y e x=−2y+10.<b> A área desse
                triângulo mede:</p>
    <label for="">Altenatriva:<select name="" id="resp"></label>
    <option value="" selected hidden>selecione</option>
    <option value="1"> 15/2</option>
    <option value="2">13/4</option>
    <option value="3">11/6</option>
    <option value="4">9/4</option>
    <option value="5">7/2</option>
    </select>`

    document.getElementById('resp').addEventListener('change', function () {
        if (document.getElementById('resp').value == '1') {
            document.getElementById('body').innerHTML = ''
            document.getElementById('body').innerHTML = "<img src='https://media3.giphy.com/media/zaqclXyLz3Uoo/200.webp?cid=ecf05e477zezt1n4412vwbdvs5lqdf2ezpim6vzosymatq2a&rid=200.webp' >"
            document.getElementById('body').innerHTML += '<br>VOCÊ ACERTOU'
            clearTimeout(time)
        } else {
            document.getElementById('body').innerHTML = "<img src='https://media2.giphy.com/media/4NrE6evnoq0X7TsDvO/200w.webp?cid=ecf05e473zbjy6drezms99vy0mu0t0ec9mbo71jp618p9el5&rid=200w.webp' >"
            document.getElementById('body').innerHTML += '<br>VOCÊ ERROU'
            clearTimeout(time)
        }
    })

    var time = setTimeout(() => {
        document.getElementById('body').innerHTML = "<img src='https://media2.giphy.com/media/h8O8YtEdKRPpS4MkLU/200w.webp?cid=ecf05e47v5251oe2ac9pstwja3r0n3m6jomf7kc2v120kxuv&rid=200w.webp' >"
        document.getElementById('body').innerHTML += '<br>Tempo esgotado'
    }, 10000)

})
