/**
 * Created by tushar.mathur on 19/07/16.
 */

'use strict'

import R from 'ramda'
import {IsArray, IsFunction} from './Utils'

const Transformers = R.compose(R.filter(IsFunction), R.map(R.nth(0)), R.filter(IsArray))
export default (component, interpreters) => {
  return R.map(t => t(component), Transformers(interpreters))
}
