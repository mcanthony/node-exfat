var Entry = require( './index' )

/**
 * FileName
 * @return {FileName}
 */
function FileName() {
  
  if( !(this instanceof FileName) )
    return new FileName()
  
  this.type = Entry.FILE_NAME
  this.unknown1 = 0x00
  this.name = ''
  
}

/**
 * FileName prototype
 * @type {Object}
 */
FileName.prototype = {
  
  constructor: FileName,
  
  parse: function( buffer ) {
    
    this.type = buffer[ 0 ]
    this.unknown1 = buffer[ 1 ]
    this.name = buffer.toString( 'utf16', 0x02 )
    
  },
  
  toBuffer: function() {
    
  }
  
}

// Exports
module.exports = FileName
