module.exports = (...args) => {
    let parserType;
    let implementParsers = ['flag', 'simple'];
    const options = args.slice(2)
    .filter(e => e.startsWith('--'))
    .map(e => e.substring(2))
    .map(e => (e.includes('=')) ? e.split('=')[1] : e)
    .filter(e =>  implementParsers.includes(e));

    if(options.length === 0 ) parserType= 'flag';
    else if (options.length > 1) throw Error("only one parser should be specified");
    else parserType= options[0];

    return parserType;
}


    // for (const e of options) {
    //     if(e.substring(2) === 'simple')
    //     {
    //         parserType = 'simple';
    //     }
    //     else if (e.substring(2) === 'flag')
    //     {
    //         parserType = 'flag';
    //     }
    //     else if(e.substring(2).startsWith('parser='))
    //     {
    //         parserType = e.split('=')[1];
    //     }
    // }
    // return parserType;