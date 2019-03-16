/////////////////////////////////////////////////////imports
const Parser = require('./parsers');
const Operations = require('./operations');

////////////////////get parser type
const parserType = Parser.getParserType(...process.argv);
const parser = Parser[parserType];
if(!parser) throw Error('unknown parser type!');

////////////////////get operation type and operands
const {operation, operands} = parser(...process.argv);
const mathematicalOperation = Operations[operation];
if(!mathematicalOperation) throw Error('unknown operation type!');

//just to console the result !
console.log(mathematicalOperation(...operands));

/////////////////do mathematical staff
return mathematicalOperation(...operands);