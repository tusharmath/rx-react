/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'

import R from 'ramda'
import render from './ext/render'
import componentWillUnMount from './ext/componentWillUnMount'
import componentWillMount from './ext/componentWillMount'

export default params => {
  const withParams = R.partial(R.__, [params])
  return {
    componentWillMount: withParams(componentWillMount),
    componentWillUnMount: withParams(componentWillUnMount),
    render: withParams(render)
  }
}
