import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import './Header.css';
import logo from '../../images/NewEngen-Logo.svg'
import cart from '../../images/CartIcon.svg';

import { ColorsContext } from '../../Contexts/ColorsContext';

import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(0, 2),
    },
  }));

const Header = () => {

    const classes = useStyles();

    const { selectedColors } = useContext(ColorsContext);

    return (
        <div className="myheader">
        <Container maxWidth="lg">
            <div>
                <Link to="/">
                <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
            <div>
                <Link to="/cart">
                    <div className="cart" >                     
                        <Badge className={classes.margin} badgeContent={selectedColors.length} color="primary">
                            <img src={cart} alt="cart" />
                        </Badge>
                    </div>
                </Link>                
            </div>            
        </Container>
        </div>
    );
    
}

export default Header;