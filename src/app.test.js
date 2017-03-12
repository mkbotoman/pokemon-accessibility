import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axe from 'axe-core'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('is accessible', () => {
  const div = document.createElement('div')
  axe.run(function (err, results) {
    if (err) throw err;
    ok(results.violations.length === 0, 'Should be no accessibility issues');
  })
  ReactDOM.render(<App />, div)
})
