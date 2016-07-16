/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'
import R from 'ramda'
import {demux} from 'muxer'
import {CompositeDisposable} from 'rx'
import {IsFunction, IsArray} from './Utils'

const Executors = R.compose(R.filter(IsFunction), R.map(R.nth(1)), R.filter(IsArray))
export default (component, interpreters, signal$) => {
  const executors = Executors(interpreters)
  const keys = R.keys(executors)
  const [params] = demux(signal$, ...keys)
  return new CompositeDisposable(R.values(R.mapObjIndexed((executor, key) => {
    return executor(component, params[key])
  }, executors)))
}
