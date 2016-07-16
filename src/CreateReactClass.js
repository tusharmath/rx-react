/**
 * Created by tushar.mathur on 16/07/16.
 */

'use strict'
import R from 'ramda'
import CreateProto from './CreateProto'
import React from 'react'

export default R.curry((interpreters, mainTransformer, view) => {
  return React.createClass(CreateProto({interpreters, mainTransformer, view}))
})
