module.exports = (...args) => {
    let operation;
    const operands = args.slice(2).filter(e => !isNaN(e)).map(Number);
    const options = args.slice(2).filter(e => isNaN(e) && !e.startsWith('--'));
    if(options.length !== 1)
    {
        throw Error('not valid operation!');
    }
    else
    {
        operation = options[0];
    }
    return(
        {
            operation,
            operands
        }
    );
}