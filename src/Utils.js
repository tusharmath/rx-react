/**
 * Created by tushar.mathur on 19/07/16.
 */

'use strict'
import R from 'ramda'

export const IsFunction = R.compose(R.equals('Function'), R.type)
export const IsArray = R.compose(R.equals('Array'), R.type)
