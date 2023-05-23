import React from 'react'
import '@testing-library/jest-dom'

import { linkRedirect } from './utils/test/linkRedirect'
import './utils/test/setup'

global.React = React
linkRedirect()
