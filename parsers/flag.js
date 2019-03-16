module.exports = (...args) => {
    let operation;
    const operands = args.slice(2).filter(e => !isNaN(e)).map(Number);
    const options = args.slice(2).filter(e => isNaN(e) && e !== '--flag' && e !== '--parser=flag');
    if(options.length !== 1)
    {
        throw Error('not valid operation!');
    }
    else
    {
        operation = options[0].substring(2);
    }
    return(
        {
            operation,
            operands
        }
    );
}