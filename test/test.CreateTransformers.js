/**
 * Created by tushar.mathur on 19/07/16.
 */

'use strict'

import test from 'ava'
import CreateTransformers from '../src/CreateTransformers'

test('invalid interpreters', t => {
  const component = {}
  t.deepEqual(CreateTransformers(component, {}), {})
  t.deepEqual(CreateTransformers(component, {a: {}}), {})
  t.deepEqual(CreateTransformers(component, {a: []}), {})
})
