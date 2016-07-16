/**
 * Created by tushar.mathur on 17/07/16.
 */

'use strict'
import R from 'ramda'

export const Model = () => {
  const executor = (component, signal) => {
    return signal.subscribe(x => component.setState(x))
  }
  const transformers = component => {
    const value = () => R.merge(component.props, component.state)
    return {value}
  }
  return [transformers, executor]
}

export const Intent = () => {
  const executor = (component, signal) => {
    if (component.props.onIntent) {
      component.props.onIntent(signal)
    }
  }
  return [null, executor]
}
export const Event = () => {
  const transformer = component => {
    const select = name => component.__subject.filter(x => x[0] === name).map(R.nth(1))
    const fromCB = R.curry((name, value) => component.__subject.onNext([name, value]))
    return {select, fromCB}
  }
  return [transformer]
}
