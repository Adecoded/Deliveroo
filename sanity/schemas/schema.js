
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import resturant from './resturant'
import category from './category'
import dish from './dish'
import Featured from './Featured'


export default createSchema({
  // We name our schema
  name: 'default',
  
  types: schemaTypes.concat([
    resturant,
    category,
    dish,
    Featured
  ]),
})
