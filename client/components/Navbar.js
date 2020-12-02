import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

export default Navbar = () => (
  <div>
    <div className="navBar">
      <nav>
        <Link to="/home"><img src="src/images/icons/home.png" width="40" height="40" />
         </Link>

        <Link to="/budget"><img src="src/images/icons/budget.png" width="50" height="50" />
        </Link>
        <Link to="/transaction"><img src="src/images/icons/transactions.png" width="55" height="55" />
        </Link>      
      </nav>
    </div>
  </div>
)

