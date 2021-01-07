$(() => {
    // TODO
    console.log(monkeys.monkeys)
    var templateSrc = $("#monkey-template").html();
    var template = Handlebars.compile(templateSrc);
    let htmlOut = template(monkeys)
    document.getElementById('monkeyBox').innerHTML += htmlOut
    // for (monkey of monkeys.monkeys){
    //     console.log(monkey)
    
    // $("#monkey-template").html(htmlOut);
    // }

    //console.log(templateSrc, "TEMPLATE CODE \n\n\n\n")
    //console.log(template)
    //console.log(htmlDisplay)
    console.log(htmlOut, "HTML OUT")

})