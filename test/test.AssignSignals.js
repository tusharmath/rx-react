/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'

import {Observable as O, CompositeDisposable} from 'rx'
import {mux} from 'muxer'
import test from 'ava'
import {stub} from 'sinon'
import AssignSignals from '../src/AssignSignals'

const MockExecutors = () => {
  const result = []
  const executors = {
    a: [null, (c, $) => $.subscribe(x => result.push([x, c, 'a']))],
    b: [null, (c, $) => $.subscribe(x => result.push([x, c, 'b']))],
    d: [null, (c, $) => $.subscribe(x => result.push([x, c, 'd']))]
  }
  return [executors, result]
}
test('AssignSignals():disposables', t => {
  const component = {}
  const executors = {
    a: [null, stub().returns('AAA')],
    b: [null, stub().returns('BBB')],
    d: [null, stub().returns('DDD')]
  }
  const a = O.just('A$')
  const b = O.just('B$')
  const c = O.just('C$')
  const signal$ = mux({a, b, c})
  const {disposables} = AssignSignals(component, executors, signal$)
  t.deepEqual(disposables, ['AAA', 'BBB', 'DDD'])
})

test('AssignSignals():executor_args', t => {
  const component = {}
  const [executors, result] = MockExecutors()
  const a = O.just('A$')
  const b = O.just('B$')
  const c = O.just('C$')
  const signal$ = mux({a, b, c})

  AssignSignals(component, executors, signal$)
  t.deepEqual(result, [
    ['A$', component, 'a'],
    ['B$', component, 'b']
  ])
})

test('AssignSignals():returns', t => {
  const component = {}
  const a = O.just('A$')
  const signal$ = mux({a})
  const value = AssignSignals(component, {}, signal$)
  t.true(value instanceof CompositeDisposable)
})

test('AssignSignals():invalid-executor', t => {
  const component = {}
  const a = O.just('A$')
  const signal$ = mux({a})
  t.deepEqual(AssignSignals(component, {a: null}, signal$).disposables, [])
  t.deepEqual(AssignSignals(component, {a: []}, signal$).disposables, [])
})
