/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'

import CreateTransformers from '../CreateTransformers'

export default function ({view, interpreters}) {
  const transformers = CreateTransformers(this, interpreters)
  return view(transformers)
}
